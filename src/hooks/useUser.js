import { useCallback, useContext, useState } from 'react'
import { loginService } from 'services/loginService'
import Context from 'context/UserContext'
import { addFavService } from 'services/addFavService'
import { registerService } from 'services/Register'

export default function useUser () {
  const { email, setEmail, favs, setFavs, msg204, setMsg204, setJWT, JWT } = useContext(Context)
  const [state, setState] = useState({ loading: false, error: false })

  const signupForm = useCallback((data) => {
    registerService(data).then(res => {
      if (res.message === 'The email is already in use.') {
        window.sessionStorage.setItem('signup204', res.message)
        return setMsg204(res.message)
      }
      window.sessionStorage.setItem('signup', res.email)
      window.sessionStorage.setItem('signup204', res.message)
      window.sessionStorage.setItem('signup204', res.message)
      setMsg204(res.message)
      return setEmail(res.email)
    })
  }, [setEmail, setMsg204])

  const login = useCallback((data) => {
    setState({ loading: true, error: false })
    loginService(data)
      .then(res => {
        if (res.message === 'Successfuly Authenticated') {
          window.localStorage.setItem('jwt', res.token)
          return setJWT(res.token)
        }
        setJWT(null)
        window.localStorage.removeItem('jwt')
        setState({ loading: false, error: false })
      }).catch(err => {
        window.localStorage.removeItem('jwt')
        setState({ loading: false, error: true })
        console.log(err)
      })
  }, [setJWT])

  const addFav = useCallback(({ id, title }) => {
    addFavService({ id, JWT, title })
      .then(favorite => {
        if (favorite.message === true) {
          const newFavs = favs.filter(fav => fav.fav !== id)
          return setFavs(newFavs)
        }
        const newFav = {
          fav: favorite.fav,
          title: favorite.title,
          id: favorite.id
        }
        setFavs(prevFav => [newFav, ...prevFav])
      })
      .catch(err => console.error(err))
  }, [JWT, favs, setFavs])

  const logout = useCallback(() => {
    setJWT(null)
    window.localStorage.removeItem('jwt')
  }, [setJWT])

  return {
    email,
    msg204,
    setMsg204,
    isLogged: Boolean(JWT),
    favs,
    addFav,
    signupForm,
    login,
    logout,
    isLoginLoading: state.loading,
    hasLoginError: state.error
  }
}
