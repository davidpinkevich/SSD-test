import { handlerCheckTodo } from "./handler";

function checkButton(item, id) {
  const btn = document.createElement("button");
  btn.classList.add("item__check");

  btn.addEventListener("click", (event) => {
    handlerCheckTodo(item, event.currentTarget, id);
  });

  item.prepend(btn);
}

export { checkButton };
