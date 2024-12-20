import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import image1 from "./../../assets/slides/slide0.jpg";
import image2 from "./../../assets/slides/slide0.jpg";
// import image3 from "./../../assets/slides/slide3.png";
// import image4 from "./../../assets/slides/slide4.png";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        speed={3000}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)} // Capture the active slide index
        className="relative mySwiper custom-swiper z-0"
      >
        <SwiperSlide>
          {" "}
          <img
            className={`slide ${
              0 === activeSlide
                ? "fade-in"
                : 0 === (activeSlide - 1 + 3) % 3 // Previous slide
                ? "fade-out"
                : "fade-out"
            }`}
            src={image1}
            alt=""
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`slide ${
              1 === activeSlide
                ? "fade-in"
                : 1 === (activeSlide - 1 + 3) % 3 // Previous slide
                ? "fade-out"
                : "fade-out"
            }`}
            src={image2}
            alt=""
          />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img
            className={`slide ${
              2 === activeSlide
                ? "fade-in"
                : 2 === (activeSlide - 1 + 3) % 3 // Previous slide
                ? "fade-out"
                : "fade-out"
            }`}
            src={image3}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`slide ${
              3 === activeSlide
                ? "fade-in"
                : 3 === (activeSlide - 1 + 3) % 3 // Previous slide
                ? "fade-out"
                : "fade-out"
            }`}
            src={image4}
            alt=""
          />
        </SwiperSlide> */}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
