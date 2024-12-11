    const toDoInput = document.getElementById("to-do-input");
    const toDoList = document.getElementById("to-do-list");


    const addToDo = () => {
        //add li
        const listItem = document.createElement("li");
        listItem.classList.add("incomplete");

        //add task text
        const taskText = document.createElement("span");
        taskText.textContent = toDoInput.value;
        taskText.setAttribute('class', 'task')
        taskText.onclick = function () {
            editTask(this);
        };
        listItem.appendChild(taskText);

        //add delete option
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete Task";
        deleteBtn.onclick = function () {
            deleteTask(this);
        };
        listItem.appendChild(deleteBtn);

        //add complete option
        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Complete!";
        completeBtn.onclick = function () {
            completeTask(this);
        };
        listItem.appendChild(completeBtn);



        //add to todo list
        toDoList.appendChild(listItem);

        //clear input field
    toDoInput.value = "";
    };

    //to delete a task
    function deleteTask(button) {
        const listItem = button.parentNode;
        toDoList.removeChild(listItem);
    }

    //to complete a task
    function completeTask(button) {
        const listItem = button.parentNode;
        listItem.classList.remove("incomplete");
        listItem.classList.add("completed");
    }

    //to edit a task
    function editTask(button) {
        const listItem = button.parentNode;

        const taskToEdit = listItem.getElementsByClassName("task")[0]
        
        const editField = document.createElement("input");
        editField.setAttribute('type', 'text')
        editField.setAttribute('class', 'edit-field')
        editField.value = taskToEdit.textContent
        taskToEdit.replaceWith(editField)

        //add edit option
        const editBtn = document.createElement("button");
        editBtn.textContent = "Submit Edit";
        editBtn.onclick = function () {
            submitEdit(this);
        };
        listItem.appendChild(editBtn);
    }

    //to submit edit
    function submitEdit(button) {
        const listItem = button.parentNode;
        const editField = listItem.getElementsByClassName('edit-field')[0];
        const taskText = document.createElement("span");
        taskText.textContent = editField.value;
        taskText.setAttribute('class', 'task')
        taskText.onclick = function () {
            editTask(this);
        };
        editField.replaceWith(taskText)
        listItem.removeChild(button)

    }