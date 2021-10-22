import LazyTrending from 'components/TrendingSearches/LazyTrending'
import { useState } from 'react'
import { useLocation } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import Skeleton from '../../components/Skeleton/Skeleton'
import useGifs from '../../hooks/useGifs'
import Form from './Form'

function Home () {
  const [keyword, setKeyword] = useState('')
  const [, pushLocation] = useLocation()
  const { gifs, message } = useGifs()

  const onSubmitForm = (e) => {
    e.preventDefault()
    if (keyword === '') return
    pushLocation(`/search/${keyword}`)
    setKeyword('')
  }

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }

  return (
    <div>
      <Form onSubmit={onSubmitForm}>
        <button className='buttonSearch'><b>search</b></button>
        <input
          className='inputSearch'
          onChange={handleChange}
          type='text'
          value={keyword}
          name='keyword'
          placeholder='Search a gif here'
        />
      </Form>
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
