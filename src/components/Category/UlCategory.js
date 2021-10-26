import styled from 'styled-components'
import { breakpoints, colors } from 'styles/constant'

// const generateMultiColorCategory = props => {
//   const colores = props.theme.map(color => color)
//   // console.log(colores.length % 5 + 1)
//   // console.log(props.theme.length % 5 + 1)
//   const NEED_WHITE_COLOR = [3, 4]
//   const colorIndex = props.index % 5 + 1
//   const needWhite = NEED_WHITE_COLOR.includes(colorIndex)
//   const colorText = needWhite ? 'white' : 'var(--theme-body-bg)'

//   return `
//     background-color: var(--brand-color_${colorIndex});
//     color: ${colorText};`
// }

// const generateMultiColorCategory = ({ theme }) => {
//   const colores = {
//     colorsNum: theme.length,
//     colors: []
//   }
//   const generateColor = () => {
//     // console.log('#' + Math.random().toString(16).substr(-6))
//     return '#' + Math.random().toString(16).substr(-6)
//   }

//   for (let i = 0; i < colores.colorsNum; i += 1) {
//     colores.colors.push({ hexCode: generateColor() })
//   }
// }

const UlCategory = styled.div`
  position: sticky;
  top: .8rem;
  margin: 0 auto;
  margin-bottom: 1rem;
  width: 100%;
  ul {
    margin: 0 auto;
    width: 100%;
    text-align: right;
  }
  li {
    list-style: none;
    display: inline-block;
    padding: .2rem .3rem;
    margin: .3rem 0 .3rem .5rem;
    transition: transform .2s ease-in-out;

    /* background: red; */
    &:hover {
      transform: scale(1.02);
    }
    a:hover {
      /* border-bottom: 2px solid ${colors.colorBlue}; */
      padding-bottom: .12rem;
    }
  }
  @media screen and (min-width: ${breakpoints.laptop}) {
    li {
      /* width: 100%; */
      /* padding: .3rem 0 0 2rem; */
    }
    h3 {
      padding-left: 2rem;
    }
  }
`

export default UlCategory
