import Inputmask from "inputmask";

document.querySelectorAll("form").forEach((form) => {
  const wormWrap = form.closest(".form-wrap");
  const checkInput = () => {
    if (input.inputmask.unmaskedvalue().length === 10) {
      input.classList.remove("error");
      return true;
    } else {
      input.classList.add("error");
      return false;
    }
  };
  const chechBox = form.querySelector(".checkbox input");
  const checkCheckBox = () => {
    if (chechBox.checked) {
      chechBox.classList.remove("error");
      return true;
    } else {
      chechBox.classList.add("error");
      return false;
    }
  };
  const im = Inputmask({
    mask: "+7 ( 999 ) 999 - 99 - 99 ",
    oncomplete: () => {
      checkInput();
    },
  });
  const input = form.querySelector(".input");
  im.mask(input);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (checkInput() && checkCheckBox()) {
      wormWrap.classList.add("success");
    }
  });
});
