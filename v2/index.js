const ul = document.getElementById("listContainer");
const addBtn = document.getElementById("btnAdd");
const input = document.getElementById("inputText");

const creatElement = () => {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
};

addBtn.addEventListener("click", creatElement());
