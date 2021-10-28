import axios from 'axios'
import { ENDPOINT } from '../constants'

export const getFavs = async ({ jwt }) => {
  const res = await axios.get(`${ENDPOINT}/favs`)
  const { data } = res
  console.log(data)
  return data
}
