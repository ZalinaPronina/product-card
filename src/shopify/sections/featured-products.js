import Swiper, { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import "@/shopify/snippets/variant-swatch";

const FeaturedProducts = {
  onLoad() {
    this._init();
    this._handleResize = this._handleResize.bind(this);
    window.addEventListener("resize", this._handleResize);
  },

  _init() {
    this.sliderWrapper = this.container.querySelector(".swiper");
    if (!this.sliderWrapper) return;

    this._initSwiper();
  },

  _initSwiper() {
    if (window.innerWidth <= 767 && !this.slider) {
      this.slider = new Swiper(this.sliderWrapper, {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
          525: {
            slidesPerView: 2,
          },
          425: {
            slidesPerView: 1.5,
          }
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        modules: [Autoplay, Pagination],
      });
    } else if (window.innerWidth > 767 && this.slider) {
      this.slider.destroy(true, true);
      this.slider = null;
    }
  },

  _handleResize() {
    this._initSwiper();
  },
};

export default FeaturedProducts;
