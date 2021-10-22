import { Link } from 'wouter'
import UlCategory from './UlCategory'

function Category ({ name, options = [] }) {
  // const
  return (
    <UlCategory>
      <h3>{name}</h3>
      <ul>
        {options.map((singleOption) => (
          <li key={singleOption}>
            <Link to={`/search/${singleOption}`}>
              #{singleOption}
            </Link>
          </li>
        ))}
      </ul>
    </UlCategory>
  )
}

export default Category
