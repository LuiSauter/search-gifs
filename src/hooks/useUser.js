import { useCallback, useContext, useState } from 'react'
import { loginService } from 'services/loginService'
import Context from 'context/UserContext'
import { addFavService } from 'services/addFavService'
import { deleteFav } from 'services/deleteFav'

export default function useUser () {
  const { jwt, setJWT, favs, setFavs } = useContext(Context)
  const [state, setState] = useState({ loading: false, error: false })

  const login = useCallback(({ username, password }) => {
    setState({ loading: true, error: false })
    loginService({ username, password })
      .then(jwt => {
        window.sessionStorage.setItem('jwt', jwt)
        setState({ loading: false, error: false })
        setJWT(jwt)
      }).catch(err => {
        window.sessionStorage.removeItem('jwt')
        setState({ loading: false, error: true })
        console.log(err)
      })
  }, [setJWT])

  const addFav = useCallback(({ id }) => {
    const favExist = favs.some(favos => favos.fav === id)
    const favorito = favs.find(fa => fa.fav === id)
    if (favExist) {
      const newFavs = favs.filter(fav => fav.fav !== id)
      setFavs(newFavs)
      deleteFav({ id: favorito.id, jwt })
    } else {
      addFavService({ id, jwt })
        .then(favorite => {
          const newFav = {
            fav: favorite.fav,
            id: favorite.id
          }
          setFavs(prevFav => [...prevFav, newFav])
        })
        .catch(err => console.error(err))
    }
  }, [favs, jwt, setFavs])

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('jwt')
    setJWT(null)
  }, [setJWT])

  return {
    addFav,
    favs,
    isLogged: Boolean(jwt),
    login,
    logout,
    isLoginLoading: state.loading,
    hasLoginError: state.error
  }
}
