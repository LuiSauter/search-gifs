import LazyTrending from '../../components/TrendingSearches/LazyTrending'
import { useLocation } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import Skeleton from '../../components/Skeleton/Skeleton'
import useGifs from '../../hooks/useGifs'
import SearchForm from 'components/SearchForm'
import { useCallback } from 'react'

function Home () {
  const [, pushLocation] = useLocation()
  const { gifs, message } = useGifs()

  const onSubmit = useCallback(({ keyword }) => {
    pushLocation(`/search/${keyword}`)
  }, [pushLocation])

  return (
    <div>
      <SearchForm onSubmitForm={onSubmit} />
      <div className='home-contain'>
        <div>
          <h3>last search</h3>
          {
            message.loading
              ? <Skeleton />
              : <ListOfGifs gifs={gifs} />
          }
        </div>
        <LazyTrending />
      </div>
    </div>
  )
}

export default Home
