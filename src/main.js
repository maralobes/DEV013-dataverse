import { filteredData } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

const rootFill = document.getElementById("root");
rootFill.appendChild(renderItems(data));

const filterBy = document.querySelector('select[data-testid="select-filter"]]');
filterBy.appendChild()
