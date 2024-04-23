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
        <Header />
        <Main>
          <div className="flex w-full bg-black">
            <News>
              <div className=' flex flex-col justify-center items-center ml-16'>
                <img className='w-4/5' src={principalImgSection} alt="" />
                <div className='w-4/5 flex flex-col items-start text-sm bg-zinc-600'>
                <h1 className='mb-2 mt-4'>Los Deportes</h1>
                <p>Los deportes siempre han ocupado un lugar fundamental en mi vida. Desde temprana edad, encontré en ellos una fuente inagotable de pasión y energía. La competencia, el trabajo en equipo y la superación personal que los deportes ofrecen han moldeado mi carácter y han sido una constante inspiración en mi día a día.</p>
                </div>
                
              </div>

            </News>
            <News>
              {Sports.map(Sports => <ItemsCards
                key={Sports.id}
                img={Sports.img}
                time={Sports.time}
                description={Sports.description} />)}
            </News>
          </div>

        </Main>
      </Home>
    </>
  )
}

export default App
