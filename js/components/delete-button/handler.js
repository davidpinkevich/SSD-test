import { TODO_ITEMS } from "../../data";

function handlerDeleteTodo(item, id) {
  const deleteIndex = TODO_ITEMS.findIndex((item) => item.id === id);
  TODO_ITEMS.splice(deleteIndex, 1);
  item.remove();
}

export { handlerDeleteTodo };
