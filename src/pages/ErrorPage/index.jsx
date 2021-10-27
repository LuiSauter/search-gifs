import SearchForm from 'components/SearchForm'
import { Helmet } from 'react-helmet'
import { gifsErrors } from '../../styles/constant'
import { Link } from 'wouter'
import ErrorContainer from './Error'

export default function ErrorPage () {
  const randomImage = () => {
    return `https://media.giphy.com/media/${gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1]}/giphy.gif`
  }

  console.log(gifsErrors)

  return (
    <>
      <Helmet>
        <title>Error 404 | Giffy</title>
      </Helmet>
      <ErrorContainer>
        {/* <div className='error-sticky'>
          asdas
        </div> */}
        <div className='error-gif' />
        <SearchForm />
        <div className='page-error'>
          <span className='page-error__code'>404</span>
          <span className='page-error__msg'>Sometimes gettings lost isn't that bad</span>
          <img className='page-error__gif-err' src={randomImage()} alt='alt-page-404' />
          <Link to='/'>Go back home</Link>
        </div>
      </ErrorContainer>
    </>
  )
}
