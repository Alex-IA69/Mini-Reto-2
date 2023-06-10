import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('/receta')
      .then(response => {
        const responseData = response.data;
        if (Array.isArray(responseData.data)) {
          setData(responseData.data);
        } else {
          console.error('Invalid response data:', responseData);
        }
      })
      .catch(error => {
        console.error('API request error:', error);
      });
  };

  return (
    <div>
      <ul>
      {data.map(item => (
          <li key={item.id}>
            <h3>{item.nombre}</h3>
            <p>Tiempo: {item.tiempo}</p>
            <p>Tipo: {item.tipo}</p>
            <p>Pasos: {item.pasos}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataList;
