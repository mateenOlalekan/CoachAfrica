import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "./Coach.css";
import CoachCard from "./CoachCard";
import Coach01 from "../../assets/Image/event01.png";
import Coach02 from "../../assets/Image/event02.png";
import Coach03 from "../../assets/Image/event03.png";
import Coach04 from "../../assets/Image/event01.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Coach = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  const swiperRef = useRef();

  const events = [
    { 
      image: Coach01, 
      date: "September 12, 2023", 
      detail: "Coachfrika Announced Partnership with Ogun SUBEB.",
      category: "Partnership"
    },
    { 
      image: Coach02, 
      date: "July 25, 2023", 
      detail: "Coachfrika Partnered Agape Life Project.",
      category: "Partnership"
    },
    { 
      image: Coach03, 
      date: "June 9, 2024", 
      detail: "Coachfrika Partnered Agape Life Project.",
      category: "Partnership"
    },
    { 
      image: Coach04, 
      date: "May 25, 2023", 
      detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      category: "News"
    },
    { 
      image: Coach04, 
      date: "May 25, 2023", 
      detail: "Let a set or take a leap if you are brave enough.",
      category: "News"
    },
  ];

  const sliderSettings = {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  };

  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div 
          className="flex flex-col items-center gap-6 text-center mb-12"
          data-aos="fade-up"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Don&apos;t Miss Out, Follow Our Events
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            An unforgettable experience awaits. Read our blog for details, and get ready to be part of something extraordinary
          </p>
        </div>

        <div className="relative">
          <Swiper
            slidesPerView={3}
            breakpoints={sliderSettings}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            autoplay={{
              delay: 3000,
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
            className="py-8"
          >
            {events.map((event, index) => (
              <SwiperSlide key={index}>
                <CoachCard 
                  Event={event.image} 
                  detail={event.detail} 
                  date={event.date}
                  category={event.category}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center gap-4 mt-8">
            <button 
              className="w-12 h-12 flex items-center justify-center bg-[#029837]/10 rounded-full text-[#029837] hover:bg-[#029837]/20 transition-colors duration-300"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <FaArrowLeft />
            </button>
            <button 
              className="w-12 h-12 flex items-center justify-center bg-[#029837]/10 rounded-full text-[#029837] hover:bg-[#029837]/20 transition-colors duration-300"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coach;
