import Swiper, { Navigation, Pagination, Lazy, Controller } from "swiper";
export const baseSliderOptions = {
  speed: 800,
  touchRatio: 2,
  slidesPerView: 1,
  spaceBetween: 15,
  preloadImages: false,
  autoHeight: false,
  enabled: true,
  lazy: {
    loadPrevNext: true,
    loadPrevNextAmount: 3,
  },
};

function doubleSlider() {
  const doubleSliderElList = document.querySelectorAll(".dbl-slider");
  doubleSliderElList.forEach((el) => {
    let materialNuv = null;
    if (el.classList.contains("materials__slider")) {
      materialNuv = el.closest(".materials").querySelector(".materials__nuv");
    }
    const imageSliderList = el.querySelectorAll(
      ".dbl-slider__img"
    ) as unknown as HTMLElement[];
    //@ts-ignore
    const imageSliderInsideList = el.querySelectorAll(
      ".dbl-slider__inside"
    ) as HTMLElement[];
    const textSlider = el.querySelector(".dbl-slider__text") as HTMLElement;
    imageSliderInsideList.forEach((slider) => {
      new Swiper(slider, {
        modules: [Pagination, Lazy, Controller],
        ...baseSliderOptions,
        pagination: {
          el: slider.querySelector(".swiper-pagination") as HTMLElement,
          clickable: true,
        },
      });
    });
    const textSwiper = new Swiper(textSlider, {
      modules: [Navigation, Lazy, Controller],
      ...baseSliderOptions,
      slidesPerView: "auto",
      navigation: {
        nextEl: textSlider.querySelector(".swiper-button-next") as HTMLElement,
        prevEl: textSlider.querySelector(".swiper-button-prev") as HTMLElement,
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
        },
      },
    });
    imageSliderList.forEach((imageSlider) => {
      const imageSwiper = new Swiper(imageSlider, {
        modules: [Pagination, Lazy, Controller],
        ...baseSliderOptions,
        allowTouchMove: false,
      });
      textSwiper.controller.control = imageSwiper;
    });
    if (materialNuv) {
      const items = materialNuv.querySelectorAll("li");
      let activeItem = null as null | HTMLElement;
      items.forEach((el, index) => {
        if (el.classList.contains("active")) {
          activeItem = el;
        }
        el.addEventListener("click", () => {
          if (activeItem !== el) {
            el.classList.add("active");
            activeItem.classList.remove("active");
            activeItem = el;
            textSwiper.slideTo(index, 0);
          }
        });
      });
      textSwiper.on("slideChange", (e) => {
        activeItem.classList.remove("active");
        items[e.activeIndex].classList.add("active");
        activeItem = items[e.activeIndex];
      });
    }
  });
}
document.addEventListener("DOMContentLoaded", doubleSlider);
