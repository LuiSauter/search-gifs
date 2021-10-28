import React, { useEffect, useState } from 'react'
import { getFavs } from 'services/getFavs'

const Context = React.createContext({})
export default Context

export function UserContextProvider ({ children }) {
  const [favs, setFavs] = useState([])
  const [jwt, setJWT] = useState(() => window.sessionStorage.getItem('jwt'))

  useEffect(() => {
    if (!jwt) return setFavs([])
    getFavs({ jwt })
      .then(setFavs)
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
