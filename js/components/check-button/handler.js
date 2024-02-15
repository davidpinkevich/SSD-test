import { TODO_ITEMS } from "../../data";
import check from "../../../assets/icons/check.svg";

function handlerCheckTodo(item, btn, id) {
  const checkIndex = TODO_ITEMS.findIndex((item) => item.id === id);

  if (TODO_ITEMS[checkIndex].completed) {
    btn.innerHTML = "";
    item.classList.toggle("line__through");
  } else {
    btn.innerHTML = `<img src=${check} />`;
    item.classList.toggle("line__through");
  }
  TODO_ITEMS[checkIndex].completed = !TODO_ITEMS[checkIndex].completed;
}

export { handlerCheckTodo };
