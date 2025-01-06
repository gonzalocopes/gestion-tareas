const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

dotenv.config();  // Cargar variables de entorno
const app = express();
const port = process.env.PORT || 5000;

// Importar las rutas
const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/projects');
const taskRoutes = require('./routes/tasks');

// Middleware
app.use(cors());  // Habilitar CORS
app.use(express.json());  // Procesar cuerpos JSON en solicitudes
app.use(bodyParser.json());  // Parsear cuerpos JSON (por si se usa otro tipo de contenido)

// Conectar a la base de datos
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Conectado a la base de datos"))
  .catch((error) => console.log("Error de conexión a la base de datos:", error));

// Rutas básicas
app.get('/', (req, res) => {
  res.send("API de gestión de proyectos y tareas");
});

// Usar las rutas
app.use('/api/auth', authRoutes);  // Ruta de autenticación
app.use('/api/projects', projectRoutes);  // Ruta de proyectos
app.use('/api/tasks', taskRoutes);  // Ruta de tareas

// Escuchar en el puerto configurado
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
