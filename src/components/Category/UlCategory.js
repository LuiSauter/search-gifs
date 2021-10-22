import styled from 'styled-components'
import { breakpoints, colors } from 'styles/constant'

const UlCategory = styled.div`
  position: sticky;
  top: 2rem;
  margin: 0 auto;
  margin-bottom: 1rem;
  li {
    list-style: none;
    display: inline-block;
    padding: .2rem 0rem;
    margin-bottom: .4rem;
    transition: transform .2s ease-in-out;
    &:hover {
      transform: scale(1.02);
    }
    a:hover {
      /* border-bottom: 2px solid ${colors.colorBlue}; */
      padding-bottom: .12rem;
    }
  }
  @media screen and (min-width: ${breakpoints.laptop}) {
    li {
      display: block;
      width: 100%;
      padding: .3rem 0 0 2rem;
    }
    h3 {
      padding-left: 2rem;
    }
  }
`

export default UlCategory
