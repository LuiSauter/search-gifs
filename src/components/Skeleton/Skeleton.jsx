import { GifItemSkeleton } from 'components/Gif/GifItem'
import { ThemeProvider } from 'styled-components'
import { colorSkeleton } from 'styles/constant'
import GifContainer from 'components/ListOfGifs/GifContainer'
function Skeleton () {
  return (
    <GifContainer>
      {
        colorSkeleton.map(theme => (
          <ThemeProvider key={theme.num} theme={theme}>
            <GifItemSkeleton key={theme.num}>
              <div className='title' />
              <div className='content' />
            </GifItemSkeleton>
          </ThemeProvider>
        ))
      }
    </GifContainer>
  )
}

export default Skeleton
