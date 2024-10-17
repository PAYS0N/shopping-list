function createItem() {
    const item = document.createElement("div");
    const text = document.createElement("div");
    const buttonRemove = document.createElement("button");
    const input = document.querySelector(".input-text");
    itemText = input.   value;

    text.textContent = itemText;
    buttonRemove.textContent = "Remove Item";
    buttonRemove.setAttribute("class", "remove-button")

    item.setAttribute("class", "item");
    item.appendChild(text)
    item.appendChild(buttonRemove)

    const list = document.querySelector(".list");
    list.appendChild(item)
}

const buttonCreate = document.querySelector(".create");
buttonCreate.addEventListener("click", createItem);