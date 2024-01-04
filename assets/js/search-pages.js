document.querySelector(".search-field").oninput = function () {
    let searchValue = this.value.trim();
    console.log(searchValue);
    console.log(searchItems);
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
      });
    }
  }
  
  function makeCardVisible(element) {
    element.classList.remove('hide');
  }