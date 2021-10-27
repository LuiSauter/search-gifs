import styled from 'styled-components'
import { colors } from 'styles/constant'
import { gifsErrors } from '../../styles/constant'
const SIZE = '200px'

const randomImage = () => {
  return `https://media.giphy.com/media/${gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1]}/giphy.gif`
}
const ErrorContainer = styled.div`
  .error-gif {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: -1;
    opacity: .5;
    background-image: url(${randomImage});
    backdrop-filter: blur(3px) brightness(0.7);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .page-error {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    text-align: center;
    z-index: 100;
    &__code {
      font-size: 4rem;
      font-weight: bold;
      font-style: italic;
    }
    &__msg {
      font-size: 1.2rem;
      margin: 1rem auto;
      filter: drop-shadow(0px 0px 5px #000);
    }
    &__gif-err {
      margin: 1rem auto;
      width: ${SIZE};
      height: ${SIZE};
      object-fit: cover;
    }
  }
  a {
    padding: .5rem 1rem;
    border-radius: 10px;
    border: none;
    color: ${colors.colorBlack};
    background: ${colors.colorBlue};
    box-shadow: 0px 0px 5px #000;
    &:hover {
      background: ${colors.colorBlue}c7;
      color: ${colors.background};
    }
  }
`

export default ErrorContainer
