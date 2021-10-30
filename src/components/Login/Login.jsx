import useUser from 'hooks/useUser'
import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import LoginStyle from './LoginStyle'
import svg from '../../assets/login.svg'

function Login () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login, isLogged, isLoginLoading, hasLoginError } = useUser()
  const [, navigate] = useLocation()

  useEffect(() => {
    console.log(isLogged)
    if (isLogged) navigate('/')
  }, [isLogged, navigate])

  const handleSubmit = (event) => {
    event.preventDefault()
    login({ username, password })
    // setPassword('')
    // setUsername('')
  }

  return (
    <>
      {isLoginLoading && <strong>Checking credentials...</strong>}
      {!isLoginLoading &&
        <LoginStyle>
          <div className='login-hero'>
            <img src={svg} alt='' />
          </div>
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label>
              username<span>*</span>
              <input
                type='text' placeholder='usename'
                onChange={e => setUsername(e.target.value)}
                value={username}
              />
            </label>
            <label>
              password<span>*</span>
              <input
                type='password' placeholder='password'
                onChange={e => setPassword(e.target.value)}
                value={password}
              />
            </label>
            <button className='login-btn'>Login</button>
          </form>
        </LoginStyle>}
      {
        hasLoginError && <strong>Credentials are invalid</strong>
      }
    </>
  )
}

export default Login
