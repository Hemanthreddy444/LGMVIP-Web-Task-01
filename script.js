// Get elements from the DOM
const taskInput = document.getElementById("taskInput");
const timeInput = document.getElementById("timeInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
  // Get the task and time input values
  const taskText = taskInput.value;
  const timeValue = timeInput.value;

  if (taskText === "" || timeValue === "") {
    return; // Ignore empty tasks or times
  }

  // Create a new list item
  const li = document.createElement("li");
  li.style.backgroundColor = getRandomColor();

  // Create a span element for displaying the task text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  // Create a span element for displaying the time
  const timeSpan = document.createElement("span");
  timeSpan.textContent = timeValue;

  // Create a delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.classList.add("delete-button");

  // Add click event listener to delete task
  deleteButton.addEventListener("click", function() {
    li.remove();
  });

  // Append the task span, time span, and delete button to the list item
  li.appendChild(taskSpan);
  li.appendChild(timeSpan);
  li.appendChild(deleteButton);

  // Append the list item to the task list
  taskList.appendChild(li);

  // Clear the input fields
  taskInput.value = "";
  timeInput.value = "";
}

// Event listener for the add button
addButton.addEventListener("click", addTask);

// Function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
