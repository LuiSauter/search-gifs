import { Link } from 'wouter'
import { useEffect, useRef, useCallback } from 'react'
// import debounce from 'just-debounce-it'
// import throttle from 'just-throttle'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import Skeleton from '../../components/Skeleton/Skeleton'
import useNearScreen from 'hooks/useNearScreen'
import SearchContainer from './SearchContainer'
import useGifs from '../../hooks/useGifs'
// import { useSEO } from 'hooks/useSEO'
import { Helmet } from 'react-helmet'

function SearchResults ({ params }) {
  const { keyword } = params
  const { gifs, message, setPage } = useGifs({ keyword })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({
    externalRef: message.loading ? null : externalRef,
    once: false
  })
  const title = gifs ? `${gifs.length} Resultados de ${keyword}` : ''

  // useSEO({ description: `Searching ${keyword}`, title })

  const throttleHandleNextPage = useCallback(() => {
    setPage(prevPage => prevPage + 1)
  }, [setPage])

  useEffect(function () {
    if (isNearScreen) throttleHandleNextPage()
  }, [isNearScreen, throttleHandleNextPage])
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <h3>{decodeURI(keyword)}</h3>
      {message.loading
        ? <Skeleton />
        : (message.message !== ''
            ? (
              <p>
                Results not founds <Link to='/'>Search again</Link>
              </p>
              )
            : (
              <>
                <SearchContainer>
                  <ListOfGifs gifs={gifs} />
                </SearchContainer>
                <div id='visor' ref={externalRef} />
              </>
              )
          )}
    </>
  )
}

export default SearchResults
