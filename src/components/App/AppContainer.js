import styled from 'styled-components'
import { breakpoints, colors } from '../../styles/constant'

const AppContainer = styled.div`
  width: 95%;
  margin: auto;
  color: ${colors.colorWhite};

  a {
    color: ${colors.colorBlue};
    text-decoration: none;
    margin-right: 10px;
    color: ${colors.colorWhite};
    &:hover {
      color: ${colors.colorBlue};
    }
  }

  .home-contain {
    display: grid;
    grid-template-columns: 5fr 1fr;
    width: 90%;
    margin: 0 auto;

    @media screen and (max-width:${breakpoints.laptop}) {
      grid-template-columns: 1fr;
    }
  }

`

export default AppContainer
