import React, { useState, useEffect } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetch('/api/tasks')
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  const addTask = () => {
    fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newTask }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to add task.');
        }
      })
      .then(() => setNewTask(''))
      .catch((error) => alert(error));
  };

  const removeTask = (index) => {
    fetch(`/api/tasks/${index}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to remove task.');
        }
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="container todo-container">
      <h2 className="text-center mb-4">To-Do List</h2>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" onClick={addTask}>
            Add
          </button>
        </div>
      </div>

      <div id="taskList">
        {tasks.map((task, index) => (
          <div key={index} className="todo-item">
            <input type="checkbox" />
            <span>{task}</span>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeTask(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
