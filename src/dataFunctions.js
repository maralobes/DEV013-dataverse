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