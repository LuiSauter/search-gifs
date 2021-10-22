import Gif from 'components/Gif/Gif'
import GifContainer from 'components/ListOfGifs/GifContainer'
import useGlobalGifs from 'hooks/useGlobalGifs'
import DetailItem from './DetailItem'
function Detail ({ params }) {
  const gifs = useGlobalGifs()
  const gif = gifs.find(singleGif => singleGif.id === params.id) || JSON.parse(localStorage.getItem('DetailStorage'))
  if (gif) {
    localStorage.setItem('DetailStorage', JSON.stringify(gif))
  }
  return (
    <DetailItem>
      <GifContainer>
        <Gif gif={gif} />
      </GifContainer>
      <a href={gif.url} target='_blank' rel='noreferrer'>See more</a>
    </DetailItem>
  )
}

export default Detail
