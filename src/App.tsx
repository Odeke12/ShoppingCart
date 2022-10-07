import {Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { About } from './pages/About'
import { NavBar } from './components/NavBar'
import { ShoppingCardProvider } from './context/ShoppingCartContext'
function App() {
  return (
    <ShoppingCardProvider>
      <Container className='mb-4'>
  <NavBar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
  </Routes>
  <Routes>
    <Route path='/store' element={<Store/>}/>
  </Routes>
  <Routes>
    <Route path='/about' element={<About/>}/>
  </Routes>
</Container>
    </ShoppingCardProvider>
  )
}

export default App
