import React from 'react'
import { useLocation } from 'wouter'
import useForm from './hook'
import Form from '../../pages/Home/Form'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm ({ initialKeyword, initialRating }) {
  const { keyword, times, rating, updateKeyword, updateRating } = useForm({ initialKeyword, initialRating })

  const [, pushLocation] = useLocation()

  const handleChange = (e) => {
    updateKeyword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    pushLocation(`/search/${keyword}/${rating}`)
  }

  const handleChangeRating = (e) => {
    updateRating(e.target.value)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <button className='buttonSearch'><b>search</b></button>
      <input
        className='inputSearch'
        onChange={handleChange}
        type='text'
        value={keyword}
        name='keyword'
        placeholder='Search a gif here'
      />
      <select
        className='selectSearch'
        required
        name='selected'
        value={rating}
        onChange={handleChangeRating}
      >
        <option value='' disabled>Rating type</option>
        {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
      </select>
      <small>{times}</small>
    </Form>
  )
}

export default React.memo(SearchForm)
