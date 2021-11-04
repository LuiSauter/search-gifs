import Fav from '../Fav/index'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Link } from 'wouter'
import { GifItem } from './GifItem'

function Gif ({ theme }) {
  const { id, title, url } = theme
  const gifRender = (
    <GifItem>
      <Fav id={id} title={title} />
      <Link to={`/gif/${id}`}>
        <h4>{title}</h4>
        <img loading='lazy' src={url} alt={title} />
      </Link>
    </GifItem>
  )
  return (
    <ThemeProvider key={id} theme={theme}>
      {gifRender}
    </ThemeProvider>
  )
}

export default React.memo(Gif, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id
})
