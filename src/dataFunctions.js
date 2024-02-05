export const sortByName = (data, sortBy, sortOrder) => {
  const sortWork = data.slice();

  sortWork.sort((a, b) => {
    const nameA = a[sortBy].toLowerCase();
    const nameB = b[sortBy].toLowerCase();

    if (sortOrder === "asc") {
      return nameA.localeCompare(nameB);
    } else {
      return nameB.localeCompare(nameA);
    }
  });

  return sortWork;
};
/*export const dataFiltered = (data, filterBy, value) => {
  const range = 0;
  const filterByAnnualVisitors = data.filterBy(function(data){
    if(range >= 0 && range <= 2000000){
      return 
  })
  return 'dataFiltered';
};*/

export const filteredData = (data, filterBy, value) => {
  const filterByAnnualVisitors= data.filterBy( value => value.facts.annualVisitors <="2000000" )
  console.log(filterByAnnualVisitors);
}
