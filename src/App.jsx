import { Home } from './components/Pages/Home/Home'
import { News } from './components/News/News'
import { Header } from './components/layouts/Header/Header'
import { Main } from './components/layouts/Main/Main'
import './index.css'
import { ItemsCards } from './components/ItemsCards/ItemsCards'
import { Sports } from './components/scripts/sports'
import principalImgSection from './assets/principalSectionImg.jpg'

function App() {
  
  return (
    <>
    <Home>
    <Header/>
    <Main>
      <News>
      <img src={principalImgSection} alt="" />

      <h1>Prueba</h1>
      </News>
      <News>
        {Sports.map (Sports => <ItemsCards 
        key={Sports.id}
        img={Sports.img}
        time={Sports.time}
        description={Sports.description}/>)}
      </News>
    </Main>    
    </Home>  
    </>
  )
}

export default App
