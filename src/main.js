import { example } from "./dataFunctions.js";
import { sortByName } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

const rootFill = document.getElementById("root");
rootFill.appendChild(renderItems(data));

// const buttons = document.getElementById("buttons");
// buttons.appendChild(sortBy(data));
  const selectSort = document.querySelector('select[data-testid="select-sort"]');
  selectSort.addEventListener("change", function (e) {
    const orderData = sortByName(data, "name", e.target.value);
    rootFill.innerHTML = ""; // Utiliza rootFill en lugar de contenedor
    rootFill.appendChild(renderItems(orderData));
  });
  