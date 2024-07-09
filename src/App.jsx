
import './App.css'
import AllRoutes from './Routes/AllRoutes'
import FadeUpAnimation from './Routes/FadeUp'
import ScrollToTop from './Routes/ScrolltoTop'
import SmoothScroll from './Routes/SmoothScroll'
import { Home } from './pages'

function App() {


  return (
    <div className='App'>
      <SmoothScroll>
        <FadeUpAnimation>
      <ScrollToTop/>
      <AllRoutes/>
      </FadeUpAnimation>
      </SmoothScroll>
    </div>
  )
}

export default App
