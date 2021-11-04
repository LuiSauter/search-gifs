import Fav from '../Fav/index'
import LazyTrending from 'components/TrendingSearches/LazyTrending'
import useUser from 'hooks/useUser'
import { useEffect } from 'react'
import { Link, useLocation } from 'wouter'
import ProfileContainer from './ProfileContainer'

function Profile () {
  const { isLogged } = useUser()
  const [, navigate] = useLocation()
  useEffect(() => {
    if (!isLogged) {
      navigate('/login')
      // si existe el onLogin cerrar la modal
    }
  }, [isLogged, navigate])
  const { favs } = useUser()
  return (
    <ProfileContainer>
      <section>
        <div className='profile-card'>
          {/* <img src='' alt='' /> */}
          <i className='fas fa-user-circle profile-card__img' />
          <div className='profile-card__text'>
            <p>name</p>
            <p>email</p>
          </div>
        </div>
        <div className='fav-container'>
          {
            favs.map(fav => (
              <div className='fav-container__item fav-item' theme={fav} key={fav.id}>
                <div className='fav-item__title'>
                  <p>{fav.title}</p>
                  <Link to={`/gif/${fav.fav}`}>
                    <i className='fas fa-info-circle' />
                  </Link>
                </div>
                <img src={`https://media.giphy.com/media/${fav.fav}/giphy.gif`} alt={fav.fav} />
                <div className='fav-item__fav'>
                  <Fav id={fav.fav} />
                  <div> {Math.floor(Math.random() * 50)} Likes</div>
                </div>
              </div>
            ))
          }
        </div>
      </section>
      <section className='trends-category'>
        <div className='trends-sticky'><LazyTrending /></div>
      </section>
    </ProfileContainer>
  )
}

export default Profile
