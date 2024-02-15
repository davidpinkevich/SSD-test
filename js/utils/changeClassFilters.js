// добавление таргетного класса на кнопку фильтра
function changeClassFilters(buttons, className) {
  buttons.forEach((btn) => {
    if (btn.classList.contains(className)) {
      btn.classList.add("filters__target");
    } else {
      btn.classList.remove("filters__target");
    }
  });
}

export { changeClassFilters };
