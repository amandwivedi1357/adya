
import './App.css'
import AllRoutes from './Routes/AllRoutes'
import ScrollToTop from './Routes/ScrolltoTop'
import { Home } from './pages'

function App() {


  return (
    <div className='App'>
      <ScrollToTop/>
      <AllRoutes/>
    </div>
  )
}

export default App
