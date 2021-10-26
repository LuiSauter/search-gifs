import styled from 'styled-components'
import { breakpoints, colors } from '../../styles/constant'

const AppContainer = styled.div`
  width: 100%;
  margin: auto;
  color: ${colors.colorWhite};

  a {
    text-decoration: none;
    color: ${colors.colorWhite};
    /* font-weight: bold; */
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

`

export default AppContainer
