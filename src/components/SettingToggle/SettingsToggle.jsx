import useUser from 'hooks/useUser'
import { Link, useLocation, useRoute } from 'wouter'

function SettingToggle () {
  const [, navigate] = useLocation()
  const [match] = useRoute('/profile')
  const { logout } = useUser()
  const handleClickLogout = () => {
    logout()
    navigate('/')
  }

  const content = match
    ? <button className='btn-logout' onClick={handleClickLogout}><i className='fas fa-sign-out-alt' /> Logout</button>
    : <Link to='/profile'><i className='fas fa-user' /> Profile</Link>

  return (
    <header className='header-stiky'>
      {content}
    </header>
  )
}

export default SettingToggle
