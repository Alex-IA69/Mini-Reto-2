import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormularioReceta from "./FormularioReceta";
import ActualizarReceta from "./ActualizarReceta";

const eliminarReceta = (id) => {
    axios.delete(`/receta/${id}`)
        .then(response => {
          console.log('Receta eliminada:', response.data);
          // Actualizar las recetas después de eliminar la receta
          //obtenerRecetas();
        })
        .catch(error => {
          console.error('Error al eliminar la receta:', error);
        });};

const HomePage = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {fetchData();}, []);

  const fetchData = async () => {
    try {
      // Fetch recetas
      const recetaResponse = await axios.get('/receta');
      const recetaData = recetaResponse.data.data;
      setRecetas(recetaData);
    } catch (error) {
      console.error('API request error:', error);
    }
  };

  return (
    <div>
    <h1>Recetario Wazuwu</h1>
    <FormularioReceta />
    <ActualizarReceta></ActualizarReceta>
    <h2>Recetas</h2>
    <ul>
        {recetas.map((receta) => (
        <li key={receta.id}>
            <h3>{receta.nombre}</h3>
            <p>Tiempo: {receta.tiempo}</p>
            <p>Tipo: {receta.tipo}</p>
            <p>Pasos: {receta.pasos}</p>
            <button onClick={() => eliminarReceta(receta.id)}>Eliminar</button>
        </li>
        ))}
    </ul>
    </div>
    );
};

export default HomePage;