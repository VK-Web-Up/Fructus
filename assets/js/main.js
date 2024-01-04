//  Содание объекта недвижимости, конкреной виллы или квартиры

class realEstateObject {
  constructor(
    id,
    name,
    img,
    city,
    bedrooms,
    square,
    sea,
    price,
    pricePlan,
    description,
    finishing,
    finishingEnd,
    dopinfo,
    show,
    map,
  ) {
    this.id = id; // 0
    this.name = name; // 1
    this.img = img; // 2
    this.city = city; // 3
    this.bedrooms = bedrooms; // 4
    this.square = square; // 5
    this.sea = sea; // 6
    this.price = price; // 7
    this.pricePlan = pricePlan; // 8
    this.description = description; // 9
    this.finishing = finishing; // 10
    this.finishingEnd = finishingEnd; // 11
    this.dopinfo = dopinfo; // 12
    this.show = show; // 13
    this.map = map; // 14
  }
}

// Создание списков недвижимости по типу, например, создание "Виллы" (свойство nameRealEstate) и массив с объектами (свойство realEstateObjects)

class RealEstate {
  constructor(nameRealEstate) {
    this.nameRealEstate = nameRealEstate;
    this.realEstateObjects = [];
    let villasTitle = document.getElementsByClassName("villas-title")[0];
    villasTitle.innerHTML = `<a class="villas-title-link" href="real-estate.html">${this.nameRealEstate}</a>`;
    // let btnAllVillas = document.getElementById("btn-all-villas");
    // btnAllVillas.innerHTML = `Посмотреть все ${this.nameRealEstate.toLowerCase()}`;
    return console.log(
      // `Был добавлен каталог недвижимости "${this.nameRealEstate}"`,
    );
  }

  addRealEstateObject(realEstateObject) {
    let SameObjectId = this.realEstateObjects.find(
      (Object) => Object["id"] === realEstateObject.id,
    );

    if (!SameObjectId || realEstateObject.id == 0) {
      this.realEstateObjects.push(realEstateObject);

      this.addCard(realEstateObject);

      return console.log(
        // `В каталог "${this.nameRealEstate}" добавлена новая недвижимость "${
        //   this.realEstateObjects[this.realEstateObjects.length - 1].name
        // }"`,
      );
    } else {
      return console.log(
        `Этот объект недвижимости уже был добавлен в список недвижимости "${this.nameRealEstate}"`,
      );
    }
  }

  findRealEstateObjectBy(key, value) {
    let findRealEstateObject = this.realEstateObjects.find(
      (Object) => Object[key] === value,
    );
    if (findRealEstateObject) {
      console.log(
        `По свойству "${key}", равному "${value}", найдена недвижимость "${findRealEstateObject.name}"`,
      );
      return findRealEstateObject;
    } else {
      return null;
    }
  }

  deleteRealEstateObjectById(objectId) {
    let userObject = this.findRealEstateObjectBy("id", objectId);
    if (userObject) {
      this.realEstateObjects.splice(
        this.realEstateObjects.indexOf(userObject),
        1,
      );
      console.log(
        `Объект недвижимости "${userObject.name}" c ID "${objectId}" был удален из каталога "${this.nameRealEstate}"`,
      );
      return userObject;
    } else {
      return null;
    }
  }

