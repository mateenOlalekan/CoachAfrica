import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Test.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Coach01 from "../../assets/Image/image 22.png";
import Coach02 from "../../assets/Image/image 23.png";
import Coach03 from "../../assets/Image/image 24.png";
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import TestCard from "./TestCard"; 

const Test = () => {
  const CoachData = [
    {
      id: 1,
      image: Coach01,
      name: "Blessing Nyang",
      country: "NIG",
      description: "Meet Coach Fizzy, a seasoned and certified Educational Coach...",
      categories: ["mentorship", "curriculum development", "learning strategies"],
    },
    {
      id: 2,
      image: Coach02,
      name: "Blessing Nyang",
      country: "NIG",
      description: "Meet Coach Fizzy, a seasoned and certified Educational Coach...",
      categories: ["mentorship", "curriculum development", "learning strategies"],
    },
    {
      id: 3,
      image: Coach03,
      name: "Blessing Nyang",
      country: "NIG",
      description: "Meet Coach Fizzy, a seasoned and certified Educational Coach...",
      categories: ["mentorship", "curriculum development", "learning strategies"],
    },
    {
      id: 4,
      image: Coach01,
      name: "Blessing Nyang",
      country: "NIG",
      description: "Meet Coach Fizzy, a seasoned and certified Educational Coach...",
      categories: ["mentorship", "curriculum development", "learning strategies"],
    },
    {
      id: 5,
      image: Coach02,
      name: "Blessing Nyang",
      country: "NIG",
      description: "Meet Coach Fizzy, a seasoned and certified Educational Coach...",
      categories: ["mentorship", "curriculum development", "learning strategies"],
    },
  ];

  const swiperRef = useRef();

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
      <div className="lg:px-44 
                    md:px-20 max-md:px-40  bg-[#012112]
                    sm:px-10 max-sm:px-20 py-6">
        <div className="flex flex-col py-3 gap-6 text-center">
          <h1 className="text-3xl text-white pt-3 pb-1">Featured Coaches</h1>
          <Swiper
            slidesPerView={3}
            breakpoints={sliderSettings}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
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
            {CoachData.map((item, index) => (
              <SwiperSlide key={index}>
                <TestCard {...item} />
              </SwiperSlide>
            ))}
            <div className="flex flex-row justify-between mt-3">
              <button className="btn m-1" onClick={() => swiperRef.current?.slidePrev()}><FaArrowLeft onClick={() => swiperRef.current?.slidePrev()} /></button>
              <button className="btn m-1" onClick={() => swiperRef.current?.slideNext()}><FaArrowRight onClick={() => swiperRef.current?.slideNext()} /></button>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Test;
