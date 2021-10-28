import styled from 'styled-components'
import { colors } from 'styles/constant'

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: .5rem .8rem;
  a {
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    &:hover {
      color: ${colors.colorBlue};
    }
  }
`

export default Header
