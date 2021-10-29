import useUser from 'hooks/useUser'
import { useLocation } from 'wouter'

function Fav ({ id }) {
  const { isLogged, favs, addFav } = useUser()
  const [, navigate] = useLocation()
  const isFaved = favs.find(favId => favId === id)

  const handleClick = () => {
    if (!isLogged) return navigate('/login')
    addFav({ id })
  }

  const [label, emoji] = typeof isFaved !== 'undefined'
    ? ['Remove Gif from favorites', 'X']
    : ['Add gif to favorites', 'fav']

  return (
    <button onClick={handleClick}>
      <span role='img' aria-label={label}>
        {emoji}
      </span>
    </button>
  )
}

export default Fav
