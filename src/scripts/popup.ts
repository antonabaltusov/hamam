const popup = document.querySelector(".popup");
const body = document.querySelector("body");
const popupTitle = popup.querySelector(".form__title");
const popupDescr = popup.querySelector(".form__title-sub");
const successMes = popup.querySelector(".form-success__answer");
if (popup) {
  const closePopup = () => {
    popup.classList.remove("active");
    popup.querySelector(".form-wrap").classList.remove("success");
    body.classList.remove("popup-active");
  };
  document.querySelector(".popup-close").addEventListener("click", closePopup);
  document
    .querySelector(".popup-overlay")
    .addEventListener("click", closePopup);
}
document.querySelectorAll(".open-popup").forEach((el) => {
  el.addEventListener("click", () => {
    const title = el.getAttribute("data-title");
    const descr = el.getAttribute("data-descr");
    const success = el.getAttribute("data-success");
    if (title && popupTitle) {
      popupTitle.innerHTML = title;
    }
    if (descr && popupDescr) {
      popupDescr.innerHTML = descr;
    }
    if (success && successMes) {
      successMes.innerHTML = success;
    }
    popup.classList.add("active");
    body.classList.add("popup-active");
  });
});
