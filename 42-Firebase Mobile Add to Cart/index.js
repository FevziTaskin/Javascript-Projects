import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// You need to write your own database url for your app to work properly
const appSettings = {
  databaseURL: "your firebase database URL",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shopping-list");

const inputFieldElement = document.getElementById("input-field");
const addButtonElement = document.getElementById("add-button");
const shoppingListElement = document.getElementById("shopping-list");

addButtonElement.addEventListener("click", () => {
  let inputValue = inputFieldElement.value;
  push(shoppingListInDB, inputValue);

  clearInputFieldElement();
});

// Fetching data from real-time database and adding items to it
// This onValue function is running whenever a change to the database
onValue(shoppingListInDB, function (snapshot) {
  if (snapshot.exists()) {
    let itemsArray = Object.entries(snapshot.val());

    clearShoppingListElement();

    for (let i = 0; i < itemsArray.length; i++) {
      let currentItem = itemsArray[i];
      appendItemToShoppingListElement(currentItem);
    }
  } else {
    shoppingListElement.innerHTML = "No items here... yet";
  }
});

function clearInputFieldElement() {
  inputFieldElement.value = "";
}

function clearShoppingListElement() {
  shoppingListElement.innerHTML = "";
}

function appendItemToShoppingListElement(item) {
  let itemID = item[0];
  let itemValue = item[1];

  let newElement = document.createElement("li");
  newElement.textContent = itemValue;

  shoppingListElement.append(newElement);

  // Deleting Item
  newElement.addEventListener("click", function () {
    let exactLocationItemInDB = ref(database, `shopping-list/${itemID}`);
    remove(exactLocationItemInDB);
  });
}
