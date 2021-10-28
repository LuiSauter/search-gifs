import styled from 'styled-components'
import { colors } from '../../styles/constant'

const Form = styled.form`
  text-align: center;
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  small {
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    padding: .6rem .4rem;
    border: 2px solid ${colors.colorBlue};
  }
  .inputSearch, .buttonSearch, .selectSearch {
    font-size: 1rem;
    border: none;
    outline: none;
  }

  .inputSearch {
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
  .selectSearch {
    width: 50px;
    height: auto;
    text-align: center;
    background: ${colors.colorBlue};
    padding: .6rem 0rem;
  }
`

export default Form
