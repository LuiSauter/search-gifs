import { ThemeProvider } from 'styled-components'
import { Link } from 'wouter'
import { GifItem } from './GifItem'

function Gif ({ theme }) {
  const { id, title, url } = theme
  return (
    <ThemeProvider key={id} theme={theme}>
      <GifItem>
        <h4>{title}</h4>
        <Link to={`/gif/${id}`}>
          <img loading='lazy' src={url} alt={title} />
        </Link>
      </GifItem>
    </ThemeProvider>
  )
}

export default Gif
