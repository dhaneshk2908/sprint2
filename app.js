const taskManager = new TaskManager();

const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

function renderTasks() {
    taskList.innerHTML = "";

    taskManager.tasks.forEach(task => {
        taskList.innerHTML += `
        <div class="card mb-3">
            <div class="card-body">
                <h5>${task.name}</h5>
                <p>${task.description}</p>
                <p><strong>Assigned To:</strong> ${task.assignedTo}</p>
                <p><strong>Due Date:</strong> ${task.dueDate}</p>
                <p><strong>Status:</strong> ${task.status}</p>
                <button class="btn btn-danger" onclick="deleteTask(${task.id})">
                    Delete
                </button>
            </div>
        </div>
        `;
    });
}

taskForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("taskName").value.trim();
    const description = document.getElementById("description").value.trim();
    const assignedTo = document.getElementById("assignedTo").value.trim();
    const dueDate = document.getElementById("dueDate").value;
    const status = document.getElementById("status").value;

    if (!name || !description || !assignedTo || !dueDate || !status) {
        alert("All fields are required!");
        return;
    }

    taskManager.addTask(name, description, assignedTo, dueDate, status);

    renderTasks();

    taskForm.reset();
});

function deleteTask(id) {
    taskManager.deleteTask(id);
    renderTasks();
}