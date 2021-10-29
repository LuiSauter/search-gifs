import axios from 'axios'
import { ENDPOINT } from '../constants'

let token = null

export const addFavService = async ({ id, jwt }) => {
  token = `Bearer ${jwt}`
  try {
    const config = {
      headers: {
        Authorization: token
      }
    }
    const res = await axios.post(`${ENDPOINT}/favs`, { fav: id }, config)
    const { data } = res
    return data
  } catch (error) {
    console.log(error)
  }
}
