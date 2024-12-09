import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useCargarCiudades from '../hooks/useCargarCiudades'

export default function useClima () {
  const [clima, setClima] = useState(null)
  const { id } = useParams()
  const ciudades = useCargarCiudades()

  useEffect(() => {
    setClima(ciudades.find(c => c.id === parseInt(id)))
  }, [ciudades, id])

  return clima
}
