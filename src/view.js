export const renderItems = (data) => {
  const ulList = document.createElement("ul");
  ulList.classList.add("fList");
  
  data.forEach(item => {
    const listItem = document.createElement("li");
    listItem.classList.add("cList");
    listItem.setAttribute("itemscope", "");
    listItem.setAttribute("itemtype", "architectonics-works");

    const archiWork = document.createElement("dl");
    archiWork.setAttribute("itemscope", "");
    archiWork.setAttribute("itemtype", "items");

    const idWork = document.createElement("dt");
    idWork.innerHTML = "id:";
    const idText = document.createElement("dd");
    idText.setAttribute("itemprop", "id");
    idText.innerHTML =item.id;
    idWork.style.display = "none";
    idText.style.display = "none";

    const nameWork = document.createElement("dt");
    nameWork.innerHTML = "Nombre:";
    const nameText = document.createElement("dd");
    nameText.setAttribute("itemprop", "name");
    nameText.innerHTML = item.name;
    nameWork.style.display = "none";

    const imageWork = document.createElement("img");
    imageWork.setAttribute("src", item.imageUrl);
    imageWork.setAttribute("alt", item.name);
    imageWork.innerHTML = item.imageUrl;

    const shortDescrWork = document.createElement("dt");
    shortDescrWork.innerHTML = "Short description:";
    const shortText = document.createElement("dd");
    shortText.setAttribute("itemprop", "shortDescription");
    shortText.innerHTML = item.shortDescription;
    shortText.style.display = "none";
    shortDescrWork.style.display = "none";

    const descrWork = document.createElement("dt");
    descrWork.innerHTML = "Description:";
    const descText = document.createElement("dd");
    descText.setAttribute("itemprop", "description");
    descText.innerHTML = item.description;
    descText.style.display = "none";
    descrWork.style.display = "none";

    const factsWork = document.createElement("dl");
    factsWork.setAttribute("itemscope", "");
    factsWork.setAttribute("itemtype", "facts");

    const yearWork = document.createElement("dt");
    yearWork.innerHTML = "Year of built:";
    const yearText = document.createElement("dd");
    yearText.setAttribute("itemprop", "yearOfBuilt");
    yearText.innerHTML = item.facts.yearOfBuilt;
    yearText.style.display = "none";
    yearWork.style.display = "none";

    const stylerWork = document.createElement("dt");
    stylerWork.innerHTML = "Style:";
    const styleText = document.createElement("dd");
    styleText.setAttribute("itemprop", "style");
    styleText.innerHTML = item.facts.style;
    stylerWork.style.display = "none";
    styleText.style.display = "none";

    const locationWork = document.createElement("dt");
    locationWork.innerHTML = "Location:";
    const locationText = document.createElement("dd");
    locationText.setAttribute("itemprop", "location");
    locationText.innerHTML = item.facts.location;
    locationWork.style.display = "none";

    const constructorWork = document.createElement("dt");
    constructorWork.innerHTML = "Constructor:";
    const constructorText = document.createElement("dd");
    constructorText.setAttribute("itemprop", "constructor");
    constructorText.innerHTML = item.facts.constructor;
    constructorText.style.display = "none";
    constructorWork.style.display = "none";

    const visitorsWork = document.createElement("dt");
    visitorsWork.innerHTML = "Annual visitors:";
    const visitorsText = document.createElement("dd");
    visitorsText.setAttribute("itemprop", "annualVisitors");
    visitorsText.innerHTML = "Annual visitors: " + item.facts.annualVisitors;
    // visitorsText.style.display = "none";
    visitorsWork.style.display = "none";

    const wonderWork = document.createElement("dt");
    wonderWork.innerHTML = "Wonder of the World:";
    const wonderText = document.createElement("dd");
    wonderText.setAttribute("itemprop", "IsWonderOfTheWorld");
    wonderText.innerHTML = item.facts.isWonderOfTheWorld;
    wonderText.style.display = "none";
    wonderWork.style.display = "none";

    ulList.appendChild(listItem);
    listItem.appendChild(archiWork);
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
    imageWork.addEventListener("click", function openPopup() {
      const popupDiv = document.createElement("div");
      popupDiv.className = "popup";
      popupDiv.style.display = "inline-flex";
      popupDiv.style.backgroundColor = "#ffffff";
      popupDiv.style.marginLeft = "15%";
      popupDiv.style.marginRight = "15%";
      popupDiv.style.borderRadius = "100px";
      popupDiv.style.width = "fit-content";
      popupDiv.style.height = "fit-content";
      popupDiv.style.top = "5%";
      popupDiv.style.bottom = "5%";
  
      const imagePop = document.createElement("img");
      imagePop.src = item.imageUrl;
      imagePop.id = "imagePop";
      imagePop.style.width = "50%";
      imagePop.style.height = "50%";
      imagePop.style.borderRadius = "50px"
      // imagePop.style.paddingInlineStart = "30px";
      imagePop.style.marginTop = "4%";

      const popupContainerDiv = document.createElement("div");
      popupContainerDiv.className = "popup-container";
      popupContainerDiv.style.display = "block";
      // popupContainerDiv.style.marginBottom = "10%";
      popupContainerDiv.style.paddingLeft = "4%";
      popupContainerDiv.style.alignContent = "flex-start";
      popupContainerDiv.style.fontSize = "14px"
      popupContainerDiv.style.color = "black";
      popupContainerDiv.style.display = "block";
      popupContainerDiv.style.width = "fit-content";

      const namePop = document.createElement("p");
      namePop.innerHTML = `<b>Name:</b> ${item.name}`;
      namePop.style.margin = "7px";
      namePop.style.color = "black";

      const shortDescPop = document.createElement("p");
      shortDescPop.innerHTML = "<b>Short description: </b>" + item.shortDescription;
      shortDescPop.style.margin = "7px";
      shortDescPop.style.color = "black";
    
      const descrPop = document.createElement("p");
      descrPop.innerHTML = "<b>Description: </b>" + item.description;
      descrPop.style.margin = "7px";
      descrPop.style.color = "black";
  
      const yearPop = document.createElement("p");
      yearPop.innerHTML = "<b>Year of built: </b>" + item.facts.yearOfBuilt;
      yearPop.style.margin = "7px";
      yearPop.style.color = "black";
  
      const stylePop = document.createElement("p");
      stylePop.innerHTML = "<b>Style: </b>" + item.facts.style;
      stylePop.style.margin = "7px";
      stylePop.style.color = "black";
  
      const locationPop = document.createElement("p");
      locationPop.innerHTML = "<b>Location: </b>" + item.facts.location;
      locationPop.style.margin = "7px";
      locationPop.style.color = "black";
  
      const constructorPop = document.createElement("p");
      constructorPop.innerHTML = "<b>Constructor: </b>" + item.facts.constructor;
      constructorPop.style.margin = "7px";
      constructorPop.style.color = "black";
  
      const visitorsPop = document.createElement("p");
      visitorsPop.innerHTML = "<b>Visitors: </b>" + item.facts.annualVisitors;
      visitorsPop.style.margin = "7px";
      visitorsPop.style.color = "black";
  
      const wonderPop = document.createElement("p");
      wonderPop.innerHTML = "<b>Wonder of the world: </b>" + item.facts.isWonderOfTheWorld;
      wonderPop.style.margin = "7px";
      wonderPop.style.color = "black";

      const root = document.getElementById("root");
      popupDiv.append(imagePop,popupContainerDiv)
      popupContainerDiv.append(namePop,shortDescPop,descrPop,yearPop,stylePop,locationPop,constructorPop,visitorsPop,wonderPop);

      root.append(popupDiv);
      popupDiv.addEventListener('click', function closePopup() {
      root.removeChild(popupDiv);
      });
    });
  });
  return ulList;
};