import axios from 'axios'
import { ENDPOINT } from '../constants'

let token = null

export const addFavService = async ({ id, JWT, title }) => {
  token = `Bearer ${JWT}`
  const config = {
    headers: { Authorization: token }
  }
  try {
    const res = await axios.post(`${ENDPOINT}/favs/add`, { fav: id, title: title }, config)
    // const res = await axios({
    //   method: 'POST',
    //   data: {
    //     fav: id
    //   },
    //   withCredentials: true,
    //   url: `${ENDPOINT}/favs/add`
    // })
    const { data } = res
    return data
  } catch (error) {
    console.log(error)
  }
}
