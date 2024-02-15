import { v4 as uuidv4 } from "uuid";
import { getElement } from "../../utils/getElement";
import { TODO_ITEMS } from "../../data";
import { createItem } from "../item";

function handlerAddPost() {
  const input = getElement(".input__title input");
  const textarea = getElement(".input__text textarea");

  if (textarea.value.length >= 1) {
    const elemnt = {
      id: uuidv4(),
      title: input.value,
      text: textarea.value,
      completed: false,
    };

    TODO_ITEMS.push(elemnt);
    createItem(elemnt);

    input.value = "";
    textarea.value = "";
    textarea.placeholder = "";
  } else {
    textarea.placeholder = "Введите не менее 1 символа";
  }
}

export { handlerAddPost };
