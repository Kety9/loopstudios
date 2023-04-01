const nav = document.querySelector(".nav");
const navOpen = document.querySelector(".nav.open");
const burgerNav = document.querySelector(".burger-nav");
const close = document.querySelector(".close");

burgerNav.addEventListener("click", function () {
  nav.classList.add("nav-open");
  close.style.display = "block";
});

close.addEventListener("click", function () {
  nav.classList.remove("nav-open");
  close.style.display = "none";
});

const mqLarge = window.matchMedia("(min-width: 32em)");
mqLarge.addEventListener("change", mqHandler);

function mqHandler(e) {
  e.matches
    ? `${(close.style.display = "none")} ${burgerNav.style.display = 'none'} `
    : `${(burgerNav.style.display = "block")}  ${nav.classList.remove(
        "nav-open"
      )}`;
}

mqHandler(mqLarge);
