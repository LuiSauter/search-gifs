import axios from 'axios'
import config from 'config'
import { colorSkeleton } from 'styles/constant'

const { API_KEY, API_URL } = config

const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse
  if (apiResponse.message === 'No API key found in request') {
    console.log(apiResponse.message)
  } else if (data.length !== 0) {
    const theme = { ...data }
    colorSkeleton.map((color) => {
      theme[color.num].theme = color
      return theme
    })
    const gifs = data.map(gif => {
      const { id, title, images, type, theme } = gif
      const { url } = images.fixed_width
      const { height } = images.preview
      const heightGif = `${height}px`
      return { id, title, url, heightGif, type, gif, theme }
    })
    return gifs
  }
  return 'No results found'
}

export const getGifs = async ({ limit = 25, keyword = 'hack', rating = 'g', page = 0 } = {}) => {
  const apiUrl = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=en`
  const res = await axios.get(apiUrl)
  const { data } = res
  return await fromApiResponseToGifs(data)
}
