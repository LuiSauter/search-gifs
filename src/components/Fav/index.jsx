import { useState } from 'react'

// import Modal from '../Modal/index'
import useUser from 'hooks/useUser'
import Login from '../Login/Login'
import ModalPortal from '../Modal/index'

function Fav ({ id }) {
  const { isLogged, favs, addFav, delFav } = useUser()
  const [showModal, setShowModal] = useState(false)

  const isFaved = favs.find(favId => favId === id)

  const handleClick = () => {
    typeof isFaved !== 'undefined'
      ? delFav({ id })
      : addFav({ id })
    if (!isLogged) return setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const [label, emoji] = typeof isFaved !== 'undefined'
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
