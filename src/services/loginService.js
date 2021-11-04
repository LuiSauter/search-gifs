import axios from 'axios'
import { ENDPOINT } from '../constants'

export const loginService = async (objectData) => {
  const { email, password } = objectData
  try {
    // const res = await axios.post(`${ENDPOINT}/users/signin`, objectData)
    const res = await axios({
      method: 'POST',
      data: {
        email: email,
        password: password
      },
      withCredentials: true,
      url: `${ENDPOINT}/users/signin`
    })
    // const res = await axios.post(`${ENDPOINT}/users/signin`, objectData)
    const { data } = res
    return data
  } catch (error) {
    console.error(error)
  }
}
