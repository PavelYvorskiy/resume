const options = {
  offset: 100,
};

const header = new Headhesive(".header", options);

const mobMenu = document.querySelector(".navbar-mob");
const navButton = document.querySelector(".navbar-navigation__btn");
const body = document.querySelector("body");
navButton.addEventListener("click", () => {
  body.classList.toggle("active");
  mobMenu.classList.toggle("active");
  navButton.classList.toggle("active");
});

const noActiveNavBar = document.querySelectorAll(".mob-item");
noActiveNavBar.forEach((el) => {
  el.addEventListener("click", () => {
    body.classList.remove("active");
    mobMenu.classList.remove("active");
    navButton.classList.remove("active");
  });
});

//-----------------ПЛАВНЫЙ СКРОЛЛ-------------------------------//

document.querySelectorAll('a[href^="#"').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    let href = this.getAttribute("href").substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = document.querySelector(".header").offsetHeight;

    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

//-----------------LINKS CLASS ACTIVE ON SCROLL------------------------------//

window.addEventListener("scroll", () => {
  let scrollBar = window.scrollY;
  document.querySelectorAll("section").forEach((el, i) => {
    if (
      el.offsetTop - document.querySelector(".header").clientHeight <=
      scrollBar
    ) {
      document.querySelectorAll(".navmenu__link").forEach((el) => {
        if (el.classList.contains("active")) {
          el.classList.remove("active");
        }
      });
      document
        .querySelectorAll(".navmenu__item")
        [i].querySelector(".navmenu__link")
        .classList.add("active");
    }
  });
});
