import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Rotas from './routes'

import { GlobalStyles } from './styles'
import Footer from './components/Footer'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <GlobalStyles />
          <Header />
        </div>
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
