// Get references to the DOM elements
const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

// Function to load tasks from localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        addTaskToDOM(task);
    });
}

// Function to save tasks to localStorage
function saveTasks() {
    const tasks = [];
    const listItems = document.querySelectorAll('#todoList li');
    listItems.forEach(item => {
        tasks.push(item.firstChild.textContent); // Get the text content of the <li>
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to add a task to the DOM
function addTaskToDOM(task) {
    // Create a new list item
    const li = document.createElement('li');
    li.textContent = task;

    // Create the delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.backgroundColor = 'red';
    deleteButton.addEventListener('click', () => {
        li.remove(); // Remove the list item
        saveTasks(); // Update localStorage
    });

    // Append the delete button to the list item
    li.appendChild(deleteButton);

    // Append the list item to the todo list
    todoList.appendChild(li);
}

// Function to add a new task
function addTodo() {
    const task = todoInput.value.trim(); // Get the input value and trim whitespace

    if (task === '') {
        alert('Please enter a task!');
        return;
    }

    addTaskToDOM(task); // Add task to the DOM
    saveTasks(); // Save tasks to localStorage

    // Clear the input field
    todoInput.value = '';
}

// Attach the addTodo function to the Add button
addButton.addEventListener('click', addTodo);
addButton.style.backgroundColor = 'green';

// Optional: Add support for pressing Enter to add the task
todoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTodo();
    }
});

// Load tasks when the page loads
document.addEventListener('DOMContentLoaded', loadTasks);
