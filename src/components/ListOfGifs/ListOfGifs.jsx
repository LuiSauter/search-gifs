import Gif from '../Gif/Gif'
// import GifContainer from './GifContainer'
import Masonry from 'react-masonry-css'
import './masonry.css'

function ListOfGifs ({ gifs }) {
  const breakpointColumnsObj = {
    default: 5,
    1300: 3,
    700: 2,
    500: 1
  }
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className='my-masonry-grid'
      columnClassName='my-masonry-grid_column'
    >
      {
        gifs.map(theme => (
          <Gif theme={theme} key={theme.id} />
        ))
      }
    </Masonry>
  )
}

export default ListOfGifs
