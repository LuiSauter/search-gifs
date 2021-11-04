import styled from 'styled-components'
import { breakpoints } from 'styles/constant'

const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  width: 90%;
  margin: auto;
  font-size: .9rem;
  .profile-card {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: 2rem 0;
    &__img {
      font-size: 7rem;
    }
    &__text {
      p {
        margin-bottom: .5rem;
        margin-top: .5rem;
      }
    }
  }

  .fav-container {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-auto-rows: auto;
    width: 100%;
    gap: 3rem;
    &__item {
      border-radius: 3px;
      border: 1px solid #dbdbdb0a;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      overflow: hidden;
      width: 100%;
      max-width: 700px;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
    .fav-item {
      &__title, &__fav {
        width: 100%;
        padding: .9rem 1rem;
      }
      &__title {
        display: flex;
        justify-content: space-between;
        i {
          cursor: pointer;
          font-size: 1.2rem;
          &:hover {
            color: #2FDD92;
          }
        }
      }
      &__fav {
        i {
          margin-right: .5rem;
        }
        display: flex;
        align-items: center;
        /* width: 100%; */
      }
    }
  }
  .trends-category {
    .trends-sticky {
      position: sticky;
      top: 50px;
    }
  }

  @media screen and (max-width:${breakpoints.laptop}) {
    grid-template-columns: 1fr;
    width: 100%;
    .trends-category {
      margin: 0 .7rem;
    }
    .fav-container__item {
      border: none;
    }
  }
`

export default ProfileContainer
