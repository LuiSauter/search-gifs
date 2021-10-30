import { useState } from 'react'

// import Modal from '../Modal/index'
import useUser from 'hooks/useUser'
import Login from '../Login/Login'
import ModalPortal from '../Modal/index'

function Fav ({ id }) {
  const { isLogged, favs, addFav } = useUser()
  const [showModal, setShowModal] = useState(false)
  const isFaved = favs.some(favId => favId.fav === id)

  const handleClick = () => {
    if (!isLogged) return setShowModal(true)
    addFav({ id })
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const [label, emoji] = isFaved
    ? ['Remove Gif from favorites', 'heart fas']
    : ['Add gif to favorites', 'inHeart far']
  return (
    <>
      <button className='fav-btn' onClick={handleClick}>
        <span role='img' aria-label={label}>
          <i className={emoji + ' fa-heart'} />
        </span>
      </button>
      {showModal && (
        <ModalPortal onClose={handleClose}>
          <Login />
        </ModalPortal>
      )}
    </>
  )
}

export default Fav
