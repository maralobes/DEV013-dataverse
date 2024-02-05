// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const example = () => {
  return 'example';
};

export const sortByName = (data, sortBy, sortOrder) => {

    const workOrder = data.toSorted((a,b) => {
      if(sortOrder === 'asc'){    
        if(a[sortBy] === b[sortBy]){
          return 0;
        }
        if(a[sortBy]< b[sortBy]){
          return -1;
        }
        return 1;
      }
      else {
        if(a[sortBy] === b[sortBy]){
          return 0;
        }
        if (a[sortBy] > b[sortBy]){
          return -1;
        }
        return 1;
      } 
    });
    return workOrder;
};

