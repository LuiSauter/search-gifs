import styled from 'styled-components'
import { colors } from 'styles/constant'

const FormSC = styled.form`
  max-width: 400px;
  margin: 1rem auto;
  width: 85%;
  text-align: center;
  em {
    color: #ee4444;
  }
  label {
    color: #ffffff80;
  }
  label span, small a {
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
  .login-btn, .register-btn {
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
`

export default FormSC
