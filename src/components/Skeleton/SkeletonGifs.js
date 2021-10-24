import styled from 'styled-components'
import { breakpoints } from 'styles/constant'

export const SkeletonGif = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${(props) => props.theme.color};

  .title {
    height: 18px;
    width: 95%;
    border-radius: 10px;
    margin-bottom: 1.3rem;
    /* background: ${(props) => props.theme.color}; */
  }

  .content {
    /* background: ${(props) => props.theme.color}; */
    width: 95%;
    height: ${(props) => props.theme.size};
    border-radius: 10px;
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`
