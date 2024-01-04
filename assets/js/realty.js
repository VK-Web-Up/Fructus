// Проверка кода

// Добавление каталога и объектов нежвижимости

const villas = new RealEstate("Виллы");
villas.addRealEstateObject(
  new realEstateObject(
    "1", // id
    'Роскошный таунхаус 160м<sup class="degree">2</sup> у моря', // name
    0, // img
    "Беллапаис", // city
    "2", // bedrooms
    "160", // square
    "300", // sea
    "277700", // price
    "100% оплата", // pricePlan
    0, // description
    0, // finishing
    0, // finishingEnd
    "Мебель и бытовая техника входят в стоимость", // dopinfo
    1, // show
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52100.02336289019!2d33.306032064979796!3d35.299732814169865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de14a139981415%3A0xda9ed9f517b92983!2z0JHQtdC70LvQsNC_0LDQuNGB!5e0!3m2!1sru!2sru!4v1704371762779!5m2!1sru!2sru" // map
  ),
);
villas.addRealEstateObject(
  new realEstateObject(
    "2", // id
    '3-x комнатный таунхаус 184 м<sup class="degree">2</sup> в современном стиле', // name
    "left-villa.png", // img
    "Боаз", // city
    "3", // bedrooms
    "184", // square
    "700", // sea
    "307770", // price
    0, // pricePlan
    0, // description
    0, // finishing
    0, // finishingEnd
    0, // dopinfo
    1, // show
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87633.3178792754!2d33.8648082400031!3d35.288766871639865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dfaf982a5ba9e7%3A0x761b987708e7d624!2zQm_En2F6!5e0!3m2!1sru!2sru!4v1704372136355!5m2!1sru!2sru"  // map
  ),
);
villas.addRealEstateObject(
  new realEstateObject(
    "3", // id
    'Красивая вилла 250 м<sup class="degree">2</sup>',  // name
    0, // img
    "Караоланаолу", // city
    "2", // bedrooms
    "250", // square
    "1400", // sea
    "287770", // price
    "Рассрочка 30%", // pricePlan
    0, // description
    "Апрель 2024", // finishing
    0, // finishingEnd
    0, // dopinfo
    1, // show
    0 // map
  ),
);
villas.addRealEstateObject(
  new realEstateObject(
    "4", // id
    'Современный таунхаус 170 м<sup class="degree">2</sup>', // name
    "left-villa.png", // img
    0, // city
    0, // bedrooms
    170, // square
    1200, // sea
    ' 247770', // price
    "100% оплата", // pricePlan
    0, // description
    0,  // finishing
    '2022', // finishingEnd
    0, // dopinfo
    1, // show
    0 // map
  ),
);
villas.addRealEstateObject(
  new realEstateObject("5", "Тест", 0,"Каршияка", 1, 100, 200, 100,
  "Рассрочка на 2 года", 0, 0, 0, 0, 1, "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99917.17049258889!2d27.044585882234767!3d38.501217632313775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd6118e58a90d%3A0x73d8c794b58655c2!2z0JrQsNGA0YjQuNGP0LrQsC_QmNC30LzQuNGALCDQotGD0YDRhtC40Y8!5e0!3m2!1sru!2sru!4v1704372915971!5m2!1sru!2sru"),
);

// Дополнительные объекты

villas.addRealEstateObject(
  new realEstateObject(
    "6",
    'Прибрежная вилла 150м<sup class="degree">2</sup>',
    "left-villa.png",
    "Боаз",
    "1",
    "150",
    "250",
    "350000",
    "Рассрочка 30%",
    0,
    0,
    0,
    "Мебель и бытовая техника входят в стоимость",
    1,
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87633.3178792754!2d33.8648082400031!3d35.288766871639865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dfaf982a5ba9e7%3A0x761b987708e7d624!2zQm_En2F6!5e0!3m2!1sru!2sru!4v1704372136355!5m2!1sru!2sru",
  ),
);

villas.addRealEstateObject(
  new realEstateObject(
    "7",
    'Tаунхаус 350м<sup class="degree">2</sup> на берегу',
    "left-villa.png",
    0,
    "3",
    "350",
    "250",
    "400000",
    "Рассрочка 30%",
    0,
    0,
    0,
    0,
    1,
    0
  ),
);

