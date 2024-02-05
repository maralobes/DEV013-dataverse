import { filteredData } from "./dataFunctions.js";
import { sortByName } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

const rootFill = document.getElementById("root");
rootFill.appendChild(renderItems(data));

const selectSort = document.querySelector('select[data-testid="select-sort"]');
selectSort.addEventListener("change", function (event) {
  const orderData = sortByName(data, "name", event.target.value);
  rootFill.innerHTML = "";
  rootFill.appendChild(renderItems(orderData));
});

const filterBy = document.querySelector('select[data-testid="select-filter"]]');
filterBy.appendChild()
