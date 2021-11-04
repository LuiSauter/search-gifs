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
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .img-hover {
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        li {
          list-style: none;
          text-align: center;
          font-size: .92rem;
        }
      }
      &:hover {
        .img-hover {
          display: flex;
          background-color: #22222291;
        }
      }
    }
    h4 {
      margin: auto;
    }

    &__btn {
      margin: 1rem auto;
      display: flex;
      flex-direction: row;
      align-items:center;
      justify-content: center;
      a {
        text-align: center;
        /* border: 1px solid ${colors.colorBlue}; */
        color: ${colors.colorWhite};
        border-radius: 7px;
        transition: background .3s ease-in-out;
        font-size: 1.8rem;
        padding: .2rem .5rem;
        margin-left: 1rem;
        &:hover {
          color: ${colors.background};
          background: ${colors.colorBlue};
        }
      }
      button {
        border: none;
        background-color: transparent;
        i {
          font-size: 1.8rem;
          color: ${colors.colorWhite};
          transition: transform .5s;
          &:hover {
            color: #FF5151;
            /* font-size: 1.6rem; */
            transform: scale(1.09);
          }
        }
        .heart {
          color: #FF5151;
          transition: filter .5s ;
          &:hover {
            color: #FF5151;
            filter: drop-shadow(0px 0px 4px #ee505066);
          }
        }
      }
    }
  }
`

export default DetailItem
