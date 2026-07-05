<<<<<<< HEAD
// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let error = document.getElementById("error");

    if (name === "" || email === "") {
        error.textContent = "All fields are required!";
    } else if (!email.includes("@")) {
        error.textContent = "Enter a valid email!";
    } else {
        error.textContent = "";
        alert("Form submitted successfully!");
    }
});

// To-Do List
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskInput.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
=======
function showMessage() {
    alert("Hello! You clicked the button 😊");
>>>>>>> 55fb7ef07852dbabb764d885457fa075a359bef7
}