// SELECTORS
const addInput = document.getElementById("toDoInput");
const addBtn = document.getElementById("addList");
const addTask = document.getElementById("tasks")

// EVENTLISTENER
addBtn.addEventListener("click", addToDo);
addTask.addEventListener("click", deleteTask);
// FUNCTIONS

function addToDo(event) {

    // PREVENT SUBMIT
    event.preventDefault();

    // Create ToDo div
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo");

    // CREATE LI
    const newDoLi = document.createElement("li");
    newDoLi.innerText = addInput.value;
    newDoLi.classList.add("toDoTask");

    // APPEND CHILD
    toDoDiv.appendChild(newDoLi);

    // GROUP BUTTON
    const groupedBtn = document.createElement("div");
    groupedBtn.classList.add("groupedBtn");
    toDoDiv.appendChild(groupedBtn);

    // COMPLETED TASK - CHECK
    const completedTaskBtn = document.createElement("button");
    completedTaskBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedTaskBtn.classList.add("complete-btn");
    groupedBtn.appendChild(completedTaskBtn);

    // DELETE BUTTON
    const deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteTaskBtn.classList.add("delete-btn");
    groupedBtn.appendChild(deleteTaskBtn);

    // APPEND TO ADDINPUT
    addTask.appendChild(toDoDiv);

    // CLEAR TO-DO INPUT VALUE
    addInput.value = "";
}

function deleteTask(e) {
    const selectTarget = e.target;
    
    if (selectTarget.classList[0] === "delete-btn") {
        const deleteItem = selectTarget.parentElement.parentElement;
        deleteItem.remove();
    } else {
        const completeItem = selectTarget.parentElement.parentElement;
        const btnItem = selectTarget.parentElement;
        completeItem.style.backgroundColor = "rgba(88, 255, 66, 0.5)";
        btnItem.remove();
    }
}

