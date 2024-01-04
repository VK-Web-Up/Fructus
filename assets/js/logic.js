// document.querySelector("#all").onclick = function(){
//   let allItems = document.querySelectorAll(".villas-list article");
//   allItems.forEach(function (element) {
//       element.classList.remove("hide");
//       element.classList.add("card-large","card-light","card-item");
//   });
// }

document.querySelector("#sea-side").onclick = function(){
  mySort("data-s-sea");
  mySort("data-s-sea");
}

document.querySelector("#cheaper").onclick = function(){
  mySort("data-s-price");
  mySort("data-s-price");
}

document.querySelector("#expensive").onclick = function(){
  mySortExp("data-s-price");
  mySortExp("data-s-price");
}

document.querySelector("#square").onclick = function(){
  mySort("data-s-square");
  mySort("data-s-square");
}

document.querySelector("#squareMore").onclick = function(){
  mySortExp("data-s-square");
  mySortExp("data-s-square");
}

// document.querySelector("#finishing").onclick = function(){
//   mySortFinish("data-s-finishing");
// }

villasList = document.getElementsByClassName("villas-list")[0];

function mySort(sortType) {
  console.log(sortType);
  villasListId = document.querySelectorAll("#villas-list")[0];
  for (let i = 0; i < villasListId.children.length; i++) {
    for (let j = i; j < villasListId.children.length; j++) {
      if (Number(villasListId.children[i].getAttribute(sortType)) > Number(villasListId.children[j].getAttribute(sortType))) {
        let replacedNode = villasListId.replaceChild(villasListId.children[j],villasListId.children[i]);
        villasList.appendChild(replacedNode);
      }
    }
  }
}

function mySortExp(sortType) { 
  villasListId = document.querySelectorAll("#villas-list")[0];
  for (let i = 0; i < villasListId.children.length; i++) {
    for (let j = i; j < villasListId.children.length; j++) {
      if (Number(villasListId.children[i].getAttribute(sortType)) < Number(villasListId.children[j].getAttribute(sortType))) {
        let replacedNode = villasListId.replaceChild(villasListId.children[j],villasListId.children[i]);
        villasList.appendChild(replacedNode);
      }
    }
  }
}

// function mySortFinish(sortType) { 
//   villasListId = document.querySelectorAll("#villas-list")[0];
//   for (let i = 0; i < villasListId.children.length; i++) {
//     if (villasListId.children[i].getAttribute(sortType) != 0) {
//       villasListId.children[i].setAttribute("class", "hide");
//     }
//   }
// }

let styleRealty = document.createElement("style");
styleRealty.className = "styleRealty";
let styleZero = "";
let styleIndex = ".card-item:nth-child(n+5) {display: none;}";
let styleBaze = ".card-item:nth-child(n+9) {display: none;}";
let invisiblePrivious = `.btn-all-villas-previous {display: none;} .btn-all-villas-next {margin-left: auto;}`
document.body.append(styleRealty);

styleRealty.innerHTML = styleIndex;
