export const filteredData = (data, filterBy, value) => { 
  const filterWork = data.filter(function(value, data){
    if (value === "firstRange"){
      return data.facts[filterBy]<=2000000;
    }
    else if (value === "secondRange") {
      return (data.facts[filterBy]>2000000 && data.facts[filterBy]<=4000000)
    }
    else if (value === "thirdRange") {
      return (data.facts[filterBy]>4000000 && data.facts[filterBy]<=6000000)
    }
    else if (value === "fourthRange") {
      return (data.facts[filterBy]>6000000 && data.facts[filterBy]<=8000000)
    }
    else {
      return (data.facts[filterBy]>8000000 && data.facts[filterBy]<=10000000)
    }
  });

  return filterWork;
};

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

