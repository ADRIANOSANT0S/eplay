import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Rotas from './routes'

import { GlobalStyles } from './styles'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <GlobalStyles />
        <Header />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
