import axios from 'axios'
import { ENDPOINT } from '../constants'

let token = null

export const deleteFav = async ({ id, jwt }) => {
  try {
    token = `Bearer ${jwt}`
    const config = {
      headers: {
        Authorization: token
      }
    }
    const res = await axios.delete(`${ENDPOINT}/favs/${id}`, config)
    const { data } = res
    return data
  } catch (error) {
    console.error(error)
  }
}
