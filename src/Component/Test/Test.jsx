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
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Test = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  const CoachData = [
    {
      id: 1,
      image: Coach01,
      name: "Blessing Nyang",
      country: "NIG",
      description: "Meet Coach Fizzy, a seasoned and certified Educational Coach with over 10 years of experience in transforming teaching methodologies.",
      categories: ["mentorship", "curriculum development", "learning strategies"],
    },
    {
      id: 2,
      image: Coach02,
      name: "Sarah Johnson",
      country: "GHA",
      description: "An innovative educator specializing in digital learning strategies and modern classroom management techniques.",
      categories: ["digital learning", "classroom management", "student engagement"],
    },
    {
      id: 3,
      image: Coach03,
      name: "Michael Okafor",
      country: "KEN",
      description: "Expert in curriculum development and educational leadership with a focus on African educational systems.",
      categories: ["curriculum development", "educational leadership", "teacher training"],
    },
    {
      id: 4,
      image: Coach01,
      name: "Amina Diallo",
      country: "SEN",
      description: "Specialized in inclusive education and special needs teaching methodologies.",
      categories: ["inclusive education", "special needs", "teacher support"],
    },
    {
      id: 5,
      image: Coach02,
      name: "David Mensah",
      country: "GHA",
      description: "Passionate about STEM education and innovative teaching approaches.",
      categories: ["STEM education", "innovation", "teacher development"],
    },
  ];

  const swiperRef = useRef();

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
    <div className="w-full bg-[#012112] py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div 
          className="flex flex-col items-center gap-8"
          data-aos="fade-up"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
            Featured Coaches
          </h2>
          
          <div className="w-full relative">
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
              {CoachData.map((item, index) => (
                <SwiperSlide key={index}>
                  <TestCard {...item} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex justify-center gap-4 mt-8">
              <button 
                className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors duration-300"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <FaArrowLeft />
              </button>
              <button 
                className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors duration-300"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
