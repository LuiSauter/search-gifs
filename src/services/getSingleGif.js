import axios from 'axios'
import config from 'config'

const { API_URL, API_KEY } = config

const fromApiResponseToGif = apiResponse => {
  const { data } = apiResponse
  const theme = { ...data }
  const gif = { ...data }
  theme.theme = { num: 0, color: '#2d364c', size: '200px' }
  const { id, title, images, type } = theme
  const { url, height } = images.original
  const heightGif = `${height}px`
  return { id, title, url, heightGif, type, theme, gif }
}

export const getSingleGif = async ({ id }) => {
  const res = await axios.get(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
  const { data } = res
  return fromApiResponseToGif(data)
}
