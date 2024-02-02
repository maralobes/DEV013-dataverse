export const renderItems = (data) => {
  const ulList = document.createElement("ul");
  ulList.classList.add("fList"); //le puse f de father list y al otro cList por child list
  // const workItems = document.create
  for (let i = 0; i < data.length; i++) {
    const item = document.createElement("li");
    item.classList.add("cList");

    const archiWork = document.createElement("dl");
    archiWork.setAttribute("itemscope", "");
    archiWork.setAttribute("itemtype", "items");

    const idWork = document.createElement("dt");
    idWork.innerHTML = "id:";
    const idText = document.createElement("dd");
    idText.setAttribute("itemprop", "id");
    idText.innerHTML = data[i].id;
    idWork.style.display = "none";
    idText.style.display = "none";

    const nameWork = document.createElement("dt");
    nameWork.innerHTML = "Nombre:";
    const nameText = document.createElement("dd");
    nameText.setAttribute("itemprop", "name");
    nameText.innerHTML = data[i].name;
    nameWork.style.display = "none";

    const imageWork = document.createElement("img");
    imageWork.setAttribute("src", data[i].imageUrl);
    imageWork.setAttribute("alt", data[i].name);
    imageWork.innerHTML = data[i].imageUrl;

    const shortDescrWork = document.createElement("dt");
    shortDescrWork.innerHTML = "Short description:";
    const shortText = document.createElement("dd");
    shortText.setAttribute("itemprop", "shortDescription");
    shortText.innerHTML = data[i].shortDescription;
    shortText.style.display = "none";
    shortDescrWork.style.display = "none";

    const descrWork = document.createElement("dt");
    descrWork.innerHTML = "Description:";
    const descText = document.createElement("dd");
    descText.setAttribute("itemprop", "description");
    descText.innerHTML = data[i].description;
    descText.style.display = "none";
    descrWork.style.display = "none";

    const factsWork = document.createElement("dl");
    factsWork.setAttribute("itemscope", "");
    factsWork.setAttribute("itemtype", "facts");

    const yearWork = document.createElement("dt");
    yearWork.innerHTML = "Year of built:";
    const yearText = document.createElement("dd");
    yearText.setAttribute("itemprop", "yearOfBuilt");
    yearText.innerHTML = data[i].facts.yearOfBuilt;
    yearText.style.display = "none";
    yearWork.style.display = "none";

    const stylerWork = document.createElement("dt");
    stylerWork.innerHTML = "Style:";
    const styleText = document.createElement("dd");
    styleText.setAttribute("itemprop", "style");
    styleText.innerHTML = data[i].facts.style;
    stylerWork.style.display = "none";

    const locationWork = document.createElement("dt");
    locationWork.innerHTML = "Location:";
    const locationText = document.createElement("dd");
    locationText.setAttribute("itemprop", "location");
    locationText.innerHTML = data[i].facts.location;
    locationWork.style.display = "none";

    const constructorWork = document.createElement("dt");
    constructorWork.innerHTML = "Constructor:";
    const constructorText = document.createElement("dd");
    constructorText.setAttribute("itemprop", "constructor");
    constructorText.innerHTML = data[i].facts.constructor;
    constructorText.style.display = "none";
    constructorWork.style.display = "none";

    const visitorsWork = document.createElement("dt");
    visitorsWork.innerHTML = "Annual visitors:";
    const visitorsText = document.createElement("dd");
    visitorsText.setAttribute("itemprop", "annualVisitors");
    visitorsText.innerHTML = data[i].facts.annualVisitors;
    visitorsText.style.display = "none";
    visitorsWork.style.display = "none";

    const wonderWork = document.createElement("dt");
    wonderWork.innerHTML = "Wonder of the World:";
    const wonderText = document.createElement("dd");
    wonderText.setAttribute("itemprop", "IsWonderOfTheWorld");
    wonderText.innerHTML = data[i].facts.isWonderOfTheWorld;
    wonderText.style.display = "none";
    wonderWork.style.display = "none";

    ulList.appendChild(item);
    item.appendChild(archiWork);
    archiWork.append(
      idWork,
      idText,
      imageWork,
      nameWork,
      nameText,
      shortDescrWork,
      shortText,
      descrWork,
      descText,
      factsWork
    );
    factsWork.append(
      yearWork,
      yearText,
      stylerWork,
      styleText,
      locationWork,
      locationText,
      constructorWork,
      constructorText,
      visitorsWork,
      visitorsText,
      wonderWork,
      wonderText
    );
    // imageWork.addEventListener("click", function () {
    //   nameText.style.display = "block";
    //   nameWork.style.display = "block";
    //   shortText.style.display = "block";
    //   shortDescrWork.style.display = "block";
    //   descText.style.display = "block";
    //   descrWork.style.display = "block";
    //   factsWork.style.display = "block";

    //   // imageWork.style.display = "block";
    //   // factsWork.style.display = "block";
    // });



    imageWork.addEventListener("click", function openPopup() {
      const popupDiv = document.createElement("div");
      popupDiv.className = "popup";
      popupDiv.style.display = "inline-flex";
      popupDiv.style.backgroundColor = "#ffffff";
      popupDiv.style.marginLeft = "300px";
      popupDiv.style.marginRight = "300px";
      popupDiv.style.borderRadius = "100px";
  
      const imagePop = document.createElement("img");
      imagePop.src = data[i].imageUrl;
      imagePop.id = "imagePop";
      // imagePop.style.display = "inline";
      // imagePop.style.margin = "0 auto";
      // imagePop.style.marginBlockStart = "10%";
      imagePop.style.width = "350px";
      imagePop.style.height = "350px";
      imagePop.style.paddingInlineStart = "30px";
      imagePop.style.paddingBlockStart = "50px";
      // imagePop.style.borderRadius = "20px";

      const popupContainerDiv = document.createElement("div");
      popupContainerDiv.className = "popup-container";
      popupContainerDiv.style.display = "block";
      // popupContainerDiv.style.marginTop = "10%";
      popupContainerDiv.style.marginBottom = "10%";
      popupContainerDiv.style.padding = "20px";
      popupContainerDiv.style.alignContent = "flex-start";
      popupContainerDiv.style.fontSize = "14px"
      popupContainerDiv.style.color = "black";
      popupContainerDiv.style.display = "block";

      const namePop = document.createElement("p");
      namePop.innerHTML = `<b>Name:</b> ${data[i].name}`;
      namePop.style.margin = "7px";
      // namePop.style.paddingLeft = "100px";
      // namePop.style.alignContent = "flex-start";
      // namePop.style.fontSize = "24px"
      namePop.style.color = "black";
      // namePop.style.display = "inline";

      const shortDescPop = document.createElement("p");
      shortDescPop.innerHTML = "<b>Short description:</b>" + data[i].shortDescription;
      // // shortDescPop.id = "shortDescPop";
      shortDescPop.style.margin = "7px";
      // shortDescPop.style.paddingLeft = "100px";
      // shortDescPop.style.alignContent = "flex-start";
      // shortDescPop.style.display = "block";
      // // shortDescPop.style.fontSize = "22px"
      shortDescPop.style.color = "black";
    
      const descrPop = document.createElement("p");
      descrPop.innerHTML = "<b>Description:</b>" + data[i].description;
      // descrPop.id = "descPop";
      descrPop.style.margin = "7px";
      // descrPop.style.paddingLeft = "100px";
      // descrPop.style.paddingRight = "100px";
      // descrPop.style.alignContent = "flex-start";
      // // descrPop.style.fontSize = "22px"
      descrPop.style.color = "black";
      // descrPop.style.textAlign = "justify";
  
      const yearPop = document.createElement("p");
      yearPop.innerHTML = "<b>Year of built:</b>" + data[i].facts.yearOfBuilt;
      // yearPop.id = "yearPop";
      yearPop.style.margin = "7px";
      // yearPop.style.paddingLeft = "100px";
      // yearPop.style.alignContent = "flex-start";
      // // yearPop.style.fontSize = "22px"
      yearPop.style.color = "black";
  
      const stylePop = document.createElement("p");
      stylePop.innerHTML = "<b>Style:</b>" + data[i].facts.style;
      // stylePop.id = "stylePop";
      stylePop.style.margin = "7px";
      // stylePop.style.paddingLeft = "100px";
      // stylePop.style.alignContent = "flex-start";
      // // stylePop.style.fontSize = "22px"
      stylePop.style.color = "black";
  
      const locationPop = document.createElement("p");
      locationPop.innerHTML = "<b>Location:</b>" + data[i].facts.location;
      // locationPop.id = "locationPop";
      locationPop.style.margin = "7px";
      // locationPop.style.paddingLeft = "100px";
      // locationPop.style.alignContent = "flex-start";
      // // locationPop.style.fontSize = "22px"
      locationPop.style.color = "black";
  
      const constructorPop = document.createElement("p");
      constructorPop.innerHTML = "<b>Constructor:</b>" + data[i].facts.constructor;
      // constructorPop.id = "constructorPop";
      constructorPop.style.margin = "7px";
      // constructorPop.style.paddingLeft = "100px";
      // constructorPop.style.alignContent = "flex-start";
      // // constructorPop.style.fontSize = "22px"
      constructorPop.style.color = "black";
  
      const visitorsPop = document.createElement("p");
      visitorsPop.innerHTML = "<b>Visitors:</b>" + data[i].facts.annualVisitors;
      // visitorsPop.id = "visitorsPop";
      visitorsPop.style.margin = "7px";
      // visitorsPop.style.paddingLeft = "100px";
      // visitorsPop.style.alignContent = "flex-start";
      // // visitorsPop.style.fontSize = "22px"
      visitorsPop.style.color = "black";
  
      const wonderPop = document.createElement("p");
      wonderPop.innerHTML = "<b>Wonder of the world:</b>" + data[i].facts.isWonderOfTheWorld;
      // wonderPop.id = "wonderPop";
      wonderPop.style.margin = "7px";
      // wonderPop.style.paddingLeft = "100px";
      // wonderPop.style.alignContent = "flex-start";
      // // wonderPop.style.fontSize = "22px"
      wonderPop.style.color = "black";

      // const buttonPopup = document.createElement("button");
      // buttonPopup.classList.add("closePopup");
      // buttonPopup,
      const root = document.getElementById("root");
      popupDiv.append(imagePop,popupContainerDiv)
      popupContainerDiv.append(namePop,shortDescPop,descrPop,yearPop,stylePop,locationPop,constructorPop,visitorsPop,wonderPop);

      root.append(popupDiv);
      // buttonPopup.addEventListener("click", function closePopup(){
      //   popupDiv.parentNode.removeChild(popupDiv);
      // })
      popupDiv.addEventListener('click', function closePopup() {
      root.removeChild(popupDiv);
      });

    });


  }

  return ulList;
};
