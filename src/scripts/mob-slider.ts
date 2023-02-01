import Swiper, { Lazy } from "swiper";
export const baseSliderOptions = {
  speed: 800,
  touchRatio: 2,
  slidesPerView: "auto",
  spaceBetween: 15,
  preloadImages: false,
  autoHeight: false,
  enabled: true,
  lazy: {
    loadPrevNext: true,
    loadPrevNextAmount: 3,
  },
};
document.querySelectorAll(".mob-slider").forEach((slider) => {
  // @ts-ignore
  new Swiper(slider, {
    modules: [Lazy],
    ...baseSliderOptions,
  });
});
