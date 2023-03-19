const todoItems = document.getElementById("todoItems");
const input = document.getElementById("input");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addItem();
  }
});

const addItem = () => {
  const divParent = document.createElement("div");
  const divChild = document.createElement("div");
  const checkIcon = document.createElement("i");
  const trashIcon = document.createElement("i");

  divParent.className = "item";
  divParent.innerHTML = "<div>" + input.value + "</div>";

  checkIcon.className = "fas fa-check-square";
  checkIcon.style.color = "lightgray";
  checkIcon.addEventListener("click", () => {
    checkIcon.style.color = "limegreen";
  });
  divChild.appendChild(checkIcon);

  trashIcon.className = "fas fa-trash";
  trashIcon.style.color = "darkgray";
  trashIcon.addEventListener("click", () => {
    divParent.remove();
  });
  divChild.appendChild(trashIcon);

  divParent.appendChild(divChild);

  todoItems.appendChild(divParent);

  input.value = "";
};
