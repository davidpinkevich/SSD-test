import { getElement } from "../../utils/getElement";

function createItem(elemnt) {
  const item = document.createElement("div");
  const main = getElement("main");

  item.classList.add("item");
  item.setAttribute("data-id", elemnt.id);
  item.innerHTML = `
    <h3>${elemnt.title}</h3>
    <p>${elemnt.text}</p>
  `;

  main.append(item);
}

export { createItem };
