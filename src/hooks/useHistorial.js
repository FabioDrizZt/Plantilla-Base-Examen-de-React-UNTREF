import { useContext } from 'react'
import HistorialContext from '../context/HistorialContext'

const useHistorial = () => {
  const { historial, setHistorial } = useContext(HistorialContext)

  const agregarConsulta = (consulta) => {
    setHistorial([...historial, consulta])
  }

  const limpiarHistorial = () => {
    setHistorial([])
  }

  return { historial, agregarConsulta, limpiarHistorial }
}

export default useHistorial
