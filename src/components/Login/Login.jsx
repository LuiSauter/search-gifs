import useUser from 'hooks/useUser'
import { useEffect } from 'react'
import { Link, useLocation } from 'wouter'
import { useForm } from 'react-hook-form'
import LoginStyle from './LoginStyle'
import svg from '../../assets/login.svg'
import FormSC from 'components/Form/FormSC'

function Login ({ onLogin }) {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { login, isLogged, isLoginLoading, hasLoginError, email } = useUser()
  const [, navigate] = useLocation()

  useEffect(() => {
    if (isLogged) {
      navigate('/')
      // si existe el onLogin cerrar la modal
      onLogin && onLogin()
    }
  }, [isLogged, navigate, onLogin])

  const onSubmit = (data) => {
    login(data)
  }

  return (
    <>
      {isLoginLoading && <strong>Checking credentials...</strong>}
      {!isLoginLoading &&
        <LoginStyle>
          <div className='login-hero'>
            <img src={svg} alt='' />
          </div>
          <FormSC onSubmit={handleSubmit(onSubmit)}>
            <h2>Login</h2>
            <label>
              Email <span>*</span>
              {errors.email && <em>{errors.email.message}</em>}
              <input
                type='text' placeholder='Email address'
                defaultValue={email}
                autoFocus
                {...register('email', { required: { value: true, message: 'Email is required' } })}
              />
            </label>
            <label>
              Password <span>*</span>
              {errors.password && <em>{errors.password.message}</em>}
              <input
                type='password' placeholder='Password'
                {...register('password', {
                  required: { value: true, message: 'Password is required' },
                  minLength: { value: 8, message: 'Passwords must be at least 8 characters' }
                })}
              />
            </label>
            <button className='login-btn'>Login</button>
            <small>Not a member? <Link to='/register'> Sign Up now</Link></small>
          </FormSC>
        </LoginStyle>}
      {
        hasLoginError && <strong>Credentials are invalid</strong>
      }
    </>
  )
}

export default Login
