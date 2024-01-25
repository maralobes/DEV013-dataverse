import dataset from "./data/dataset";

export const renderItems = (data) => {
  console.log(data)
     
        const ulList = document.getElementById("placesList");

        // const item = document.createElement("li");//dl
        // const nameWork = document.createElement("h2");//dt
        // const imageWork = document.createElement("img");//dt
        // const shortDescrWork = document.createElement("p");//dt
        // const descrWork = document.createElement("p");//dt
        
        // item.setAttribute("itemscope", "");
        // item.setAttribute("itemtype", "name");
        // item.setAttribute("class", "place" );
        // nameWork.setAttribute("itemprop", "name");
        // imageWork.setAttribute("itemprop", "image");
        // shortDescrWork.setAttribute("itemprop", "shortDescription");
        // descrWork.setAttribute("itemprop", "description");
        

        // nameWork.innerHTML = `${data.name}`;
        // imageWork.innerHTML = data.imageUrl;
        // shortDescrWork.innerHTML= data.shortDescription;
        // descrWork.innerHTML = data.description;
  
        // for (let [dataName,] of Object.entries(data)) {
          for (let i = 0; i<data.length; i ++){
          
          const item = document.createElement("li");
          
          const idWork = document.createElement("dl");//dl
          idWork.setAttribute("itemscope", "");
          idWork.setAttribute("itemtype", "name");
          idWork.innerHTML = data.id

          const nameWork = document.createElement("dt");//dt
          nameWork.setAttribute("itemprop", "name");
          nameWork.innerHTML = data.name;
        
          const imageWork = document.createElement("dt");//dt
          imageWork.setAttribute("itemprop", "image");
          imageWork.innerHTML = data.imageUrl;

          const shortDescrWork = document.createElement("dt");//dt
          shortDescrWork.setAttribute("itemprop", "shortDescription");
          shortDescrWork.innerHTML= data.shortDescription;

          const descrWork = document.createElement("dt");//dt
          descrWork.setAttribute("itemprop", "description");
          descrWork.innerHTML = data.description;
         
     
          item.appendChild(idWork);
          item.appendChild(nameWork);
          item.appendChild(imageWork);
          item.appendChild(shortDescrWork);
          item.appendChild(descrWork);

        }
        ulList.appendChild(item);
      
  
      console.log(data)
  return dataset.forEach(renderItems) ;
};
