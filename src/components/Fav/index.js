import useUser from 'hooks/useUser'
import { useLocation } from 'wouter'

function Fav ({ id }) {
  const { isLogged, addFav, favs } = useUser({ id })
  const [, navigate] = useLocation()

  const isFaved = favs.some(favId => favId === id)

  const handleClick = () => {
    if (!isLogged) return navigate('/login')
    addFav({ id })
    console.log(id)
  }

  const [label, emoji] = isFaved
    ? ['Remove Gif from favorites', 'X']
    : ['Add gif to favorites', 'fav']
  return (
    <button onClick={handleClick}>
      <span role='img' aria-label={label}>{emoji}</span>
    </button>
  )
}

export default Fav
