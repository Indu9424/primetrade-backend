const Task = require('../models/taskModel');

exports.createTask = (req, res) => {
  const { title, description } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });

  Task.create(title, description, req.user.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Task created successfully' });
  });
};

exports.getTasks = (req, res) => {
  Task.getAllByUser(req.user.id, (err, tasks) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(tasks);
  });
};

exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  Task.update(id, title, description, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Task updated successfully' });
  });
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  Task.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Task deleted successfully' });
  });
};
