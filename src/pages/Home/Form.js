import styled from 'styled-components'
import { colors } from '../../styles/constant'

const Form = styled.form`
  text-align: center;
  width: 100%;
  margin: 1rem 0;
  .inputSearch, .buttonSearch {
    font-size: 1rem;
    border: none;
    outline: none;
  }

  .inputSearch {
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    padding: .6rem .2rem;
  }

  .buttonSearch {
    background: ${colors.colorBlue};
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    color: ${colors.background};
    cursor: pointer;
    padding: .6rem .8rem;
  }
`

export default Form
