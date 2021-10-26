import LazyTrending from '../../components/TrendingSearches/LazyTrending'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import Skeleton from '../../components/Skeleton/Skeleton'
import useGifs from '../../hooks/useGifs'
import SearchForm from 'components/SearchForm'
import { Helmet } from 'react-helmet'

function Home () {
  const { gifs, message } = useGifs()
  return (
    <>
      <Helmet>
        <title>Home | Gif</title>
      </Helmet>
      <div>
        <SearchForm />
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
    </>
  )
}

export default Home
