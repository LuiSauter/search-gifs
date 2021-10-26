import { getSingleGif } from '../services/getSingleGif'
import { useEffect, useState } from 'react'
import useGifs from './useGifs'

export default function useSingleGif ({ id }) {
  const { gifs } = useGifs()
  const gifFromCache = gifs.find(singleGif => singleGif.id === id)
  const [gif, setGifs] = useState(gifFromCache)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    if (!gif) {
      setIsLoading(true)
      getSingleGif({ id })
        .then(gif => {
          setGifs(gif)
          setIsLoading(false)
          setIsError(false)
        })
        .catch(() => {
          setIsLoading(false)
          setIsError(true)
        })
    }
  }, [gif, id])

  return { gif, isLoading, isError }
}
