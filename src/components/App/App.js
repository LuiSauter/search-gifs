import { Route } from 'wouter'
import { GifsContextProvider } from 'context/GifsContext'
import StaticContext from 'context/StaticContext'

import Detail from 'pages/Detail/Detail'
import SearchResults from '../../pages/SearchResults/SearchResults'
import Navigator from '../Navigator/Navigator'
import AppContainer from './AppContainer'
import React, { Suspense } from 'react'

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
            <Route
              component={homePage}
              path='/'
            />
            <Route
              component={SearchResults}
              path='/search/:keyword'
            />
            <Route
              component={Detail}
              path='/gif/:id'
            />
          </GifsContextProvider>
        </Suspense>
      </AppContainer>
    </StaticContext.Provider>
  )
}

export default App
