document.addEventListener('DOMContentLoaded', function () {
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Function to add a task
    addTaskBtn.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

            // Add task text
            listItem.textContent = taskText;

            // Create a delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', function () {
                taskList.removeChild(listItem);
            });

            listItem.appendChild(deleteBtn);
            taskList.appendChild(listItem);

            // Clear the input field
            taskInput.value = '';
        }
    });
});
