function removeItem() {
    this.parentNode.remove();
}

function createItem() {
    const item = document.createElement("li");
    const text = document.createElement("div");
    const buttonRemove = document.createElement("button");
    const input = document.querySelector(".input-text");
    itemText = input.value;
    input.value = '';

    text.textContent = itemText;
    buttonRemove.textContent = "Remove Item";
    buttonRemove.setAttribute("class", "remove-button");
    buttonRemove.addEventListener("click", removeItem);

    item.setAttribute("class", "item");
    item.appendChild(text)
    item.appendChild(buttonRemove)

    const list = document.querySelector(".list");
    list.appendChild(item)

    input.focus();
}

const buttonCreate = document.querySelector(".create");
buttonCreate.addEventListener("click", createItem);