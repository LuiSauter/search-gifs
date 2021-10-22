import config from 'config'

const { API_KEY, API_URL } = config
const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse
  return data
}

export const getTrendingTerms = async () => {
  const apiUrl = `${API_URL}/trending/searches?api_key=${API_KEY}`
  const res = await fetch(apiUrl)
  const data = await res.json()
  return fromApiResponseToGifs(data)
}
