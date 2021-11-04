import axios from 'axios'
import { ENDPOINT } from '../constants'

export const registerService = async (object) => {
  const { name, email, password, confirmPassword } = object
  try {
    // const res = await axios.post(`${ENDPOINT}/users/signup`, { name, email, password, confirm_password: confirmPassword })
    const res = await axios({
      method: 'POST',
      data: {
        name, email, password, confirm_password: confirmPassword
      },
      withCredentials: true,
      url: `${ENDPOINT}/users/signup`
    })
    // const res = await axios.post(`${ENDPOINT}/users/signup`, { name, email, password, confirm_password: confirmPassword })
    const { data } = res
    return data
  } catch (error) {
    console.error(error)
  }
}
