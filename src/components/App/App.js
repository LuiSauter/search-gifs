import { Route, Switch } from 'wouter'
import { GifsContextProvider } from 'context/GifsContext'
import StaticContext from 'context/StaticContext'

import Detail from 'pages/Detail/Detail'
import SearchResults from '../../pages/SearchResults/SearchResults'
import Navigator from '../Navigator/Navigator'
import AppContainer from './AppContainer'
import React, { Suspense } from 'react'
import ErrorPage from '../../pages/ErrorPage/index'

function App () {
  const homePage = React.lazy(() => import('../../pages/Home/Home'))

  return (
    <StaticContext.Provider value={{
      name: 'midudev',
      suscribeteAlCanal: true
    }}
    >
      <AppContainer>
        <Suspense fallback={null}>
          <Navigator />
          <GifsContextProvider>
            <Switch>
              <Route
                component={homePage}
                path='/'
              />
              <Route
                component={SearchResults}
                path='/search/:keyword/:rating?'
              />
              <Route
                component={Detail}
                path='/gif/:id'
              />
              <Route component={ErrorPage} path='/:rest*' />
            </Switch>
          </GifsContextProvider>
        </Suspense>
      </AppContainer>
    </StaticContext.Provider>
  )
}

export default App
