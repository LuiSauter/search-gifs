import FormSC from 'components/Form/FormSC'
import useUser from 'hooks/useUser'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useLocation } from 'wouter'
import FormRegister from './FormRegister'

function Register () {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [registered, setRegistered] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { signupForm, msg204, setMsg204 } = useUser()
  const [errorMsg, setErrorMsg] = useState({ msgPassword: '', msgConfirm: '' })
  const [, navigate] = useLocation()

  useEffect(() => {
    if (msg204 === 'Signup Successfuly!') {
      window.sessionStorage.removeItem('signup204')
      setMsg204('')
      setIsSubmitting(true)
      setRegistered(true)
      setIsSubmitting(false)
    }
  }, [msg204, setMsg204])

  useEffect(() => {
    if (registered) {
      navigate('/login')
      // si existe el onLogin cerrar la modal
    }
  }, [navigate, registered])

  const onSubmit = (data, e) => {
    if (data.password.length < 4) {
      return setErrorMsg({ msgPassword: 'Passwords must be at least 4 characters', msgConfirm: '' })
    }
    if (data.password !== data.confirmPassword) {
      return setErrorMsg({ msgPassword: '', msgConfirm: 'Passwords do not match' })
    }
    signupForm(data)
  }

  if (registered) {
    return (
      <h4>
        Congratulations ✅! You've been successfully registered.
      </h4>
    )
  }

  return (
    <FormRegister>
      <FormSC onSubmit={handleSubmit(onSubmit)}>
        <h2>Create Account</h2>
        <label>
          Name <span>*</span>
          {errors.name && <em> name is required</em>}
          <input
            type='text'
            placeholder='Name'
            autoFocus
            {...register('name', { required: true })}
          />
        </label>
        <label>
          Email Address <span>*</span>
          {msg204 ? 'The email is already in use.' : ''}
          {errors.email && <em> email is required</em>}
          <input
            type='email'
            placeholder='Email'
            {...register('email', { required: true })}
          />
        </label>
        <label>
          Password <span>*</span>
          {errors.password && <em>{errors.password.message}</em>}
          <input
            type='password'
            placeholder='Password'
            {...register('password', {
              required: { value: true, message: 'Password is required' },
              minLength: { value: 8, message: 'Passwords must be at least 8 characters' }
            })}
          />
        </label>
        <label>
          Confirm Password <span>*</span>
          {errorMsg.msgConfirm !== '' && <em>{errorMsg.msgConfirm}</em>}
          {errors.confirmPassword && <em>{errors.confirmPassword.message}</em>}
          <input
            type='password'
            placeholder='Confirm Password'
            {...register('confirmPassword', {
              required: { value: true, message: 'Confirm Password is required' },
              minLength: { value: 8, message: 'Passwords must be at least 8 characters' }
            })}
          />
        </label>
        <button className='register-btn' disabled={isSubmitting}>Sign up</button>
        <small>Already have an account? <Link to='/login'>Sign in</Link></small>
      </FormSC>
    </FormRegister>
  )
}

export default Register
