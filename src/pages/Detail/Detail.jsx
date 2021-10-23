import Gif from '../../components/Gif/Gif'
import GifContainer from 'components/ListOfGifs/GifContainer'
import useGlobalGifs from 'hooks/useGlobalGifs'
import DetailItem from './DetailItem'
function Detail ({ params }) {
  const gifs = useGlobalGifs()
  console.log(gifs)
  const gif = gifs.find(singleGif => singleGif.id === params.id) || JSON.parse(localStorage.getItem('DetailStorage'))
  console.log(gif, 'GIF')
  if (gif) {
    localStorage.setItem('DetailStorage', JSON.stringify(gif))
  }
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
