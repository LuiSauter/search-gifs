import styled from 'styled-components'
import { colors } from 'styles/constant'

const LoginStyle = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  margin: auto;
  form {
    max-width: 400px;
    margin: 1rem auto;
    width: 85%;
    label span {
      color: ${colors.colorBlue};
    }
    label, input {
      display: block;
      text-align: left;
    }
    input {
      margin-top: .3rem;
      margin-bottom: 1rem;
      height: 2.2rem;
      width: 100%;
      border-radius: 10px;
      font-size: 1.1rem;
      padding: 0 1rem;
    }
    button {
      background-color: ${colors.colorBlue};
      border: none;
      cursor: pointer;
      width: 100%;
      border-radius: 10px;
      height: 2.2rem;
      font-size: 1.1rem;
      &:hover {
        background-color: ${colors.colorBlue}aa;
      }
      &:active {
        background-color: ${colors.colorBlue}dd;
      }
    }
  }
  .login-hero {
    width: 100%;
    object-fit: cover;
    img {
      max-width: 380px;
      margin: auto;
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (max-width: 790px) {
    grid-template-columns: 1fr;
    .login-hero {
      img {
        max-width: 200px;
      }
    }
  }
`

export default LoginStyle