villas.addRealEstateObject(
  new realEstateObject(
    "8",
    'Tаунхаус 100м<sup class="degree">2</sup>',
    "left-villa.png",
    0,
    "1",
    "100",
    "1500",
    "120000",
    "Рассрочка 30%",
    0,
    0,
    0,
    "Мебель и бытовая техника входят в стоимость",
    1,
    0
  ),
);

villas.addRealEstateObject(
  new realEstateObject(
    "9",
    'Роскошный таунхаус 160м<sup class="degree">2</sup> у моря',
    "left-villa.png",
    0,
    "2",
    "160",
    "300",
    "277700",   
    "Рассрочка 30%",
    0,
    0,
    0,
    "Мебель и бытовая техника входят в стоимость",
    1,
    0
  ),
);
villas.addRealEstateObject(
  new realEstateObject(
    "10",
    '3-x комнатный таунхаус 184 м<sup class="degree">2</sup> в современном стиле',
    "left-villa.png",
    0,
    "3",
    "184",
    "700",
    "307770",
    "Рассрочка 30%",
    0,
    0,
    0,
    0,
    1,
    0
  ),
);
villas.addRealEstateObject(
  new realEstateObject(
    "11",
    'Красивая вилла 250 м<sup class="degree">2</sup>',
    "left-villa.png",
    0,
    "2",
    "250",
    "1400",
    "287770",
    "Рассрочка 30%",
    0,
    "Апрель 2024",
    0,
    0,
    1,
    0
  ),
);
villas.addRealEstateObject(
  new realEstateObject("12", 'Современный таунхаус 170 м<sup class="degree">2</sup>', "left-villa.png",0 , 0, 170, 1200, ' 247770',  "Рассрочка 30%", 0, 'Июнь 2024', 0, 0, 1, 0),
);
villas.addRealEstateObject(
  new realEstateObject("13", "Тест", "left-villa.png", 0, 1, 100, 1000, 123, "Рассрочка 30%", 1, 1, 0, 1, 1, 0),
);

villas.addRealEstateObject(
  new realEstateObject(
    "14",
    'Прибрежная вилла 150м<sup class="degree">2</sup>',
    "left-villa.png",
    0,
    "1",
    "150",
    "200",
    "350000",
    "Рассрочка 30%",
    0,
    0,
    0,
    "Мебель и бытовая техника входят в стоимость",
    1,
    0
  ),
);

villas.addRealEstateObject(
  new realEstateObject(
    "15",
    'Tаунхаус 350м<sup class="degree">2</sup> на берегу',
    "left-villa.png",
    0,
    "3",
    "350",
    "250",
    "400000",
    "Рассрочка 30%",
    0,
    0,
    0,
    0,
    1,
    0
  ),
);

villas.addRealEstateObject(
  new realEstateObject(
    "16",
    'Tаунхаус 100м<sup class="degree">2</sup>',
    "left-villa.png",
    0,
    "1",
    "100",
    "1500",
    "120000",
    "Рассрочка 30%",
    0,
    0,
    0,
    "Мебель и бытовая техника входят в стоимость",
    1,
    0
  ),
);

villas.addRealEstateObject(
  new realEstateObject(
    "17",
    'Прибрежная вилла 150м<sup class="degree">2</sup>',
    "left-villa.png",
    0,
    "1",
    "150",
    "200",
    "350000",
    "Рассрочка 30%",
    0,
    0,
    0,
    "Мебель и бытовая техника входят в стоимость",
    1,
    0
  ),
);

villas.addRealEstateObject(
  new realEstateObject(
    "18",
    'Tаунхаус 350м<sup class="degree">2</sup> на берегу',
    "left-villa.png",
    0,
    "3",
    "350",
    "250",
    "400000",
    "Рассрочка 30%",
    0,
    0,
    0,
    0,
    1,
    0
  ),
);

villas.addRealEstateObject(
  new realEstateObject(
    "19",
    'Tаунхаус 100м<sup class="degree">2</sup>',
    "left-villa.png",
    0,
    "1",
    "100",
    "1500",
    "120000",
    "Рассрочка 30%",
    0,
    0,
    0,
    "Мебель и бытовая техника входят в стоимость",
    1,
    0
  ),
);

