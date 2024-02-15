import { getElement } from "../../utils/getElement";
import { changeClassFilters } from "../../utils/changeClassFilters";
import { changeDisabled } from "../../utils/changeDisabled";
import { TODO_ITEMS } from "../../data";

function addFilters() {
  const filtersBlock = getElement(".filters");
  const buttons = document.querySelectorAll(".filters button");

  filtersBlock.addEventListener("click", (event) => {
    const items = document.querySelectorAll(".item");
    const active = TODO_ITEMS.filter((elem) => !elem.completed).map(
      (elem) => elem.id
    );
    const target = event.target;
    if (target.classList.contains("filters__all")) {
      changeClassFilters(buttons, "filters__all");
      changeDisabled(items, active, "all");
    } else if (target.classList.contains("filters__active")) {
      changeDisabled(items, active, "active");
      changeClassFilters(buttons, "filters__active");
    } else if (target.classList.contains("filters__completed")) {
      changeDisabled(items, active, "completed");
      changeClassFilters(buttons, "filters__completed");
    }
  });
}

export { addFilters };
