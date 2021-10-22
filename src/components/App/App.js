import { Route } from 'wouter'
import { GifsContextProvider } from 'context/GifsContext'
import StaticContext from 'context/StaticContext'

import Detail from 'pages/Detail/Detail'
import Home from '../../pages/Home/Home'
import SearchResults from '../../pages/SearchResults/SearchResults'
import Navigator from '../Navigator/Navigator'
import AppContainer from './AppContainer'

function App () {
  return (
    <StaticContext.Provider value={{
      name: 'midudev',
      suscribeteAlCanal: true
    }}
    >
      <AppContainer>
        <Navigator />
        <GifsContextProvider>
          <Route
            component={Home}
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
      </AppContainer>
    </StaticContext.Provider>
  )
}

export default App
