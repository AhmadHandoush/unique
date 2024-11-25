"use client";

import Title from "./Title";
import "@styles/home/selections.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import SelectionVilla from "./SelectionVilla";
import NavigationSwipper from "./NavigationSwipper";

function Selections() {
  const swiperRef = useRef(null);

  // Function to go to the previous slide
  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  // Function to go to the next slide
  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  return (
    <section className="selections flex flex-col gap-5 mt-5 ">
      <Title title="A Selection Of Exceptional Villas And Chalets" />
      <div className="villas">
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          className="swipper"
          ref={swiperRef}
        >
          <SwiperSlide>
            <SelectionVilla />
          </SwiperSlide>
          <SwiperSlide>
            <SelectionVilla />
          </SwiperSlide>
          <SwiperSlide>
            <SelectionVilla />
          </SwiperSlide>
          <SwiperSlide>
            <SelectionVilla />
          </SwiperSlide>
        </Swiper>

        {/* Custom navigation buttons */}
        <NavigationSwipper handleNext={handleNext} handlePrev={handlePrev} />
      </div>
    </section>
  );
}

export default Selections;
