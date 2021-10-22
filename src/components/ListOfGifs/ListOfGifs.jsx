import Gif from '../Gif/Gif'
import GifContainer from './GifContainer'

function ListOfGifs ({ gifs }) {
  return (
    <GifContainer>
      {
        gifs.map(gif => (
          <Gif gif={gif} key={gif.id} />
        ))
      }
    </GifContainer>
  )
}

export default ListOfGifs
