document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('task-form');
    const taskInput = document.getElementById('task');
    const taskList = document.getElementById('tasks');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addTask();
    });

    function addTask() {
        if (taskInput.value.trim() === '') return; // Avoid adding empty tasks

        const newTask = document.createElement('li');
        const updateBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');

        updateBtn.textContent = 'Update';
        updateBtn.className = 'update-btn';
        updateBtn.onclick = updateTask;

        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = deleteTask;

        newTask.textContent = taskInput.value;
        newTask.appendChild(updateBtn);
        newTask.appendChild(deleteBtn);
        newTask.onclick = markAsFinished;

        taskList.appendChild(newTask);
        taskInput.value = '';
        taskInput.focus(); // Optionally, refocus the input field
    }

    function markAsFinished(event) {
        const selected = event.target;
        if (selected.tagName === 'LI') {
            selected.style.textDecoration = 'line-through';
        }
    }

    function deleteTask(event) {
        event.stopPropagation(); // Prevents click event on li
        const btn = event.target;
        btn.parentElement.remove();
    }

    function updateTask(event) {
        event.stopPropagation(); // Prevents click event on li
        const btn = event.target;
        const li = btn.parentElement;
        const currentText = li.firstChild.textContent.trim();

        const newText = prompt('Update your task:', currentText);
        if (newText !== null && newText.trim() !== '') {
            li.firstChild.textContent = newText.trim();
        }
    }
});
