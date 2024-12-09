import { Route as Ruta, Routes as Rutas, BrowserRouter as Enrutador } from 'react-router-dom'
import Home from './pages/Home'
import Clima from './pages/Clima'

function App () {
  return (
    <div className='App'>
      <Enrutador>
        <Rutas>
          <Ruta path='/' element={<Home />} />
          <Ruta path='/clima/:id' element={<Clima />} />
          <Ruta path='/*' element={<h1> 404 - Page Not Found </h1>} />
        </Rutas>
      </Enrutador>
    </div>
  )
}

export default App
