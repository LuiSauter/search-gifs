import styled from 'styled-components'
import { breakpoints, colors } from 'styles/constant'

export const GifItem = styled.div`
  width: 100%;
  height: 370px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  margin: auto;
  background: ${props => props.theme.color};
  border: 2px solid ${props => props.theme.color};
  transition: transform .2s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }

  h4 {
    background: ${colors.card};
    margin: 0;
    padding: 1rem .5rem;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  img {
    height: 50rem;
    min-height: 250px;
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
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    height: 20px;
    width: 95%;
    border-radius: 10px;
    margin-bottom: 1.3rem;
    background: ${props => props.theme.color};
  }

  .content {
    background: ${props => props.theme.color};
    width: 95%;
    height: 280px;
    border-radius: 10px;
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }

`
