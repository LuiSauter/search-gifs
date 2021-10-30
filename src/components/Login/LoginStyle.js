import styled from 'styled-components'
import { breakpoints, colors } from 'styles/constant'

const LoginStyle = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  margin: auto;
  padding: 1rem 0;
  color: white;
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
      border: none;
      outline: none;
      border-radius: 10px;
      font-size: 1.1rem;
      padding: 0 1rem;
      &:focus {
        box-shadow: 0px 0px 1px 4px ${colors.colorBlue};
      }
    }
    .login-btn {
      position: relative;
      background-color: ${colors.colorBlue};
      border: none;
      cursor: pointer;
      width: 100%;
      border-radius: 10px;
      height: 2.2rem;
      font-size: 1.1rem;
      margin: auto;
      outline: none;
      &:hover {
        background-color: ${colors.colorBlue}aa;
      }
      &:active {
        background-color: ${colors.colorBlue}dd;
      }
      &:focus {
        box-shadow: 0px 0px 1px 4px ${colors.colorWhite};
      }
    }
  }
  .login-hero {
    margin: auto;
    object-fit: cover;
    img {
      max-width: 380px;
      margin: auto;
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (max-width: ${breakpoints.laptop}) {
    grid-template-columns: 1fr;
    .login-hero {
      img {
        max-width: 200px;
      }
    }
  }
`

export default LoginStyle
