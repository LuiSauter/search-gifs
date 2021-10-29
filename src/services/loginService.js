import axios from 'axios'
import { ENDPOINT } from '../constants'

export const loginService = async ({ username, password }) => {
  try {
    const res = await axios.post(`${ENDPOINT}/login`, { username, password })
    const { data } = res
    return data.token
  } catch (error) {
    console.error(error)
  }
}
