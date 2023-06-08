const express = require('express')
const mysql = require('mysql');
const app = express()

// Conexión a la base de datos utilizando MySQL

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bitacora',
  });

connection.connect((err) => {
    if (err) {
      console.error('Error, no se pudo conectar a la base de datos: ', err);
      return;
    }
    console.log('Conectado a la base de datos');
  });

// Definición de APIs

// GET /receta/{id}
app.get('/receta/:field', (req, res) => {
  const {field} = req.params;

  let query = `SELECT ${field} FROM receta`;

  connection.query(query, (err, results) => {
    if (results.length === 0) {
      // Tabla existe, no tiene datos
      res.status(200).json({ message: 'No hay datos en la tabla o campo' }); 
      return;
    }

    if (results.length > 0) { 
      // Tabla existe, tiene datos
      res.json(results);
      return;
    }

    res.status(404).json({ error: 'No se encontro la tabla o campo' });
  });
});

// PATCH /receta/{id}

// DELETE /receta/{id}

// POST /receta/{id}

// GET /ingrediente

// POST /ingrediente

// GET /proporcion/{id}

  app.listen(3000, () => {console.log("Server iniciado en 3000")})