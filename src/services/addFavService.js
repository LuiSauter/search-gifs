import axios from 'axios'
import { ENDPOINT } from '../constants'

export const addFavService = async ({ id, jwt }) => {
  const res = await axios.post(`${ENDPOINT}/favs/${id}`)
  const { data } = res
  console.log(data)
  return data
}
