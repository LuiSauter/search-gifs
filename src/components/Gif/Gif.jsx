import { ThemeProvider } from 'styled-components'
import { Link } from 'wouter'
import { GifItem } from './GifItem'

function Gif ({ theme }) {
  const { id, title, url } = theme
  return (
    <ThemeProvider key={id} theme={theme}>
      <GifItem>
        <Link to={`/gif/${id}`}>
          <h4>{title}</h4>
          <img loading='lazy' src={url} alt={title} />
        </Link>
      </GifItem>
    </ThemeProvider>
  )
}

export default Gif
