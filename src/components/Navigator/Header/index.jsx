import useUser from 'hooks/useUser'
import { Link, useRoute } from 'wouter'
import Header from './Header'

function HeaderLg () {
  const { isLogged, logout } = useUser()
  const [match] = useRoute('/login')

  const handleClickLogout = () => logout()

  const renderLoginButton = ({ isLogged }) => {
    return isLogged
      ? <button onClick={handleClickLogout}>Logout</button>
      : <Link to='/login'>Login</Link>
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
