import { useEffect, useState, useContext } from 'react'
import GifsContext from 'context/GifsContext'
import { getGifs } from 'services/getGifs'
const INITIAL_PAGE = 0
export default function useGifs ({ keyword, rating } = { keyword: localStorage.getItem('lastKeyword') }) {
  const { gifs, setGifs } = useContext(GifsContext)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [message, setMessage] = useState({ loading: false, message: '' })
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'pc'

  useEffect(() => {
    setMessage({ loading: true, message: '' })
    // recuperamos la keyword del localStorage
    getGifs({ keyword: keywordToUse, rating }).then(data => {
      if (data !== 'No results found') {
        setGifs(data)
        setMessage({ loading: false, message: '' })
        // guardamos la keyword en el localStorage
        localStorage.setItem('lastKeyword', (keyword))
      } else {
        setMessage({ loading: false, message: 'No results found' })
      }
    })
  }, [keyword, setGifs, keywordToUse, rating])

  useEffect(() => {
    if (page === INITIAL_PAGE) return
    setLoadingNextPage(true)
    getGifs({ keyword: keywordToUse, rating, page })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      }).catch(err => err)
  }, [keywordToUse, page, rating, setGifs])

  return { gifs, message, loadingNextPage, setPage }
}
