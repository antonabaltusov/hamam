if (document.documentElement.clientWidth < 400) {
  const menuButton = document.querySelector(".open-menu");
  const menu = document.querySelector(".header-mobile");
  menuButton.addEventListener("click", () => {
    menu.classList.toggle("mob-menu-active");
  });
  menu
    .querySelector(".mob-menu")
    .querySelectorAll("a, button")
    .forEach((el) => {
      el.addEventListener("click", () => {
        menu.classList.remove("mob-menu-active");
      });
    });
}
