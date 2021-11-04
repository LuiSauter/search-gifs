import styled from 'styled-components'
import { colors } from 'styles/constant'

const FavStyle = styled.button`
  background: transparent;
  border: none;
  span {
    i {
      font-size: 1.5rem;
      color: ${colors.colorWhite};
      cursor: pointer;
      &:hover {
        transform: scale(1.08);
        color: #FF5151;
      }
    }
    .heart {
      color: #FF5151;
      transition: filter .5s ;
      &:hover {
        color: #FF5151;
        filter: drop-shadow(0px 0px 5px #ee5050cc);
      }
    }
  }
`

export default FavStyle
