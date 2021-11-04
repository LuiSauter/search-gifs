import React, { Suspense } from 'react'
import { Route, Switch } from 'wouter'
import { GifsContextProvider } from 'context/GifsContext'

import { UserContextProvider } from 'context/UserContext'

import Detail from 'pages/Detail/Detail'
import SearchResults from '../../pages/SearchResults/SearchResults'
import Navigator from '../Navigator/Navigator'
import AppContainer from './AppContainer'
import ErrorPage from '../../pages/ErrorPage/index'
import HeaderLg from 'components/Navigator/Header'
import LoginPage from 'pages/LoginPage/LoginPage'
import RegisterPage from 'pages/Register/RegisterPage'
import ProfilePage from '../../pages/Profile/ProfilePage'
import Footer from 'components/Footer/Footer'

function App () {
  const homePage = React.lazy(() => import('../../pages/Home/Home'))

  return (
    <UserContextProvider>
      <AppContainer>
        <Suspense fallback={null}>
          <HeaderLg />
          <Navigator />
          <GifsContextProvider>
            <Switch>
              <Route component={homePage} path='/' />
              <Route component={SearchResults} path='/search/:keyword/:rating?' />
              <Route component={Detail} path='/gif/:id' />
              <Route component={LoginPage} path='/login' />
              <Route component={RegisterPage} path='/register' />
              <Route component={ProfilePage} path='/profile' />
              <Route component={ErrorPage} path='/:rest*' />
            </Switch>
            <Footer />
          </GifsContextProvider>
        </Suspense>
      </AppContainer>
    </UserContextProvider>
  )
}

export default App
