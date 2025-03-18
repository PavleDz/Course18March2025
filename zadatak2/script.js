const addInput = document.getElementById("add");
const submitBtn = document.querySelector("button.add");
const filter = document.getElementById("filter");
const itemsContainer = document.querySelector(".items");

// add
submitBtn.addEventListener("click", function (e) {
  const newItemText = addInput.value.trim();
  if (newItemText !== "") {
    const newItemDiv = document.createElement("div");
    newItemDiv.className = "item";

    const contentDiv = document.createElement("div");

    const newHeading = document.createElement("h3");
    newHeading.textContent = newItemText;

    const removeBtn = document.createElement("button");
    removeBtn.className = "remove";
    removeBtn.textContent = "X";
    removeBtn.addEventListener("click", removeItem);

    contentDiv.appendChild(newHeading);
    contentDiv.appendChild(removeBtn);
    newItemDiv.appendChild(contentDiv);

    itemsContainer.appendChild(newItemDiv);

    addInput.value = "";
  }
});

// Remove
function removeItem(e) {
  const itemToRemove = e.target.parentNode.parentNode;
  itemsContainer.removeChild(itemToRemove);
}

// Filter
filter.addEventListener("keyup", function (e) {
  const searchText = e.target.value.toLowerCase();

  const itemList = document.querySelectorAll(".item");

  let i = 0;
  while (i < itemList.length) {
    const itemName = itemList[i].querySelector("h3").textContent.toLowerCase();

    if (itemName.indexOf(searchText) !== -1) {
      itemList[i].style.display = "block";
    } else {
      itemList[i].style.display = "none";
    }
    i++;
  }
});
