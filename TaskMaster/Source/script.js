function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const taskItem = document.createElement('div');
    taskItem.className = 'todo-item';
    taskItem.innerHTML = `
        <input type="checkbox">
        <span>${taskInput.value}</span>
        <button class="btn btn-danger btn-sm" onclick="removeTask(this)">Remove</button>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = '';
}

function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
