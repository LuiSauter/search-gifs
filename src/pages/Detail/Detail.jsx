import Gif from '../../components/Gif/Gif'
import GifContainer from 'components/ListOfGifs/GifContainer'
import DetailItem from './DetailItem'
import useSingleGif from 'hooks/useSingleGif'
import { Redirect } from 'wouter'
// import { useSEO } from 'hooks/useSEO'
import { Helmet } from 'react-helmet'

function Detail ({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id })
  const title = gif ? gif.title : ''

  // useSEO({ description: `Detail of ${title}`, title })

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
      <DetailItem>
        <GifContainer>
          <Gif theme={gif} />
        </GifContainer>
        <a href={gif.url} target='_blank' rel='noreferrer'>See more</a>
      </DetailItem>
    </>
  )
}

export default Detail
