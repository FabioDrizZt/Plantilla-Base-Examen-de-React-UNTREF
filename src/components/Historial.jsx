import { Link } from 'react-router-dom'
import useHistorial from '../hooks/useHistorial'

export default function Historial () {
  const { historial } = useHistorial()

  return (
    <ul>
      {historial
        ? historial.map((ciudad) => (
          <li key={ciudad.id}>
            <Link to={`/clima/${ciudad.id}`}>
              {ciudad.nombre}
            </Link>
          </li>
        ))
        : <p>Historial Vacio</p>}
    </ul>
  )
}
