import { useNavigate } from 'react-router-dom'
import ClimaDetalle from '../components/ClimaDetalle'
import useClima from '../hooks/useClima'
import Historial from '../components/Historial'

export default function Clima () {
  const clima = useClima()
  const navigate = useNavigate()

  const handleBack = () => { navigate(-1) }

  return (
    <div>
      <h1>Clima de la Ciudad {clima?.nombre}</h1>
      {clima ? <ClimaDetalle clima={clima} /> : <p>Cargando...</p>}
      <button onClick={handleBack}>Volver Atras</button>
      <Historial />
    </div>
  )
}
