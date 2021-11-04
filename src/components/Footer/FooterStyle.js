import styled from 'styled-components'

const FooterStyle = styled.div`
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  padding: 2rem;
  .icons {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 1.1rem;
    .love {
      transition: transform .5s;
      transform: color .9s;
      color: #61dafb;
      &:hover {
        transform: scale(1.1);
        color: #59dfee;
        filter: contrast(100px);
      }
    }
    & p {
      margin: 0 10px;
    }
    a {
      margin: 0 10px;
      &:hover {
        color: #61dafb;
      }
    }
  }
`

export default FooterStyle
