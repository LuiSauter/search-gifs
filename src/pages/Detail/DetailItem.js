import styled from 'styled-components'
import { colors } from 'styles/constant'

const DetailItem = styled.div`
  margin: 2rem auto;
  width: 90%;
  .detail-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    max-width: 500px;
    margin: auto;
    &__img {
      margin: auto;
      margin-top: 1rem ;
      border-radius: 10px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    h4 {
      margin: auto;
    }
    a {
      text-align: center;
      font-size: 1rem;
      border: 1px solid ${colors.colorBlue};
      color: ${colors.colorBlue};
      border-radius: 7px;
      margin-top: 1rem;
      padding: .5rem .5rem;
      transition: background .3s ease-in-out;
      &:hover {
        color: ${colors.background};
        background: ${colors.colorBlue};
      }
    }
  }
`

export default DetailItem
