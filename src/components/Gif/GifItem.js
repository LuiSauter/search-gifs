import styled from 'styled-components'
import { breakpoints, colors } from 'styles/constant'

export const GifItem = styled.div`
  display: flex;
  width: 100%;
  height: ${props => props.theme.heightGif};
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  background: ${props => props.theme.theme.color};
  border: 2px solid ${props => props.theme.theme.color};
  transition: transform .2s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }

  h4 {
    background: ${colors.card};
    font-size: .8rem;
    font-weight: 500;
    padding: 1rem .5rem;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  img {
    height: 100%;
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

export const GifItemSkeleton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.theme.color};

  .title {
    height: 18px;
    width: 95%;
    border-radius: 10px;
    margin-bottom: 1.3rem;
    background: ${props => props.theme.theme.color};
  }

  .content {
    background: ${props => props.theme.theme.color};
    width: 95%;
    height: ${props => props.theme.theme.size};
    border-radius: 10px;
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }

`
