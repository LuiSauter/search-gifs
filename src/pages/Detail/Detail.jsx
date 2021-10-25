import Gif from '../../components/Gif/Gif'
import GifContainer from 'components/ListOfGifs/GifContainer'
import DetailItem from './DetailItem'
import useSingleGif from 'hooks/useSingleGif'
import { Redirect } from 'wouter'

function Detail ({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id })
  if (isLoading) return 'cargando...'
  if (isError) return <Redirect to='/404' />
  if (!gif) return null
  return (
    <DetailItem>
      <GifContainer>
        <Gif theme={gif} />
      </GifContainer>
      <a href={gif.url} target='_blank' rel='noreferrer'>See more</a>
    </DetailItem>
  )
}

export default Detail
