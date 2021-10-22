import { useEffect, useState, useContext } from 'react'
import GifsContext from 'context/GifsContext'
import { getGifs } from 'services/getGifs'
// const INITIAL_PAGE = 0
export default function useGifs ({ keyword } = { keyword: localStorage.getItem('lastKeyword') }) {
  const { gifs, setGifs } = useContext(GifsContext)
  // const [page, setPage] = useState(INITIAL_PAGE)
  // console.log(page)
  // setPage(1)
  const [message, setMessage] = useState({ loading: false, message: '' })
  useEffect(() => {
    setMessage({ loading: true, message: '' })
    // recuperamos la keyword del localStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'pc'
    getGifs({ keyword: keywordToUse }).then(data => {
      if (data !== 'No results found') {
        setGifs(data)
        setMessage({ loading: false, message: '' })
        // guardamos la keyword en el localStorage
        localStorage.setItem('lastKeyword', (keyword))
      } else {
        setMessage({ loading: false, message: 'No results found' })
      }
    })
  }, [keyword, setGifs])

  return { gifs, message }
}
