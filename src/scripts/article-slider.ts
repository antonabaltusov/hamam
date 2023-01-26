import Swiper, { Navigation, Pagination, Lazy } from "swiper";

export const baseSliderOptions = {
  speed: 800,
  touchRatio: 2,
  slidesPerView: 1,
  spaceBetween: 10,
  preloadImages: false,
  autoHeight: true,
  enabled: true,
  lazy: {
    loadPrevNext: true,
    loadPrevNextAmount: 3,
  },
};

const slider = document.querySelector(".article-slider") as HTMLElement;
if (slider) {
  const navigation = document.querySelector(".navigation") as HTMLElement;
  const imgs = Array.from(slider.querySelectorAll(".swiper-slide img")).map(
    (el) => el.getAttribute("imgmini")
  );
  const renderNav = () => {
    if (imgs.length > 1) {
      let text = "";
      for (let i = 0; i < imgs.length; i++) {
        text += `<li><div class="img-wrapper radios ${
          i ? "" : "active"
        }"><img src="${imgs[i]}"></div></li>`;
      }
      return text;
    }
    return "";
  };
  navigation.innerHTML = renderNav();
  const swiper = new Swiper(slider, {
    modules: [Pagination, Lazy, Navigation],
    ...baseSliderOptions,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  let activeSlide = null as null | Element;
  const navBar = navigation
    .querySelectorAll(".img-wrapper")
    .forEach((el, index) => {
      if (el.classList.contains("active")) {
        activeSlide = el;
      }
      el.addEventListener("click", () => {
        el.classList.add("active");
        activeSlide.classList.remove("active");
        activeSlide = el;
        swiper.slideTo(index);
      });
    });
}
const sliderMob = document.querySelector(".article-slider-mob") as HTMLElement;
if (sliderMob) {
  const swiper = new Swiper(sliderMob, {
    modules: [Lazy],
    ...baseSliderOptions,
    slidesPerView: "auto",
    spaceBetween: 15,
  });
}
