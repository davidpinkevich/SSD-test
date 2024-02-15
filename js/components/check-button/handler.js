import { TODO_ITEMS } from "../../data";
import { getElement } from "../../utils/getElement";
import check from "../../../assets/icons/check.svg";

function handlerCheckTodo(item, btn, id) {
  const checkIndex = TODO_ITEMS.findIndex((item) => item.id === id);
  const target = getElement(".filters__target");

  if (TODO_ITEMS[checkIndex].completed) {
    btn.innerHTML = "";
    item.classList.toggle("line__through");
  } else {
    btn.innerHTML = `<img src=${check} />`;
    item.classList.toggle("line__through");
  }
  if (
    target.classList.contains("filters__active") ||
    target.classList.contains("filters__completed")
  ) {
    item.classList.add("disabled");
  } else {
    item.classList.add("item");
  }
  TODO_ITEMS[checkIndex].completed = !TODO_ITEMS[checkIndex].completed;
}

export { handlerCheckTodo };
