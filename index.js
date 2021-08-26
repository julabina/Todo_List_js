const todoInputText = document.getElementById("textInput");
const todoNewBtn = document.getElementById("newTaskBtn");
const listContainer = document.getElementById("listContainer");
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
  listContainer.innerHTML += `
    <div class="todoContainer">
                    <input type="checkbox" name="" id="check" class="checkbox">
                    <p class="todoText">${todoInputText.value}</p>
                    <p class="delete">X</p>
                </div>
    `;
};

todoNewBtn.addEventListener("click", () => {
  errorCheck();
  if (valid === true) {
    addTodo();
    emptyInput();
  }
});

deleteBtn.addEventListener("click", () => {
  console.log("test3");
});
