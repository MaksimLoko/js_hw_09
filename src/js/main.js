const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

// выбираем переключатель и вещаем на него обработчик
let themeSwitch = document.querySelector(".theme-switch__toggle");
let bodyTheme = document.querySelector("body");
themeSwitch.addEventListener("change", changeTheme);


// делаем переключение темы.
function changeTheme() {
  if (themeSwitch.checked) {
    bodyTheme.classList.add(Theme.DARK);
    localStorage.setItem("Theme", Theme.DARK);
  } else {
    bodyTheme.classList.add(Theme.LIGHT);
    bodyTheme.classList.remove(Theme.DARK);
    localStorage.setItem("Theme", Theme.LIGHT);
  }
}
// делаем что бы между перезагрузками страницы, выбранная тема сохранялась.

document.addEventListener("DOMContentLoaded", CurrentTheme)

let themeValue = localStorage.getItem("Theme");

function CurrentTheme () {
  if (themeValue === Theme.DARK) {
        themeSwitch.checked = true;
        bodyTheme.classList.add(Theme.DARK);
      } 
}
