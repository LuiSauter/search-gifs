// import useNearScreen from 'hooks/useNearScreen'
import { useEffect, useState } from 'react'
import { getTrendingTerms } from '../../services/getTrendingTermsService'
import Category from '../Category/Category'
// Lo llama LazyTrending dinamicamente
export default function TrendingSearches () {
  const [trends, setTrends] = useState([])
  useEffect(() => {
    getTrendingTerms()
      .then(setTrends)
      .catch(err => err)
  }, [])
  return <Category name='Trends' options={trends} />
}
