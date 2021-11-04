import React, { useEffect, useState } from 'react'
import { getFavs } from 'services/getFavs'

const Context = React.createContext({})

export function UserContextProvider ({ children }) {
  const [favs, setFavs] = useState([])
  const [JWT, setJWT] = useState(() => localStorage.getItem('jwt'))
  const [email, setEmail] = useState(() => sessionStorage.getItem('signup'))
  const [msg204, setMsg204] = useState(() => sessionStorage.getItem('signup204'))

  useEffect(() => {
    if (!JWT) return setFavs([])
    getFavs({ JWT }).then(fav => {
      if (fav) {
        fav.map(f => {
          const newFav = {
            fav: f.fav,
            title: f.title,
            id: f.id
          }
          return setFavs(prv => [...prv, newFav])
        })
      }
    })
  }, [JWT])

  return (
    <Context.Provider value={{
      setJWT,
      JWT,
      email,
      msg204,
      setMsg204,
      setEmail,
      favs,
      setFavs
    }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
