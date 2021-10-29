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
        setFavs(prv => [...prv, f.fav])
        return f
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
