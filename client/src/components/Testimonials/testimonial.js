import "./testimonials-styles.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import React, { useEffect, useState } from "react";
import testmonialsData from "./DATA/testimonialsData";
import TestimonialCard from "./testimonial_card";

const Testimonials = () => {
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });
  const [SlidesView, setSlidesView] = useState(3);
  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);
  useEffect(() => {
    if (windowDimenion.winWidth < 799) {
      setSlidesView(1);
    } else {
      setSlidesView(3);
    }
  }, [windowDimenion]);
  return (
    <>
      <div className="main-div-testimonials">
        <div className="testimonials-head">
          <h1>Testimonials</h1>
        </div>
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          slidesPerView={SlidesView}
          pagination={{
            clickable: true,
          }}
          loop={true}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {testmonialsData.map((d) => {
            return (
              <SwiperSlide key={d.id}>
                <TestimonialCard
                  img={require(`./IMG/${d.img}`)}
                  name={d.name}
                  college={d.college}
                  description={d.description}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};
export default Testimonials;
