import styled from 'styled-components'
import { breakpoints } from 'styles/constant'

export const GifItem = styled.div`
  display: flex;
  width: 100%;
  /* height: ${props => props.theme.heightGif}; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${props => props.theme.theme.color};
  border: 2px solid ${props => props.theme.theme.color};
  transition: transform .2s ease-in-out;
  overflow: hidden;
  position: relative;
  a {
    margin: auto;
    width: 100%;
    text-align: center;
  }

  &:hover {
    transform: scale(1.01);
    h4 {
      display: block;
      background: linear-gradient(180deg,rgb(0 0 0) 0%,rgb(0 0 0 / 0%) 90%);
    }
  }

  h4 {
    display: none;
    position: absolute;
    top: 0;
    font-size: .7rem;
    font-weight: 500;
    padding: .7rem .5rem;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  img {
    height: ${props => props.theme.heightGif};
    width: 100%;
    object-fit: cover;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
  }


  @media screen and (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }

`
