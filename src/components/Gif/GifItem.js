import styled from 'styled-components'
import { breakpoints, colors } from 'styles/constant'

export const GifItem = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${props => props.theme.theme.color};
  transition: transform .2s ease-in-out;
  overflow: hidden;
  position: relative;
  .fav-btn {
    position: absolute;
    bottom: 10px;
    right: 8px;
    z-index: 1;
    border: none;
    background-color: transparent;
    transition: transform .4s;
    span {
      i {
        font-size: 1.5rem;
        color: ${colors.colorWhite};
        cursor: pointer;
        &:hover {
          transform: scale(1.08);
          color: #FF5151;
          .inHeart {
          }
        }
      }
      .heart {
        color: #FF5151;
        transition: filter .5s ;
        &:hover {
          color: #FF5151;
          filter: drop-shadow(0px 0px 5px #ee5050cc);
        }
      }
    }
  }
  a {
    height: ${props => props.theme.heightGif};
    margin: auto;
    width: 100%;
    text-align: left;
    &:hover {
      transform: scale(1.01);
      h4 {
        display: block;
        background: linear-gradient(rgba(0, 0, 0, 0), ${props => props.theme.theme.color}91 100%);
        filter: contrast(5);
      }
    }
  }
  h4 {
    display: none;
    position: absolute;
    bottom: 0;
    font-size: .9rem;
    font-weight: 700;
    padding: .4rem 2.2rem .4rem .3rem;
    width: 100%;
    text-shadow: 1px 1px 2px #222;
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
  @media screen and (min-width: 1302px) {
    max-height: 280px;
  }

`
