import { Link } from 'wouter'
import { useEffect, useRef, useCallback } from 'react'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import Skeleton from '../../components/Skeleton/Skeleton'
import useNearScreen from 'hooks/useNearScreen'
import SearchContainer from './SearchContainer'
import useGifs from '../../hooks/useGifs'
import { Helmet } from 'react-helmet'
import SearchForm from 'components/SearchForm'

function SearchResults ({ params }) {
  const { keyword, rating = 'g' } = params
  const { gifs, message, setPage } = useGifs({ keyword, rating })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({
    externalRef: message.loading ? null : externalRef,
    once: false
  })
  const title = gifs ? `${gifs.length} Resultados de ${keyword}` : ''
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
      <SearchForm initialKeword={keyword} initialRating={rating} />
      <SearchContainer>
        <h3>{decodeURI(keyword)}</h3>
      </SearchContainer>
      {message.loading
        ? <Skeleton />
        : (message.message !== ''
            ? (
              <SearchContainer>
                <p>
                  Results not founds <Link to='/'>Search again</Link>
                </p>
              </SearchContainer>
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
