import { useCallback, useContext, useState } from 'react'
import { loginService } from 'services/login'
import Context from 'context/UserContext'
import { addFavService } from 'services/addFavService'

export default function useUser () {
  const { jwt, setJWT, setFavs, favs } = useContext(Context)
  const [state, setState] = useState({ loading: false, error: false })

  const login = useCallback(({ username, password }) => {
    setState({ loading: true, error: false })
    loginService({ username, password })
      .then(jwt => {
        window.sessionStorage.setItem('jwt')
        setState({ loading: false, error: false })
        console.log(jwt)
        setJWT(jwt)
      }).catch(err => {
        window.sessionStorage.removeItem('jwt')
        setState({ loading: false, error: true })
        console.log(err)
      })
  }, [setJWT])

  const addFav = useCallback(({ id }) => {
    addFavService({ id, jwt })
      .then(setFavs)
      .catch(err => console.log(err))
  }, [jwt, setFavs])

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
