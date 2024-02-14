import { getElement } from "../../utils/getElement";
import { handlerAddPost } from "./handler";

function addPost() {
  const button = getElement(".input__button");

  button.addEventListener("click", handlerAddPost);
}

export { addPost };
