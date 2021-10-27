import styled from 'styled-components'
import { breakpoints } from 'styles/constant'

export const SkeletonGif = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${(props) => props.theme.color};
  margin: auto;
  .title {
    height: 18px;
    width: 100%;
    border-radius: 10px;
    margin-bottom: 1.3rem;
  }
  .content {
    width: 100%;
    height: ${(props) => props.theme.size};
    border-radius: 10px;
  }
  @media screen and (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`
