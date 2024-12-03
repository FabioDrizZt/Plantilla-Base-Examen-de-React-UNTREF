import { useState, useEffect } from 'react'

const useCargarCiudades = () => {
  const [ciudades, setCiudades] = useState([])

  useEffect(() => {
    fetch('/datos.json')
      .then(response => response.json())
      .then(datos => { setCiudades(datos.ciudades) })
  }, [])

  return ciudades // Retornamos las ciudades cargadas
}

export default useCargarCiudades
