import DetailItem from './DetailItem'
import useSingleGif from 'hooks/useSingleGif'
import { Redirect } from 'wouter'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import Fav from '../../components/Fav/index'

function Detail ({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id })
  const title = gif ? gif.title : ''
  if (isLoading) {
    return (
      <Helmet>
        <title>cargando...</title>
      </Helmet>
    )
  }
  if (isError) return <Redirect to='/404' />
  if (!gif) return null
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <ThemeProvider key={gif.id} theme={gif}>
        <DetailItem>
          <div className='detail-container'>
            <h4>{title}</h4>
            <div className='detail-container__img'>
              <img
                loading='lazy'
                src={gif.gif.images.downsized_medium.url}
                alt={title}
              />
              <ul className='img-hover'>
                <li>Type: {gif.gif.type}</li>
                <li>{gif.gif.username}</li>
                <li>Rating: {gif.gif.rating}</li>
              </ul>
            </div>
            <div className='detail-container__btn'>
              <Fav id={gif.id} />
              <a href={gif.url} target='_blank' rel='noreferrer'>link <i className='fas fa-angle-double-right' /></a>
            </div>
          </div>
        </DetailItem>
      </ThemeProvider>
    </>
  )
}

export default Detail
