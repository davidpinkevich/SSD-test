import { handlerDeleteTodo } from "./handler";
import cross from "../../../assets/icons/cross.svg";

function deleteButton(item, id) {
  const btn = document.createElement("button");
  btn.classList.add("item__delete");
  btn.innerHTML = `<img src=${cross} />`;

  btn.addEventListener("click", () => handlerDeleteTodo(item, id));

  item.append(btn);
}

export { deleteButton };
