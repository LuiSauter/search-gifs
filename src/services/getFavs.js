import axios from 'axios'
import { ENDPOINT } from '../constants'

let token = null

export const getFavs = async ({ jwt }) => {
  try {
    token = `Bearer ${jwt}`
    const config = {
      headers: {
        Authorization: token
      }
    }
    const res = await axios.get(`${ENDPOINT}/favs`, config)
    const { data } = res
    return data
  } catch (error) {
    console.error(error)
  }
}
