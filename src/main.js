import { filteredData } from "./dataFunctions.js";
import { sortByName } from "./dataFunctions.js";
import { computeStats} from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

const rootFill = document.getElementById("root");
rootFill.appendChild(renderItems(data));

const selectFilter = document.querySelector(
  'select[data-testid="select-filter"]'
);
selectFilter.addEventListener("change", function (event) {
  const filterAnnualVisitors = filteredData(data,"annualVisitors",event.target.value);
  rootFill.innerHTML = "";
  rootFill.appendChild(renderItems(filterAnnualVisitors));

  const selectSort = document.querySelector('select[data-testid="select-sort"]');
  selectSort.addEventListener("change", function (event) {
    const orderData = sortByName(filterAnnualVisitors,"name",event.target.value);
    rootFill.innerHTML = "";
    rootFill.appendChild(renderItems(orderData));
  });
});

const selectSort = document.querySelector('select[data-testid="select-sort"]');
selectSort.addEventListener("change", function (event) {
  const orderData = sortByName(data, "name", event.target.value);
  rootFill.innerHTML = "";
  rootFill.appendChild(renderItems(orderData));
});

const buttonStats = document.getElementById("statistics");
buttonStats.addEventListener("click", function popupStats(){
  const stats = computeStats(data);
  const popupStatsWonder = document.createElement("div");
  popupStatsWonder.className = "popStats";
  popupStatsWonder.innerHTML = `Average of people who visit the wonders of the world: <b>${stats}</b>`;
  const buttonCloseStats = document.createElement("button");
  buttonCloseStats.className = "buttonCloseStats";
  popupStatsWonder.append(buttonCloseStats);
  rootFill.append(popupStatsWonder);
  buttonCloseStats.addEventListener('click', function closePopStats() {
  rootFill.removeChild(popupStatsWonder);

 });
});

const buttonClear = document.querySelector('button[data-testid="button-clear"]');
buttonClear.addEventListener("click", function clear() {
  selectFilter.selectedIndex = 0;
  selectSort.selectedIndex = 0;
  rootFill.innerHTML = "";

  rootFill.appendChild(renderItems(data));
});
