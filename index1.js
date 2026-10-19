const todocontainer = document.getElementById("todo-container");
const todos = document.getElementById("todos");
const inputelement = document.createElement("input");
todocontainer.appendChild(inputelement);
const todobutton = document.createElement("button");

todobutton.innerHTML = "Add";
todocontainer.appendChild(todobutton);

todobutton.addEventListener("click", function () {
  const inputvalue = inputelement.value;
  const tododiv = document.createElement("div");
  tododiv.innerHTML = inputvalue;

  const delbutton = document.createElement("button");
  delbutton.innerHTML = "remove";

  const todorow = document.createElement("div");
  todorow.appendChild(tododiv);
  todorow.appendChild(delbutton);

  todos.appendChild(todorow)
});
