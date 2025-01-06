const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Crear una tarea
router.post('/', async (req, res) => {
  const { title, description, projectId } = req.body;

  try {
    const task = new Task({ title, description, projectId });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la tarea' });
  }
});

// Obtener todas las tareas de un proyecto
router.get('/:projectId', async (req, res) => {
  try {
    const tasks = await Task.find({ projectId: req.params.projectId });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener tareas' });
  }
});

module.exports = router;
