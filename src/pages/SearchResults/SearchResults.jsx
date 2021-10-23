// import useGlobalGifs from 'hooks/useGlobalGifs'
import { Link } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import Skeleton from '../../components/Skeleton/Skeleton'
import useGifs from '../../hooks/useGifs'
import SearchContainer from './SearchContainer'

function SearchResults ({ params }) {
  const { keyword } = params
  const { gifs, message, setPage } = useGifs({ keyword })
  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1)
  }

  return (
    <>
      <h3>{decodeURI(keyword)}</h3>
      {
        message.message !== '' &&
          <p>
            Results not founds <Link to='/'>Search again</Link>
          </p>
      }
      {
        message.loading
          ? <Skeleton />
          : <SearchContainer><ListOfGifs gifs={gifs} /></SearchContainer>
      }
      <button onClick={handleNextPage}>See more</button>
    </>
  )
}

export default SearchResults
