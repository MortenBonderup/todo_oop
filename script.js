class TodoList {
    constructor(todoList) {
        this.tasks = todoList;
    }

    addTask() {
        const taskInput = document.getElementById('new-task');
        const taskDescription = taskInput.value.trim();
        if (taskDescription !== "") {
            this.tasks.push(taskDescription);
            taskInput.value = '';
            this.render();
        }
    }

    deleteTask(index) {
        this.tasks.splice(index, 1);
        this.render();
    }

    render() {
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';
        for (let i = 0; i < this.tasks.length; i++) {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `
                <span>${this.tasks[i]}</span>
                <button class="delete" onclick="myTodoList.deleteTask(${i})">Delete</button>
            `;
            taskList.appendChild(taskItem);
        }
    }
}

const myTodoList = new TodoList([]);
