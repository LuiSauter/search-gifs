import styled from 'styled-components'
import { colors } from '../../styles/constant'

const TrendItemLi = styled.li`
  /* background-color: red; */
  background: ${props => props.theme.color};
  /* color: ${colors.background}; */
  /* filter: contrast(90%); */
`

export default TrendItemLi
