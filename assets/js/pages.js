// let styleRealty = document.createElement("style");
// styleRealty.className = "styleRealty";
// let styleZero = "";
// let styleIndex = ".card-item:nth-child(n+5) {display: none;}";
// let styleBaze = ".card-item:nth-child(n+9) {display: none;}";
// document.body.append(styleRealty);

let btnNext = document.getElementById("btn-all-villas-next");
let btnPrevious = document.getElementById("btn-all-villas-previous");
let counter = 0;
// let invisiblePrivious = `.btn-all-villas-previous {display: none;} .btn-all-villas-next {margin-left: auto;}`

styleRealty.innerHTML = styleBaze + invisiblePrivious;

function addHtml(counter) {
  styleRealty.innerHTML = `.card-item:nth-child(-n+${counter*8}), .card-item:nth-child(n+${(counter*8) + 9}){display: none;}`
}

btnNext.addEventListener("click", function (event) {
  counter++;
  event.preventDefault();
  addHtml(counter);
});

function checkCounterZero(counter) {
  if (counter == 0) {
    styleRealty.innerHTML += invisiblePrivious;
  }
}

btnPrevious.addEventListener("click", function (event) {
  event.preventDefault();
  checkCounterZero(counter);
  if (counter == 1) {
    counter = 0;
    styleRealty.innerHTML = styleBaze;
  }
  if (counter >= 2) {
    counter--;
    addHtml(counter);
  }
  checkCounterZero(counter);
});

// let btnAll = document.getElementById("all");
// btnAll.addEventListener("click", function (event) {
//   event.preventDefault();
//   styleRealty.innerHTML = styleZero;
// });

