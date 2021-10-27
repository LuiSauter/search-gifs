import DetailItem from './DetailItem'
import useSingleGif from 'hooks/useSingleGif'
import { Redirect } from 'wouter'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'

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
                // width={gif.gif.images.downsized_medium.width}
                alt={title}
              />
            </div>
            <a href={gif.url} target='_blank' rel='noreferrer'>See more</a>
          </div>
        </DetailItem>
      </ThemeProvider>
    </>
  )
}

export default Detail
