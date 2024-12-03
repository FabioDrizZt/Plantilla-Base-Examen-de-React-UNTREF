import { useNavigate } from 'react-router-dom'
import CiudadSelector from '../components/CiudadSelector'
import useHistorial from '../hooks/useHistorial'
import Historial from '../components/Historial'
import { useState } from 'react'

const Home = () => {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  const { agregarConsulta } = useHistorial()
  // Función que manejará el envío de la ciudad seleccionada
  const handleSeleccionarCiudad = (ciudad) => {
    agregarConsulta(ciudad)
    // Navegar a la página de clima con el ID de la ciudad seleccionada
    navigate(`/clima/${ciudad.id}`)
  }

  const handleIncrement = () => setCount(count + 1)

  return (
    <div>
      <h1>Consulta de Clima</h1>
      <h2>El contador es: {count}</h2>
      <button onClick={handleIncrement}>+</button>
      <CiudadSelector onSeleccionarCiudad={handleSeleccionarCiudad} />
      <Historial />
    </div>
  )
}

export default Home
