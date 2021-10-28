import useUser from 'hooks/useUser'
import { Link } from 'wouter'
import Header from './Header'

function HeaderLg () {
  const { isLogged, logout } = useUser()

  const handleClickLogout = () => {
    console.log('has cerrado session')
    logout()
  }
  return (
    <Header>
      {
        isLogged
          ? <button onClick={handleClickLogout}>Logout</button>
          : <Link to='/login'>Login</Link>
      }
    </Header>
  )
}

export default HeaderLg
