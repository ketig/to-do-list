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
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Remove";

  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";

  doneBtn.addEventListener("click", function () {
    span.style.textDecoration = "line-through";
    span.style.color = "gray";
    doneBtn.disabled = true;
  });

  li.appendChild(span);
  li.appendChild(doneBtn);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  taskInput.value = "";
});
