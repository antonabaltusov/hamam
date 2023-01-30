const toggleShow = (el: Element) => el.classList.toggle("show");
if (document.documentElement.clientWidth < 400) {
  const buttons = document.querySelectorAll(".pay-shema__title");
  const diagrams = document.querySelectorAll(".pay-shema__item");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!btn.classList.contains("show")) {
        buttons.forEach(toggleShow);
        diagrams.forEach(toggleShow);
      }
    });
  });
}
