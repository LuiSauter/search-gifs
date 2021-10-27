import styled from 'styled-components'
import { breakpoints, colors } from '../../styles/constant'

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
  color: ${colors.colorWhite};
  a {
    text-decoration: none;
    color: ${colors.colorWhite};
    &:hover {
    }
  }

  .home-contain {
    display: grid;
    grid-template-columns: 4fr 1fr;
    width: 90%;
    margin: 0 auto;

    @media screen and (max-width:${breakpoints.laptop}) {
      grid-template-columns: 1fr;
    }
  }

  .error-page {
    background-image: url('https://media.giphy.com/media/d2jjuAZzDSVLZ5kI/giphy.gif');
    background-repeat: no-repeat;
    background-size: cover;
    backdrop-filter: blur(3px) brightness(0.7);
  }

`

export default AppContainer
