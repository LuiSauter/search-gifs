import config from 'config'

const { API_KEY, API_URL } = config
const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse
  // const trends = { ...data }

  const name = data.map(trend => {
    return { trend: trend }
  })

  const colores = { colorsNum: data.length, colors: [] }
  const generateColor = () => {
    return '#' + Math.random().toString(16).substr(-6)
  }
  for (let i = 0; i < colores.colorsNum; i += 1) {
    colores.colors.push({ hexCode: generateColor(), id: i })
  }

  const themeColors = colores.colors.map(colors => {
    name[colors.id].color = colors.hexCode
    const { color, trend } = name[colors.id]
    return { color, trend }
  })
  return themeColors
}

export const getTrendingTerms = async () => {
  const apiUrl = `${API_URL}/trending/searches?api_key=${API_KEY}`
  const res = await fetch(apiUrl)
  const data = await res.json()
  return fromApiResponseToGifs(data)
}
