const express = require('express');
const Project = require('../models/Project');
const router = express.Router();

// Crear un proyecto
router.post('/', async (req, res) => {
  const { name, description } = req.body;

  try {
    const project = new Project({ name, description });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el proyecto' });
  }
});

// Obtener todos los proyectos
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener proyectos' });
  }
});

module.exports = router;
