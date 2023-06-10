import React, { useState } from 'react';
import axios from 'axios';

const ActualizarReceta = ({ onSubmit }) => {
    
    function modificarReceta() {
        var receta_id = document.getElementById("id").value;
        var pasos_id = document.getElementById("id").value;
        axios.patch('/receta/$(receta_id)', {'pasos': pasos_id});
    }

  return (
    <section className="formulario-receta">
      <h2>Actualizar Receta</h2>
      <form action="/receta" method="patch">
            <ul>
                <li>
                    <label for="id">ID:</label>
                    <input type="number" id="id" name="receta_id" />
                </li>
                <li>
                    <label for="pasos">Pasos:</label>
                    <input type="text" id="pasos" name="pasos_id" />
                </li>
                <li class="button">
                    <button type="submit" onClick="modificarReceta"> Actualizar</button>
                    </li>
            </ul>
        </form>
    </section>
  );
};

export default ActualizarReceta;