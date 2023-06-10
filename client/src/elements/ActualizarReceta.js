import React, { useState } from 'react';
import axios from 'axios';

const ActualizarReceta = ({ onSubmit }) => {
    
    

  return (
    <section className="formulario-receta">
      <h2>Actualizar Receta</h2>
      <form>
        <label>
            Id:
            <input type="number"/>
        </label>

        <label>
            Pasos:
            <textarea/>
        </label>
        <button>Actualizar</button>
      </form>
    </section>
  );
};

export default ActualizarReceta;