villas.addRealEstateObject(
  new realEstateObject(
    "20",
    'Роскошный таунхаус 160м<sup class="degree">2</sup> у моря',
    "left-villa.png",
    0,
    "2",
    "160",
    "300",
    "277700",
    "Рассрочка 30%",
    0,
    0,
    0,
    "Мебель и бытовая техника входят в стоимость",
    1,
    0
  ),
);
villas.addRealEstateObject(
  new realEstateObject(
    "21",
    '3-x комнатный таунхаус 184 м<sup class="degree">2</sup> в современном стиле',
    "left-villa.png",
    0,
    "3",
    "184",
    "700",
    "307770",
    "Рассрочка 30%",
    0,
    0,
    0,
    0,
    1,
    0
  ),
);
villas.addRealEstateObject(
  new realEstateObject(
    "22",
    'Красивая вилла 250 м<sup class="degree">2</sup>',
    "left-villa.png",
    0,
    "2",
    "250",
    "1400",
    "287770",
    "Рассрочка 30%",
    0,
    0,
    "2024",
    0,
    1,
    0
  ),
);
villas.addRealEstateObject(
  new realEstateObject("23", 'Современный таунхаус 170 м<sup class="degree">2</sup>', "left-villa.png", 0, 0, 170, 1200, ' 247770', "Рассрочка 30%", 0, 0, '2020', 0, 1, 0),
);
villas.addRealEstateObject(
  new realEstateObject("24", "Тест", "left-villa.png", 0, 0, 108, 180, 1, "Рассрочка 30%", 1, 0, 0, 1, 1, 0),
);

villas.addRealEstateObject(
  new realEstateObject(
    "25",
    'Прибрежная вилла 150м<sup class="degree">2</sup>',
    "left-villa.png",
    0,
    "1",
    "150",
    "200",
    "350000",
    "Рассрочка 30%",
    0,
    0,
    0,
    "Мебель и бытовая техника входят в стоимость",
    1,
    0
  ),
);

villas.addRealEstateObject(
  new realEstateObject(
    "26",
    'Tаунхаус 350м<sup class="degree">2</sup> на берегу',
    "left-villa.png",
    0,
    "3",
    "350",
    "250",
    "400000",
    "Рассрочка 30%",
    0,
    0,
    0,
    0,
    1,
    0
  ),
);

villas.addRealEstateObject(
  new realEstateObject(
    "27",
    'Tаунхаус 100м<sup class="degree">2</sup>',
    "left-villa.png",
    0,
    "1",
    "100",
    "1500",
    "120000",
    "Рассрочка 30%",
    0,
    0,
    0,
    "Мебель и бытовая техника входят в стоимость",
    1,
    0
  ),
);

// Проверка вывода каталога, поиска объекта по любому параметру, удаления объекта

// console.log(villas.realEstateObjects);
// villas.findRealEstateObjectBy("sea", '1000');
// villas.findRealEstateObjectBy("id", '1');
// villas.deleteRealEstateObjectById('3');

// Добавление пустых тестовых объектов недвижимости

// villas.addRealEstateObject(
//   new realEstateObject("0", "Тест", "left-villa.png", 0, 0, 0, 0, 0, 0, 0, 1, 1),
// );

// villas.addRealEstateObject(
//   new realEstateObject("0", "Тест", "left-villa.png", 0, 0, 0, 0, 0, 0, 0, 1, 1),
// );

// villas.addRealEstateObject(
//   new realEstateObject("0", "Тест", "left-villa.png", 0, 0, 0, 0, 0, 0, 0, 1, 1),
// );

// villas.addRealEstateObject(
//   new realEstateObject("0", "Тест", "left-villa.png", 0, 0, 0, 0, 0, 0, 0, 1, 1),
// );

// villas.addRealEstateObject(
//   new realEstateObject("0", "Тест", "left-villa.png", 0, 0, 0, 0, 0, 0, 0, 1, 1),
// );

// villas.addRealEstateObject(
//   new realEstateObject("0", "Тест", "left-villa.png", 0, 0, 0, 0, 0, 0, 0, 1, 1),
// );

// villas.addRealEstateObject(
//   new realEstateObject("0", "Тест", "left-villa.png", 0, 0, 0, 0, 0, 0, 0, 1, 1),
// );

// villas.addRealEstateObject(
//   new realEstateObject("0", "Тест", "left-villa.png", 0, 0, 0, 0, 0, 0, 0, 1, 1),
// );