  addCard(realEstateObject) {
    let i = this.realEstateObjects.indexOf(realEstateObject);
    if (!this.nameRealEstate || this.realEstateObjects[i].show == 0) {
      // return console.log("Видимость на сайте добавляемой карточки скрыта или каталог недвижимости пуст");
    } else {

      let begin = "";
      let end = "";
      let strs = {};

      begin =
        `          <article class="card-large card-light card-item"  data-s-price="${villas.realEstateObjects[i].price}" data-s-sea="${villas.realEstateObjects[i].sea}" data-s-square="${villas.realEstateObjects[i].square}" data-s-finishing="${villas.realEstateObjects[i].finishing}">\n` +
        `            <div class="card-image">\n`;

      if (this.realEstateObjects[i].img == 0) {
        strs.img =
          // `              <button class="btn-img"><span id="btn-previous"><</span></button>\n` + 
          // `              <img class="villa-image" src="./assets/images/left-villa.png" alt="Изображение от frimufilms на Freepik"/>\n` + 
          `              <img class="villa-image" src="./assets/images/left-villa.png" alt="Изображение от frimufilms на Freepik"/>\n` + 
          // `              <img class="villa-image" src="./assets/images/left-villa.png" alt="Изображение от frimufilms на Freepik"/>\n` +
          // `              <button class="btn-img"><span id="btn-next">></span></button>\n` + 
          `            </div>\n`;
      } else {
        strs.img =
          `              <img class="villa-image" src="./assets/images/${villas.realEstateObjects[i].img}" alt="Недвижимость на Северном Кипре"/>\n` +
          `            </div>\n`;
      }

      if (villas.realEstateObjects[i].name == 0) {
        strs.name =
          `            <ul>\n` +
          `            <h3 class="villa-name">Вилла</h3>\n`;
      } else {
        strs.name =
          `            <ul>\n` +
          `            <h3 class="villa-name">${villas.realEstateObjects[i].name}</h3>\n`;
      }
      
      if (villas.realEstateObjects[i].city !== 0) {
        strs.city = `              <li><a href="#">Город: ${villas.realEstateObjects[i].city}</a></li>\n`;
      }

      if (villas.realEstateObjects[i].id !== 0) {
        strs.id = `              <li><a href="#">Номер объекта: ${villas.realEstateObjects[i].id}</a></li>\n`;
      }

      if (villas.realEstateObjects[i].bedrooms !== 0) {
        strs.bedrooms = `              <li><a href="#">Спален: ${villas.realEstateObjects[i].bedrooms}</a></li>\n`;
      }

      if (villas.realEstateObjects[i].square !== 0) {
        strs.square = `              <li><a href="#">Площадь: ${villas.realEstateObjects[i].square} м <sup class="degree">2</sup></a></li>\n`;
      }

      if (villas.realEstateObjects[i].sea !== 0) {
        strs.sea = `              <li><a href="#">${villas.realEstateObjects[i].sea} м до моря</a></li>\n`;
      }

      if (villas.realEstateObjects[i].finishing !== 0) {
        strs.finishing = `              <li><a href="#">Готовность: ${villas.realEstateObjects[i].finishing}</a></li>\n`;
      } else {
        strs.finishing = `              <li><a href="#">Готов</a></li>\n`;
        if (villas.realEstateObjects[i].finishingEnd !== 0) {
          strs.finishing = `              <li><a href="#">Год постройки: ${villas.realEstateObjects[i].finishingEnd}</a></li>\n`;
        }
      }

      if (villas.realEstateObjects[i].dopinfo !== 0) {
        strs.dopinfo = `              <li><a href="#">${villas.realEstateObjects[i].dopinfo}</a></li>\n`;
      }

      if (villas.realEstateObjects[i].description !== 0) {
        strs.description = `              <li><a href="#">${villas.realEstateObjects[i].description}</a></li>\n`;
      }

      if (villas.realEstateObjects[i].pricePlan !== 0) {
        strs.pricePlan = `              <li><a href="#"> План оплаты: ${villas.realEstateObjects[i].pricePlan}</a></li>\n`;
      }

      if (villas.realEstateObjects[i].map !== 0) {
        strs.map = `              <li class="map">\n                <iframe class="card-map" src="${villas.realEstateObjects[i].map}" width="95%" height="80%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><br>\n`;
      } else {
        strs.map = `              <li class="map">\n                <iframe class="card-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d589992.6454092537!2d32.87457113928227!3d35.224406974465715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de134c8dbd838b%3A0xea57cce4a86ef5eb!2z0JrQuNGA0LXQvdC40Y8!5e0!3m2!1sru!2sru!4v1702646944217!5m2!1sru!2sru" width="95%" height="80%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><br>\n`;
      }

      if (villas.realEstateObjects[i].price !== 0) {
        strs.price = `              <a href="#" id="price">£ ${villas.realEstateObjects[i].price}</a></li>\n`;
      }


      end =
        `              <button class="button btn-outline-light" style="padding: 0;">\n` +
        `                <label style="padding: 12px 24px;" for="form-card-request">Оставить заявку</label>\n` +
        `              </button>\n` +
        `            </ul>\n` +
        `          </article>\n`;

      let villasList = document.getElementsByClassName("villas-list")[0];
      return (villasList.innerHTML += begin + Object.values(strs).join("") + end);
    }
  }
}

