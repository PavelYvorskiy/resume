function startTouch() {
  const itemsMob = document.querySelectorAll(".skills-content__item");
  itemsMob.forEach((item) => {
    item.addEventListener("touchstart", () => {
      const descActive = item.querySelector(".skills-content__description");
      descActive.classList.toggle("touch");
    });
  });
}

startTouch();
