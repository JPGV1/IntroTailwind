import { Home } from './components/Pages/Home/Home'
import { News } from './components/News/News'
import { Header } from './components/layouts/Header/Header'
import { Main } from './components/layouts/Main/Main'
import './index.css'

function App() {
  
  return (
    <>
    <Home>
    <Header/>
    <Main>
      <News>
      <h1>Prueba</h1>
      </News>
      <News>
        <h1>Prueba</h1>
      </News>
    </Main>    
    </Home>  
    </>
  )
}

export default App
