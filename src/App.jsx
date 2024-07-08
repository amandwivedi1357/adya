
import './App.css'
import AllRoutes from './Routes/AllRoutes'
import ScrollToTop from './Routes/ScrolltoTop'
import SmoothScroll from './Routes/SmoothScroll'
import { Home } from './pages'

function App() {


  return (
    <div className='App'>
      <SmoothScroll>
      <ScrollToTop/>
      <AllRoutes/>
      </SmoothScroll>
    </div>
  )
}

export default App
