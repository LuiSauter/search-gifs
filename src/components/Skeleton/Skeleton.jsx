import { GifItemSkeleton } from 'components/Gif/GifItem'
import { ThemeProvider } from 'styled-components'
// import { colorSkeleton } from 'styles/constant'
// import GifContainer from 'components/ListOfGifs/GifContainer'
// import useGlobalGifs from 'hooks/useGlobalGifs'
import Masonry from 'react-masonry-css'
import useGifs from 'hooks/useGifs'

function Skeleton () {
  const { gifs } = useGifs()

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
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
          <ThemeProvider key={theme.id} theme={theme}>
            <GifItemSkeleton key={theme.id}>
              <div className='title' />
              <div className='content' />
            </GifItemSkeleton>
          </ThemeProvider>
        ))
      }
    </Masonry>
  )
}

export default Skeleton
