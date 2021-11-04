import styled from 'styled-components'
import { breakpoints, colors } from 'styles/constant'

const ModalContainer = styled.div`
  .modal {
    background-color: #00000055;
    backdrop-filter: blur(3px) brightness(0.7);
    height: 100vh;
    position: fixed;
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1000;
    padding: 1.3rem 0 2rem 0;
    display: flex;
    justify-content:center;
    align-items:center;
    overflow: auto;
    .modal-content {
      border-radius: 10px;
      background-color: ${colors.background};
      width: 700px;
      padding: 1rem 1rem;
      margin: auto auto;
      height: max-content;
      position: relative;
      overflow: auto;
      strong {
        color: #fff;
        padding-left: 1.9rem;
      }
      &__btn {
        position: absolute;
        top: 5px;
        left: 5px;
        height: 40px;
        width: 40px;
        padding: .5rem;
        z-index: 2000;
        background-color: transparent;
        border: none;
        i {
          color: #fff;
          font-size: 1.7rem;
          &:hover {
            color: #FF5151;
          }
        }
      }

      @media screen and (max-width:${breakpoints.tablet}) {
        max-width: 300px;
      }
    }
  }
`

export default ModalContainer
