import { Link } from 'wouter'
import TrendItemLi from './TrendItem'
import UlCategory from './UlCategory'

function Category ({ name, options = [] }) {
  const topScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
  return (
    <UlCategory>
      <h3>{name}</h3>
      <ul>
        {options.map((singleOption) => (
          <TrendItemLi onClick={topScroll} theme={singleOption} key={singleOption.trend}>
            <Link to={`/search/${singleOption.trend}`}>
              #{singleOption.trend}
            </Link>
          </TrendItemLi>
        ))}
      </ul>
    </UlCategory>
  )
}

export default Category
