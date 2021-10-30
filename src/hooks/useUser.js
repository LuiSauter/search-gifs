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
    addFavService({ id, jwt })
      .then(favorite => {
        setFavs(prevFav => [...prevFav, favorite.fav])
      })
      .catch(err => console.error(err))
  }, [jwt, setFavs])

  const delFav = useCallback(({ id }) => {
    console.log(id, 'iddd')
    deleteFav({ id, jwt })
      .then(() => {
        console.log(id, 'favvv id')
        const newFav = favs.filter(fav => fav !== id)
        setFavs(prevFav => [...prevFav, newFav])
        console.log(newFav)
      })
  }, [favs, jwt, setFavs])

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('jwt')
    setJWT(null)
  }, [setJWT])

  return {
    addFav,
    delFav,
    favs,
    isLogged: Boolean(jwt),
    login,
    logout,
    isLoginLoading: state.loading,
    hasLoginError: state.error
  }
}
