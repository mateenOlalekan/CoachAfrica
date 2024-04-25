import { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Autoplay, Pagination, Navigation,A11y } from 'swiper/modules';
import "./Coach.css";
import CoachCard from "./CoachCard";
import Coach01 from "../../assets/Image/event01.png";
import Coach02 from "../../assets/Image/event02.png";
import Coach03 from "../../assets/Image/event03.png";
import Coach04 from "../../assets/Image/event01.png";

const Coach = () => {
  
  const swiper = useSwiper();

  const events = [
    { image: Coach01, date: "September 12, 2023", detail: "Coachfrika Announced Partnership with Ogun SUBEB." },
    { image: Coach02, date: "July 25, 2023", detail: "Coachfrika Partnered Agape Life Project." },
    { image: Coach03, date: "June 9, 2024", detail: "Coachfrika Partnered Agape Life Project." },
    { image: Coach04, date: "May 25, 2023", detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { image: Coach04, date: "May 25, 2023", detail: "Let a set or take a leap if you are brave enough." },
  ];

  const sliderSettings = {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    653: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

  return (
    <>
      <div className="lg:px-10 max-w-screen-lg:p-80
                    md:px-20 max-md:px-40 bg-[#fff]
                    sm:px-10 max-sm:px-10 h-auto py-6">
        <div className="flex flex-col py-4 mb-4 gap-6 text-center">
          <h1 className="text-3xl pt-2">Don’t Miss Out, Follow Our Events</h1>
          <p>
            An unforgettable experience awaits. Read our blog for details, and get ready to be part of something extraordinary
          </p>
        </div>

        <Swiper
          slidesPerView={3}
          breakpoints={sliderSettings}
          onBeforeInit={(swiper) => {
            swiper.current = swiper;
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
                      style={{
                        "--swiper-pagination-color": "#BEF200",
                        "--swiper-pagination-bullet-inactive-color": "#040404",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "10px",
                        "--swiper-pagination-bullet-horizontal-gap": "10px"
                    }}
        >
          {events.map((event, index) => (
            <SwiperSlide
            
             key={index}>
              <CoachCard Event={event.image} detail={event.detail} date={event.date} />
            </SwiperSlide>
          ))}

          <div className="flex flex-row justify-between mt-3 px-10 py-6 ">
            <button className="btn m-1" onClick={() => swiper.slideNext()}>
              <FaArrowLeft className="text-[#029837] cursor-pointer" onClick={() => swiper.slidePrev()} />
            </button>
            <button className="btn m-1" onClick={() => swiper.slideNext()}>
              <FaArrowRight className="text-[#029837] cursor-pointer" onClick={() => swiper.slideNext()} />
            </button>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Coach;
