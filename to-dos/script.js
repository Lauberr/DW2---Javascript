document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("add");
    const addButton = document.querySelector(".create");
    const tasksContainer = document.querySelector(".to-do");
    const createdTasksCounter = document.querySelector(".num-created");
    const completedTasksCounter = document.querySelector(".num-check");

    let createdTasks = 0;
    let completedTasks = 0;

    function updateCounters() {
        createdTasksCounter.textContent = createdTasks;
        completedTasksCounter.textContent = completedTasks;
    }

    function updateEmptyState() {
        const emptyMessage = document.querySelector(".empty");
        if (tasksContainer.children.length === 0) {
            emptyMessage.style.display = "flex";
        } else {
            emptyMessage.style.display = "none";
        }
    }

    addButton.addEventListener("click", () => {
        const taskText = inputField.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            inputField.value = "";
            createdTasks++;
            updateCounters();
            updateEmptyState();
        }
    });

    function addTask(taskText) {
        const taskElement = document.createElement("label");
        taskElement.classList.add("task");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("unchecked");
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                taskElement.querySelector(".text-task").classList.add("teste-visual");
                completedTasks++;
            } else {
                taskElement.querySelector(".text-task").classList.remove("teste-visual");
                completedTasks--;
            }
            updateCounters();
        });

        const taskDescription = document.createElement("p");
        taskDescription.classList.add("text-task");
        taskDescription.textContent = taskText;

        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("bx", "bx-trash");
        deleteIcon.addEventListener("click", () => {
            tasksContainer.removeChild(taskElement);
            createdTasks--;
            if (checkbox.checked) {
                completedTasks--;
            }
            updateCounters();
            updateEmptyState();
        });

        taskElement.appendChild(checkbox);
        taskElement.appendChild(taskDescription);
        taskElement.appendChild(deleteIcon);

        tasksContainer.appendChild(taskElement);
    }

    updateEmptyState();
});
