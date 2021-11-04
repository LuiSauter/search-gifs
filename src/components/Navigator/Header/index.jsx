import SettingToggle from '../../SettingToggle/SettingsToggle'
import useUser from '../../../hooks/useUser'
import { Link, useRoute, useLocation } from 'wouter'
import Header from './Header'

function HeaderLg () {
  const [location] = useLocation()
  const { isLogged } = useUser()
  const [match] = useRoute(location === '/login' ? '/login' : '/register')

  const renderLoginButton = ({ isLogged }) => {
    return isLogged
      ? <SettingToggle />
      : (
        <>
          <Link to='/login'><i className='fas fa-sign-in-alt login' /> Login</Link>
          <Link to='/register'><i className='fas fa-user-plus' /> Register</Link>
        </>
        )
  }

  const content = match
    ? null
    : renderLoginButton({ isLogged })
  return (
    <Header>
      {content}
    </Header>
  )
}

export default HeaderLg
