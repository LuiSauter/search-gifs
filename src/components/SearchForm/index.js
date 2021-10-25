import React, { useState } from 'react'

const { default: Form } = require('pages/Home/Form')

function SearchForm ({ onSubmitForm }) {
  const [keyword, setKeyword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (keyword === '') return
    onSubmitForm({ keyword })
    setKeyword('')
  }

  const handleChange = (e) => {
    setKeyword(e.target.value)
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
    </Form>
  )
}

export default React.memo(SearchForm)
