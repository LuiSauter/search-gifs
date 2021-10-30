import React, { useEffect, useState } from 'react'
import { getFavs } from 'services/getFavs'

const Context = React.createContext({})

export function UserContextProvider ({ children }) {
  const [favs, setFavs] = useState([])
  const [jwt, setJWT] = useState(() => window.sessionStorage.getItem('jwt'))

  useEffect(() => {
    if (!jwt) return setFavs([])
    getFavs({ jwt }).then(fav => {
      fav.map(f => {
        const newFav = {
          fav: f.fav,
          id: f.id
        }
        return setFavs(prv => [...prv, newFav])
      })
    })
  }, [jwt])

  return (
    <Context.Provider value={{
      jwt,
      setJWT,
      favs,
      setFavs
    }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
