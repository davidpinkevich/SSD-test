// добавление классов для отображения отфильтрованного списка
function changeDisabled(items, active, target) {
  items.forEach((elem) => {
    switch (target) {
      case "all": {
        elem.classList.remove("disabled");
        break;
      }
      case "active": {
        if (!active.includes(elem.id)) {
          elem.classList.add("disabled");
        } else {
          elem.classList.remove("disabled");
        }
        break;
      }
      case "completed":
        {
          if (active.includes(elem.id)) {
            elem.classList.add("disabled");
          } else {
            elem.classList.remove("disabled");
          }
        }
        break;
    }
  });
}

export { changeDisabled };
