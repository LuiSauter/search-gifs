import styled from 'styled-components'
import { breakpoints } from 'styles/constant'

export const GifItem = styled.div`
  display: flex;
  width: 100%;
  max-height: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${props => props.theme.theme.color};
  transition: transform .2s ease-in-out;
  overflow: hidden;
  position: relative;
  a {
    height: ${props => props.theme.heightGif};
    margin: auto;
    width: 100%;
    text-align: left;
  }
  &:hover {
    border:1px solid ${props => props.theme.theme.color};
    transform: scale(1.01);
    h4 {
      display: block;
      background: ${props => props.theme.theme.color}80;
      filter: contrast(2);
    }
  }
  h4 {
    display: none;
    position: absolute;
    top: 0;
    font-size: 1rem;
    font-weight: 500;
    padding: .4rem .5rem;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  img {
    height: ${props => props.theme.heightGif};
    /* min-height: 350px; */
    width: 100%;
    /* max-height: 300px; */
    object-fit: cover;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
  }
  @media screen and (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }

`
