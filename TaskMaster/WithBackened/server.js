const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  const newTask = req.body.newTask;
  if (newTask.trim() !== '') {
    tasks.push(newTask);
    res.status(201).json({ message: 'Task added successfully' });
  } else {
    res.status(400).json({ error: 'Please enter a task.' });
  }
});

app.delete('/api/tasks/:index', (req, res) => {
  const index = req.params.index;
  tasks.splice(index, 1);
  res.json({ message: 'Task removed successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
