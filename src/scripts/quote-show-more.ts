const buttons = document.querySelectorAll(".quote-show-more");
buttons.forEach((el) => {
  el.addEventListener("click", () => {
    el.closest(".quote .swiper-slide")?.classList.toggle("show-more");
  });
});
