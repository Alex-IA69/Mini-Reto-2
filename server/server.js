const express = require('express')
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express()

app.use(bodyParser.json());

// Conexión a la base de datos utilizando MySQL

const connection = mysql.createConnection({
    host: 'localhost', // cambiar al momento de deployment
    user: 'testuser',
    password: 'passw0rdnT.!',
    database: 'minireto',
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
app.get('/receta/:id', (req, res) => {
  const { id } = req.params;

  let query = 'SELECT * FROM receta WHERE id = ?';
  let values = [id];

  connection.query(query, values, (err, results) => {
    if (err) {
      // Handle the error
      console.error('Error executing the query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    if (results.length === 0) {
      // Table exists, but no data found
      res.status(200).json({ message: 'No hay datos en la tabla o campo' });
      return;
    }

    // Table exists and has data
    res.status(200).json({ data: results });
  });
});

// PATCH /receta/{id}
app.patch('/receta/:id', (req, res) => {
  const { id } = req.params;
  const { pasos } = req.body;

  let query = 'UPDATE receta SET pasos = ? WHERE id = ?';
  let values = [pasos, id];

  connection.query(query, values, (err, results) => {
    if (err) {
      // Handle the database error
      res.status(500).json({ error: 'Error al actualizar el registro en la tabla' });
      return;
    }

    if (results.affectedRows === 0) {
      // No matching record found
      res.status(404).json({ error: 'No se encontró el registro' });
      return;
    }

    // Record updated successfully
    res.status(200).json({ message: 'Registro actualizado correctamente' });
  });
});

// DELETE /receta/{id}
app.delete('/receta/:id', (req, res) => {
  const { id } = req.params;

  let query = 'DELETE FROM receta WHERE id = ?';
  let values = [id];

  connection.query(query, values, (err, results) => {
    if (err) {
      // Handle the database error
      res.status(500).json({ error: 'Error al eliminar el registro de la tabla' });
      return;
    }

    if (results.affectedRows === 0) {
      // No matching record found
      res.status(404).json({ error: 'No se encontró el registro' });
      return;
    }

    // Record deleted successfully
    res.status(200).json({ message: 'Registro eliminado correctamente' });
  });
});

// GET /receta
app.get('/receta', (req, res) => {
  let query = 'SELECT * FROM receta';

  connection.query(query, (err, results) => {
    if (err) {
      // Handle the error
      console.error('Error executing the query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    if (results.length === 0) {
      // Table exists, but no data found
      res.status(200).json({ message: 'No hay datos en la tabla o campo' });
      return;
    }

    // Table exists and has data
    res.status(200).json({ data: results });
  });
});

// POST /receta
app.post('/receta', (req, res) => {
  const { id, nombre, tiempo, tipo, pasos } = req.body;

  // Mini validación
  if (!id || !nombre || !tiempo || !tipo || !pasos) {
    res.status(400).json({ error: 'Faltan campos correspondientes' });
    return;
  }

  if (typeof tiempo !== 'number' || tiempo < 0) {
    res.status(400).json({ error: 'Campo de tiempo invalido' });
    return;
  }

  let query = 'INSERT INTO receta (id, nombre, tiempo, tipo, pasos) VALUES (?, ?, ?, ?, ?)';
  let values = [id, nombre, tiempo, tipo, pasos];

  connection.query(query, values, (err, results) => {
    if (err) {
      // Handle the database error
      res.status(400).json({ error: 'Error al insertar el registro en la tabla' });
      return;
    }

    if (results.affectedRows === 1) {
      // Record inserted successfully
      res.status(201).json({ message: 'Registro insertado correctamente' });
    } else {
      // Failed to insert the record
      res.status(500).json({ error: 'Error al insertar el registro en la tabla' });
    }
  });
});


app.listen(3000, () => {console.log("Server iniciado en 3000")})