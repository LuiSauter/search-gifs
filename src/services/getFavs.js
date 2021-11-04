import axios from 'axios'
import { ENDPOINT } from '../constants'

let token = null

export const getFavs = async ({ JWT }) => {
  token = `Bearer ${JWT}`
  const config = {
    headers: {
      Authorization: token
    }
  }
  try {
    const res = await axios.get(`${ENDPOINT}/favs`, config)
    // const res = await axios({
    //   method: 'GET',
    //   withCredentials: true,
    //   url: `${ENDPOINT}/favs`
    // })
    const { data } = res
    return data
  } catch (error) {
    console.error(error)
  }
}
