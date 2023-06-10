import React, { useState } from 'react';
import axios from 'axios';

const FormularioReceta = ({ onSubmit }) => {
    
    const [formData, setFormData] = useState({
        id: '',
        nombre: '',
        tiempo: '',
        tipo: '',
        pasos: '',
      });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
      
      const postReceta = (formData) => {
        const body = {
          id: formData.id,
          nombre: formData.nombre,
          tiempo: formData.tiempo,
          tipo: formData.tipo,
          pasos: formData.pasos,
        };
      
        axios
          .post('/receta', body)
          .then((response) => {
            console.log('Receta created:', response.data);
          })
          .catch((error) => {
            console.error('Error creating receta:', error);
          });
      };
      
      const handleSubmit = (event) => {
        event.preventDefault();
      
        postReceta(formData);
      };

  return (
    <section className="formulario-receta">
      <h2>Agregar Receta</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Id:
          <input type="number" name="id" value={formData.id} onChange={handleInputChange} />
        </label>
        <label>
          Nombre:
          <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} />
        </label>
        <label>
          Tiempo:
          <input type='number' name="tiempo" value={formData.tiempo} onChange={handleInputChange} />
        </label>
        <label>
          Tipo:
          <input type="text" name="tipo" value={formData.tipo} onChange={handleInputChange} />
        </label>
        <label>
          Pasos:
          <input type="text" name="pasos" value={formData.pasos} onChange={handleInputChange} />
        </label>
        <button type="submit">Create Receta</button>
      </form>
    </section>
  );
};

export default FormularioReceta;