if (document.documentElement.clientWidth < 400) {
  const block = document.querySelector(".soc-icons-block");
  block.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
      if (!block.classList.contains("active")) {
        e.preventDefault();
        block.classList.add("active");
      }
    });
  });
}
