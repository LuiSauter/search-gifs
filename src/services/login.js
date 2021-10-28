import axios from 'axios'
import { ENDPOINT } from '../constants'

export const loginService = async ({ username, password }) => {
  const res = await axios.post(`${ENDPOINT}/login`)
  const { data } = res
  console.log(data)
  return data
}
