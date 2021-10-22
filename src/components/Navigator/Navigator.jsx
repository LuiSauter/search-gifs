import { Link } from 'wouter'
import Nav from './Nav'
import logo from 'gif.png'

function Navigator () {
  return (
    <Nav>
      <Link to='/'><img src={logo} alt='giff' /></Link>
    </Nav>
  )
}

export default Navigator
