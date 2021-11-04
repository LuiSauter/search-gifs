import styled from 'styled-components'
import { colors } from 'styles/constant'

const Header = styled.div`
  background-color: #1f2028d4;
  position: sticky;
  top: 0;
  z-index: 10000;
  display: flex;
  justify-content: flex-end;
  padding: .5rem .8rem;
  .login {
    font-size: 1.1rem;
    &:hover {
    }
  }
  a {
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    margin-right: 2rem;
    &:hover {
      color: ${colors.colorBlue};

    }
  }

  .header-stiky {
    a {
      font-size: 1rem;
    }
    .btn-logout {
      margin-right: 2rem;
      i {
        color: #FF5151;
      }
      font-size: 1.1rem;
      background-color: transparent;
      border: none;
      color: #fff;
      cursor: pointer;
      &:hover {
        color: #FF5151;
      }
    }
  }
`

export default Header
