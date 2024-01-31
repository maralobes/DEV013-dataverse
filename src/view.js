export const renderItems = (data) => {
  const ulList = document.createElement("ul");
  ulList.classList.add("fList"); //le puse f de father list y al otro cList por child list
  const workItems = document.create
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
    nameText.style.display = "none";
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
    factsWork.style.display = "none";

    const yearWork = document.createElement("dt");
    yearWork.innerHTML = "Year of built:";
    const yearText = document.createElement("dd");
    yearText.setAttribute("itemprop", "yearOfBuilt");
    yearText.innerHTML = data[i].facts.yearOfBuilt;

    const stylerWork = document.createElement("dt");
    stylerWork.innerHTML = "Style:";
    const styleText = document.createElement("dd");
    styleText.setAttribute("itemprop", "style");
    styleText.innerHTML = data[i].facts.style;

    const locationWork = document.createElement("dt");
    locationWork.innerHTML = "Location:";
    const locationText = document.createElement("dd");
    locationText.setAttribute("itemprop", "location");
    locationText.innerHTML = data[i].facts.location;

    const constructorWork = document.createElement("dt");
    constructorWork.innerHTML = "Constructor:";
    const constructorText = document.createElement("dd");
    constructorText.setAttribute("itemprop", "constructor");
    constructorText.innerHTML = data[i].facts.constructor;

    const visitorsWork = document.createElement("dt");
    visitorsWork.innerHTML = "Annual visitors:";
    const visitorsText = document.createElement("dd");
    visitorsText.setAttribute("itemprop", "annualVisitors");
    visitorsText.innerHTML = data[i].facts.annualVisitors;

    const wonderWork = document.createElement("dt");
    wonderWork.innerHTML = "Wonder of the World:";
    const wonderText = document.createElement("dd");
    wonderText.setAttribute("itemprop", "IsWonderOfTheWorld");
    wonderText.innerHTML = data[i].facts.isWonderOfTheWorld;

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
      popupDiv.id = "popup";
  
      const imagePop = document.createElement("img");
      imagePop.src = data[i].imageUrl;
      imagePop.id = "imagePop";
      popupDiv.style.display = "block";

      const namePop = document.createElement("dt");
      namePop.innerHTML = "Nombre:" + data[i].name;
      // `url(${data[i].name})`
      namePop.id = "namePop";

  
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
      factsWork.style.display = "none";
  
      const yearWork = document.createElement("dt");
      yearWork.innerHTML = "Year of built:";
      const yearText = document.createElement("dd");
      yearText.setAttribute("itemprop", "yearOfBuilt");
      yearText.innerHTML = data[i].facts.yearOfBuilt;
  
      const stylerWork = document.createElement("dt");
      stylerWork.innerHTML = "Style:";
      const styleText = document.createElement("dd");
      styleText.setAttribute("itemprop", "style");
      styleText.innerHTML = data[i].facts.style;
  
      const locationWork = document.createElement("dt");
      locationWork.innerHTML = "Location:";
      const locationText = document.createElement("dd");
      locationText.setAttribute("itemprop", "location");
      locationText.innerHTML = data[i].facts.location;
  
      const constructorWork = document.createElement("dt");
      constructorWork.innerHTML = "Constructor:";
      const constructorText = document.createElement("dd");
      constructorText.setAttribute("itemprop", "constructor");
      constructorText.innerHTML = data[i].facts.constructor;
  
      const visitorsWork = document.createElement("dt");
      visitorsWork.innerHTML = "Annual visitors:";
      const visitorsText = document.createElement("dd");
      visitorsText.setAttribute("itemprop", "annualVisitors");
      visitorsText.innerHTML = data[i].facts.annualVisitors;
  
      const wonderWork = document.createElement("dt");
      wonderWork.innerHTML = "Wonder of the World:";
      const wonderText = document.createElement("dd");
      wonderText.setAttribute("itemprop", "IsWonderOfTheWorld");
      wonderText.innerHTML = data[i].facts.isWonderOfTheWorld;



      popupDiv.appendChild(imagePop);
      ulList.append(popupDiv);
    });


    // return popupDiv;
  }

  return ulList;
};
