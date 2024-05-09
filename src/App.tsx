import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalStyles } from './styles'

function App() {
  return (
    <>
      <div className="container">
        <GlobalStyles />
        <Header />
      </div>
      <Banner />
    </>
  )
}

export default App
