import { ThemeProvider } from 'styled-components'
import { Link } from 'wouter'
import { GifItem } from './GifItem'

function Gif ({ gif }) {
  const { theme } = gif
  return (
    <ThemeProvider key={theme.num} theme={theme}>
      <GifItem>
        <h4>{gif.title}</h4>
        <Link to={`/gif/${gif.id}`}>
          <img loading='lazy' src={gif.url} alt={gif.title} />
        </Link>
      </GifItem>
    </ThemeProvider>
  )
}

export default Gif
