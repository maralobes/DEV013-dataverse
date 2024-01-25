export const renderItems = (data) => {
  console.log(data)
  
      // Función para renderizar un lugar
     
        const workList = document.getElementById("placesList");

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
        
        // // item.id = data.id;
        // nameWork.innerHTML = `${data.name}`;
        // imageWork.innerHTML = data.imageUrl;
        // shortDescrWork.innerHTML= data.shortDescription;
        // descrWork.innerHTML = data.description;
  
        for (const [name,imageUrl,shortDescription,description] of Object.entries(data)) {
          
          const item = document.createElement("li");//dl

          const nameWork = document.createElement("h2");//dt
          nameWork.setAttribute("itemprop", "name");
          nameWork.innerHTML = name;
        
          const imageWork = document.createElement("img");//dt
          imageWork.setAttribute("itemprop", "image");
          imageWork.innerHTML = imageUrl;

          const shortDescrWork = document.createElement("p");//dt
          shortDescrWork.setAttribute("itemprop", "shortDescription");
          shortDescrWork.innerHTML= shortDescription;

          const descrWork = document.createElement("p");//dt
          descrWork.setAttribute("itemprop", "description");
          descrWork.innerHTML = description;
         
          workList.appendChild(item);
          item.appendChild(nameWork);
          item.appendChild(imageWork);
          item.appendChild(shortDescrWork);
          item.appendChild(descrWork);

        }
      
  
      console.log(data)
  return data.forEach(renderItems) ;
};
