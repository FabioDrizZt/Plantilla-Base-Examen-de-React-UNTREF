import { useState, useEffect } from 'react';

const useCargarCiudades = () => {
  const [ciudades, setCiudades] = useState([]);

  useEffect(() => {
    // Simulamos la carga de un archivo local de JSON con `fetch`
  }, []);

  return ciudades;  // Retornamos las ciudades cargadas
};

export default useCargarCiudades;
