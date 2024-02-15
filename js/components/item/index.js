import { getElement } from "../../utils/getElement";
import { checkButton } from "../check-button";
import { deleteButton } from "../delete-button";

function createItem(elemnt) {
  const target = getElement(".filters__target");
  const item = document.createElement("div");
  const items = getElement(".items");

  if (target.classList.contains("filters__completed")) {
    item.classList.add("item", "disabled");
  } else {
    item.classList.add("item");
  }
  item.setAttribute("id", elemnt.id);
  item.innerHTML = `
    <div class="item__info">
      <h3>${elemnt.title}</h3>
      <p>${elemnt.text}</p>
    </div>
  `;
  deleteButton(item, elemnt.id);
  checkButton(item, elemnt.id);
  items.append(item);
}

export { createItem };
