import styled from 'styled-components'

const TrendItemLi = styled.li`
  background: ${props => props.theme.color};
  border-radius: 4px;
  &:hover {
    background: ${props => props.theme.color + 80};
  }
  a {
    color: #fff;
    filter: drop-shadow(0px 0px 9px #000);
    font-weight: 700;
    font-size: .99rem;
  }
`

export default TrendItemLi
