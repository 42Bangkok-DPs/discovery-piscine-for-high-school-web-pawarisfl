document.getElementById('newTaskButton').addEventListener('click', () => {
    const task = prompt("Enter a new TO DO:");
    if (task && task.trim() !== "") {
        addTask(task);
        saveTasks();
    }
});

function addTask(task) {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'todo-item';
    taskDiv.textContent = task;

    taskDiv.addEventListener('click', () => {
        const confirmDelete = confirm("Do you want to remove this TO DO?");
        if (confirmDelete) {
            taskDiv.remove();
            saveTasks();
        }
    });

    const ftList = document.getElementById('ft_list');
    ftList.insertBefore(taskDiv, ftList.firstChild); // Add to the top
}

function saveTasks() {
    const tasks = Array.from(document.getElementsByClassName('todo-item')).map(item => item.textContent);
    document.cookie = `tasks=${JSON.stringify(tasks)}; path=/; max-age=31536000`; // 1 year expiration
}

function loadTasks() {
    const cookies = document.cookie.split('; ');
    const taskCookie = cookies.find(row => row.startsWith('tasks='));
    if (taskCookie) {
        const tasks = JSON.parse(taskCookie.split('=')[1]);
        tasks.forEach(task => addTask(task));
    }
}

// Load tasks when the page is loaded
window.onload = loadTasks;
