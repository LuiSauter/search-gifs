import React from 'react'
import ModalContainer from './ModalContainer'
import ReactDOM from 'react-dom'

function Modal ({ children, onClose }) {
  return (
    <ModalContainer>
      <div className='modal'>
        <div className='modal-content'>
          <button onClick={onClose} className='modal-content__btn'>
            <i className='fas fa-times' />
          </button>
          {children}
        </div>
      </div>
    </ModalContainer>
  )
}

export default function ModalPortal ({ children, onClose }) {
  return ReactDOM.createPortal(
    <Modal onClose={onClose}>{children}</Modal>,
    document.getElementById('modal-root')
  )
}
