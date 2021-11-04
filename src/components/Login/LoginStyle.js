import styled from 'styled-components'
import { breakpoints } from 'styles/constant'

const LoginStyle = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  margin: auto;
  padding: 1rem 0;
  color: white;
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
