import useUser from 'hooks/useUser'
import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'

function Login () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login, isLogged, isLoginLoading, hasLoginError } = useUser()
  const [, navigate] = useLocation()

  useEffect(() => {
    if (isLogged) navigate('/')
  }, [isLogged, navigate])
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(username, password)
    login({ username, password })
    setPassword('')
    setUsername('')
  }

  if (isLoginLoading) return

  return (
    <>
      <h2>Login</h2>
      {isLoginLoading && <strong>Checking credentials...</strong>}
      {!isLoginLoading &&
        <form onSubmit={handleSubmit}>
          <input
            type='text' placeholder='usename'
            onChange={e => setUsername(e.target.value)}
            value={username}
          />
          <input
            type='password' placeholder='password'
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
          <button>Login</button>
        </form>}
      {
        hasLoginError && <strong>Credentials are invalid</strong>
      }
    </>
  )
}

export default Login
