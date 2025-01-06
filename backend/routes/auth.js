const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  console.log('Verificando correo:', email);  // Depuración: muestra el correo recibido

  try {
    // Verificar si el usuario ya existe
    const userExists = await User.findOne({ email });

    // Agregar más detalles en los logs para ver qué está sucediendo
    if (userExists) {
      console.log('Usuario ya registrado:', email);
      return res.status(400).json({ error: 'El correo ya está registrado' });
    }

    // Crear un nuevo usuario
    const user = new User({ email, password });
    await user.save();

    // Enviar respuesta de éxito
    res.status(201).json({ message: 'Usuario creado exitosamente' });
  } catch (error) {
    console.error('Error al crear el usuario:', error);

    // Enviar un error detallado
    if (error.code === 11000) {
      // Código de error de MongoDB para duplicados (correo ya registrado)
      return res.status(400).json({ error: 'El correo ya está registrado' });
    }

    // Otros posibles errores
    res.status(500).json({ error: `Error al crear el usuario: ${error.message}` });
  }
});

// Ruta para iniciar sesión (login)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Buscar al usuario por el correo
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Usuario no encontrado' });

    // Comparar la contraseña
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ error: 'Contraseña incorrecta' });

    // Generar el token JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Enviar el token al cliente
    res.json({ token });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
});

module.exports = router;
