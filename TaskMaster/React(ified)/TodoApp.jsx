import React, { useState } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    } else {
      alert('Please enter a task.');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
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
