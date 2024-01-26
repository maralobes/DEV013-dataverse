import dataset from "./data/dataset.js";

export const renderItems = (data) => {
  console.log(dataset);
     
        const ulList = document.getElementById("placesList");
          for (let i = 0; i< data.length; i ++){
          console.log(data[i]);
          const item = document.createElement("li");
          
          const idWork = document.createElement("dl");//dl
          idWork.setAttribute("itemscope", "");
          idWork.setAttribute("itemtype", "id");
          idWork.innerHTML = data[i].id;

          const nameWork = document.createElement("dt");//dt
          nameWork.setAttribute("itemprop", "name");
          nameWork.innerHTML = data[i].name;
        
          const imageWork = document.createElement("img");
          imageWork.setAttribute("src",data[i].imageUrl);
          imageWork.setAttribute("alt",data[i].name);
          imageWork.innerHTML = data[i].imageUrl;

          const shortDescrWork = document.createElement("dt");//dt
          shortDescrWork.setAttribute("itemprop", "shortDescription");
          shortDescrWork.innerHTML= data[i].shortDescription;

          const descrWork = document.createElement("dt");//dt
          descrWork.setAttribute("itemprop", "description");
          descrWork.innerHTML = data[i].description;
         
          
          item.appendChild(idWork);
          item.appendChild(nameWork);
          item.appendChild(imageWork);
          item.appendChild(shortDescrWork);
          item.appendChild(descrWork);
          ulList.appendChild(item);
        }

      console.log(data)
  return ulList;
};

renderItems(dataset);
