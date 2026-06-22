class Task {
    constructor(id, name, description, assignedTo, dueDate, status) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.assignedTo = assignedTo;
        this.dueDate = dueDate;
        this.status = status;
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
        this.currentId = 1;
    }

    addTask(name, description, assignedTo, dueDate, status) {
        const task = new Task(
            this.currentId,
            name,
            description,
            assignedTo,
            dueDate,
            status
        );

        this.tasks.push(task);
        this.currentId++;
    }

    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
}