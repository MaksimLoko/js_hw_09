import "./styles.css";
import "./js/main.js";

import menuTemplate from "./templates/menu.hbs";
// console.log(menuTemplate);
import menuItems from "./menu.json";
// console.log(menuItems);


// мой шаблон
let markup = menuTemplate(menuItems)

// указываем куда вставить шаблон
let ul = document.querySelector('.js-menu')

// вставляем шаблон в указанное место
ul.innerHTML = markup
