const todoInputText = document.getElementById("textInput");
const todoNewBtn = document.getElementById("newTaskBtn");
const listContainer = document.getElementById("listContainer");
const select = document.getElementById("deleteChoice");
const eraseBtn = document.getElementById("eraseContainerDeleteBtn");
const deleteBtn = document.querySelector(".delete");
let valid;

const errorCheck = () => {
  const span = document.getElementById("spanError");
  if (todoInputText.value === "") {
    span.classList.remove("error");
    valid = false;
  } else {
    span.classList.add("error");
    valid = true;
  }
};

const emptyInput = () => {
  todoInputText.value = "";
  todoInputText.select();
};

const addTodo = () => {
  let todoContainerId = Date.now();

  listContainer.innerHTML += `
    <div class="todoContainer" id="${todoContainerId}">
        <input type="checkbox" name="checkTodo" id="check${todoContainerId}" class="checkbox">
        <p class="todoText">${todoInputText.value}</p>
        <p class="delete" id="delete${todoInputText.value}">X</p>
    </div>
    `;
};

const erase = () => {
  const del = document.querySelectorAll(".todoContainer");
  const checkOrNot = document.querySelectorAll(".checkbox");

  if (select.value === "1") {
    for (i = 0; i < checkOrNot.length; i++) {
      if (checkOrNot[i].checked) {
        del[i].remove();
      }
    }
  } else if (select.value === "2") {
    for (let i = 0; i < del.length; i++) {
      del[i].remove();
    }
  } else {
    for (i = 0; i < checkOrNot.length; i++) {
      if (!checkOrNot[i].checked) {
        del[i].remove();
      }
    }
  }
};

todoNewBtn.addEventListener("click", (e) => {
  e.preventDefault();
  errorCheck();
  if (valid === true) {
    addTodo();
    emptyInput();
  }
});

eraseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  erase();
});

/* deleteBtn.addEventListener("click", () => {
  console.log("test3");
}); */
