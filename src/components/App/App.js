import { Route, Switch } from 'wouter'
import { GifsContextProvider } from 'context/GifsContext'

import Detail from 'pages/Detail/Detail'
import SearchResults from '../../pages/SearchResults/SearchResults'
import Navigator from '../Navigator/Navigator'
import AppContainer from './AppContainer'
import React, { Suspense } from 'react'
import ErrorPage from '../../pages/ErrorPage/index'
import HeaderLg from 'components/Navigator/Header'
import Login from '../../pages/Login/Login'
import { UserContextProvider } from 'context/UserContext'

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
              <Route component={Login} path='/login' />
              <Route component={ErrorPage} path='/:rest*' />
            </Switch>
          </GifsContextProvider>
        </Suspense>
      </AppContainer>
    </UserContextProvider>
  )
}

export default App
