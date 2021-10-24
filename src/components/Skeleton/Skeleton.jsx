import { ThemeProvider } from 'styled-components'
import { colorSkeleton } from 'styles/constant'
// import GifContainer from 'components/ListOfGifs/GifContainer'
// import useGlobalGifs from 'hooks/useGlobalGifs'
import Masonry from 'react-masonry-css'
import { SkeletonGif } from './SkeletonGifs'

function Skeleton () {
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
        colorSkeleton.map(theme => (
          <ThemeProvider key={theme.num} theme={theme}>
            <SkeletonGif key={theme.num}>
              <div className='title' />
              <div className='content' />
            </SkeletonGif>
          </ThemeProvider>
        ))
      }
    </Masonry>
  )
}

export default Skeleton
