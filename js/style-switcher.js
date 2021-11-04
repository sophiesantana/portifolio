const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");

styleSwitcherToggler.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
})

const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  })
}

const dayNigth = document.querySelector(".day-nigth");

dayNigth.addEventListener("click", () => {
  dayNigth.querySelector("i").classList.toggle("fa-sun");
  dayNigth.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
})

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNigth.querySelector("i").classList.add("fa-sun");
  } else {
    dayNigth.querySelector("i").classList.add("fa-moon");
  }
})