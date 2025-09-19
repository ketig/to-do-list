const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (taskInput.value === "") {
    return;
  }

  // li
  const li = document.createElement("li");
  // span
  const span = document.createElement("span");
  span.textContent = taskInput.value;
  // button

  li.appendChild(span);

  taskList.appendChild(li);

  taskInput.value = "";
});
