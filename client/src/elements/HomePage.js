import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [recetas, setRecetas] = useState([]);
  const [proporciones, setProporciones] = useState([]);
  const [ingredientes, setIngredientes] = useState([]);

  useEffect(() => {fetchData();}, []);

  const fetchData = async () => {
    try {
      // Fetch recetas
      const recetaResponse = await axios.get('/receta');
      const recetaData = recetaResponse.data.data;
      setRecetas(recetaData);

      // Fetch proportions and ingredients for each receta
      for (const receta of recetaData) {
        const proporcionResponse = await axios.get(`/proporcion/receta/${receta.id}`);
        const proporcionData = proporcionResponse.data.data;
        setProporciones((prevProporciones) => [...prevProporciones, ...proporcionData]);

        for (const proporcion of proporcionData) {
          const ingredienteResponse = await axios.get(`/ingrediente/${proporcion.ingrediente_id}`);
          const ingredienteData = ingredienteResponse.data.data;
          setIngredientes((prevIngredientes) => [...prevIngredientes, ...ingredienteData]);
        }
      }
    } catch (error) {
      console.error('API request error:', error);
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {recetas.map((receta) => (
          <li key={receta.id}>
            <h3>{receta.nombre}</h3>
            <p>Tiempo: {receta.tiempo}</p>
            <p>Tipo: {receta.tipo}</p>
            <p>Pasos: {receta.pasos}</p>
            <h4>Ingredientes:</h4>
            <ul>
              {proporciones
                .filter((proporcion) => proporcion.receta_id === receta.id)
                .map((proporcion) => {
                  const ingrediente = ingredientes.find((ingrediente) => ingrediente.id === proporcion.ingrediente_id);
                  return (
                    <li key={proporcion.receta_id}>
                      <p>
                        {ingrediente ? `${ingrediente.nombre} ${proporcion.proporcion} ${ingrediente.medida}` : ''}
                      </p>
                    </li>
                  );
                })}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
