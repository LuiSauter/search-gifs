import { ThemeProvider } from 'styled-components'
import { colorSkeleton } from 'styles/constant'
import Masonry from 'react-masonry-css'
import { SkeletonGif } from './SkeletonGifs'
import React from 'react'

function Skeleton () {
  const breakpointColumnsObj = {
    default: 5,
    1300: 3,
    700: 2,
    500: 1
  }
  const skeletonRender = colorSkeleton.map(theme => (
    <ThemeProvider key={theme.num} theme={theme}>
      <SkeletonGif key={theme.num}>
        <div className='title' />
        <div className='content' />
      </SkeletonGif>
    </ThemeProvider>
  ))
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className='my-masonry-grid'
      columnClassName='my-masonry-grid_column'
    >
      {
        skeletonRender
      }
    </Masonry>
  )
}

export default React.memo(Skeleton)
