import styled from 'styled-components'
import { breakpoints } from 'styles/constant'

const UlCategory = styled.div`
  position: sticky;
  top: .8rem;
  margin: 0 auto;
  margin-bottom: 1rem;
  width: 100%;
  ul {
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
  }
  li {
    list-style: none;
    display: inline-block;
    padding: .4rem .4rem;
    margin: .3rem 0 .3rem .5rem;
    transition: transform .2s ease-in-out;

    &:hover {
      transform: scale(1.02);
    }
    a:hover {
      padding-bottom: .12rem;
    }
  }
  @media screen and (min-width: ${breakpoints.laptop}) {
    ul {
      padding-left: 2rem;
    }

    h3 {
      padding-left: 2rem;
    }
  }
`

export default UlCategory