// villas.addRealEstateObject(
//   new realEstateObject("0", "Тест", "left-villa.png", 0, 0, 0, 0, 0, 0, 0, 1, 1),
// );

// villas.addRealEstateObject(
//   new realEstateObject("0", "Тест", "left-villa.png", 0, 0, 0, 0, 0, 0, 0, 1, 1),
// );

// villas.addRealEstateObject(
//   new realEstateObject("0", "Тест", "left-villa.png", 0, 0, 0, 0, 0, 0, 0, 1, 1),
// );

// villas.addRealEstateObject(
//   new realEstateObject("0", "Тест", "left-villa.png", 0, 0, 0, 0, 0, 0, 0, 1, 1),
// );

// villas.addRealEstateObject(
//   new realEstateObject("0", "Тест", "left-villa.png", 0, 0, 0, 0, 0, 0, 0, 1, 1),
// );

// villas.addRealEstateObject(
//   new realEstateObject("0", "Тест", "left-villa.png", 0, 0, 0, 0, 0, 0, 0, 1, 1),
// );

// villas.addRealEstateObject(
//   new realEstateObject("0", "Тест", "left-villa.png", 0, 0, 0, 0, 0, 0, 0, 1, 1),
// );

// villas.addRealEstateObject(
//   new realEstateObject("0", "Тест", "left-villa.png", 0, 0, 0, 0, 0, 0, 0, 1, 1),
// );

// villas.addRealEstateObject(
//   new realEstateObject("0", "Тест", "left-villa.png", 0, 0, 0, 0, 0, 0, 0, 1, 1),
// );

// villas.addRealEstateObject(
//   new realEstateObject("0", "Тест", "left-villa.png", 0, 0, 0, 0, 0, 0, 0, 1, 1),
// );

// villas.addRealEstateObject(
//   new realEstateObject("0", "Тест", "left-villa.png", 0, 0, 0, 0, 0, 0, 0, 1, 1),
// );

// villas.addRealEstateObject(
//   new realEstateObject("0", "Тест", "left-villa.png", 0, 0, 0, 0, 0, 0, 0, 1, 1),
// );

// villas.addRealEstateObject(
//   new realEstateObject("0", "Тест", "left-villa.png", 0, 0, 0, 0, 0, 0, 0, 1, 1),
// );

// villas.addRealEstateObject(
//   new realEstateObject("0", "Тест", "left-villa.png", 0, 0, 0, 0, 0, 0, 0, 1, 1),
// );

// villas.addRealEstateObject(
//   new realEstateObject("0", "Тест", "left-villa.png", 0, 0, 0, 0, 0, 0, 0, 1, 1),
// );

// villas.addRealEstateObject(
//   new realEstateObject("0", "Тест", "left-villa.png", 0, 0, 0, 0, 0, 0, 0, 1, 1),
// );

// Добавление заполненных тестовых объектов недвижимости

// villas.addRealEstateObject(
//   new realEstateObject(
//     0,
//     'Роскошный таунхаус 160м<sup class="degree">2</sup> у моря',
//     "left-villa.png",
//     "2",
//     "160",
//     "300",
//     "277 700",
//     0,
//     0,
//     "Мебель и бытовая техника входят в стоимость",
//     1,
//     1,
//   ),
// );
// villas.addRealEstateObject(
//   new realEstateObject(
//     0,
//     '3-x комнатный таунхаус 184 м<sup class="degree">2</sup> в современном стиле',
//     "left-villa.png",
//     "3",
//     "184",
//     "700",
//     "307 770",
//     0,
//     0,
//     0,
//     1,
//     1,
//   ),
// );
// villas.addRealEstateObject(
//   new realEstateObject(
//     0,
//     'Красивая вилла 250 м<sup class="degree">2</sup>',
//     "left-villa.png",
//     "2",
//     "250",
//     "1000",
//     "287 770",
//     0,
//     "Апрель 2024",
//     0,
//     1,
//     1,
//   ),
// );
// villas.addRealEstateObject(
//   new realEstateObject(0, 'Современный таунхаус 170 м<sup class="degree">2</sup>', "left-villa.png", 0, 170, 1200, ' 247 770', 0, 'Июнь 2024', 0, 1, 1),
// );