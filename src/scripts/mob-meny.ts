if (document.documentElement.clientWidth < 400) {
  const menuButton = document.querySelector(".open-menu");
  const menu = document.querySelector(".header-mobile");
  menuButton.addEventListener("click", () => {
    menu.classList.toggle("mob-menu-active");
  });
}
