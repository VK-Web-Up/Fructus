document.querySelector(".search-field").oninput = function () {
  styleRealty.innerHTML = "";
  let searchValue = this.value.trim();
  let searchItems = document.querySelectorAll(".villas-list article");
  // console.log(searchValue);
  // console.log(searchItems);
  if (searchValue !== "") {
    searchItems.forEach(function (element) {
      if (element.innerText.search(searchValue) == -1) {
        element.classList.add('hide');
      } else {
        makeCardVisible(element);
      }
    });
  } else {
    searchItems.forEach(function (element) {
      makeCardVisible(element);
      styleRealty.innerHTML = styleBaze;
    });
  }
}

function makeCardVisible(element) {
  element.classList.remove('hide');
  element.classList.add("card-large","card-light","card-item");
  checkCounterZero(counter);
}