"use client";

import Title from "./Title";
import "@styles/home/reviews.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";

import Review from "./Review";
import NavigationSwipper from "./NavigationSwipper";

function Reviews() {
  //   const [activeIndex, setActiveIndex] = useState(0);
  const reviews = [
    {
      id: 1,
      name: "ahmad handoush",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus saepe enim mollitia eum possimus officiis rem consequatur. Voluptatum eos doloribus, reprehenderit enim, officiis tenetur vitae est, facilis iste animi illo?",
    },
    {
      id: 2,
      name: "ahmad handoush",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus saepe enim mollitia eum possimus officiis rem consequatur. Voluptatum eos doloribus, reprehenderit enim, officiis tenetur vitae est, facilis iste animi illo?",
    },
    {
      id: 3,
      name: "ahmad handoush",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus saepe enim mollitia eum possimus officiis rem consequatur. Voluptatum eos doloribus, reprehenderit enim, officiis tenetur vitae est, facilis iste animi illo?",
    },
    {
      id: 4,
      name: "ahmad handoush",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus saepe enim mollitia eum possimus officiis rem consequatur. Voluptatum eos doloribus, reprehenderit enim, officiis tenetur vitae est, facilis iste animi illo?",
    },
    {
      id: 5,
      name: "ahmad handoush",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus saepe enim mollitia eum possimus officiis rem consequatur. Voluptatum eos doloribus, reprehenderit enim, officiis tenetur vitae est, facilis iste animi illo?",
    },
  ];
  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  // Function to go to the next slide
  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };
  return (
    <section className="reviews flex flex-col gap-5">
      <Title title="our client reviews" />
      <div className="reviews-content w-[90%] mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          //   pagination={{ clickable: true }}
          spaceBetween={5}
          //   slidesPerView={}
          loop={true}
          className="swipper"
          ref={swiperRef}
          //   onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide
              key={review.id}
              //   className={index === activeIndex + 1 ? "active-slide" : ""}
            >
              <Review review={review} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation buttons */}
        <NavigationSwipper handleNext={handleNext} handlePrev={handlePrev} />
      </div>
    </section>
  );
}

export default Reviews;
