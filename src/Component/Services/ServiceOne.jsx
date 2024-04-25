import { useEffect } from "react";
import orange from "../../assets/Image/OrangeCurve.svg";
import GreenCurve from "../../assets/Image/GreenCurve.svg";
import Coach01 from "../../assets/Image/coach01.png";
import Coach02 from "../../assets/Image/02.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

function SerViceContent() {
        useEffect(() => {
        AOS.init();
      }, [])
  return (
    <>
      <div data-aos="fade-right" data-aos-duration="3000" className="flex flex-col pt-10 px-20 gap-5 max-md:16 max-md:px-10">
      <div className="relative grid grid-cols-2  max-md:grid-cols-1 gap-16 py-10  max-md:py-5 ">
        <div className="flex flex-col justify-center">
            <div className="flex flex-col">
            <h1 className="text-4xl font-semibold pb-5">We Provide One-On-One Mentorship</h1>
            <p className="text-lg text-justify">
            Our mentors are here to offer personalized guidance tailored to your teaching 
            style and goals. Experience the transformative impact of one-on-one support as
            we work together to enhance your teaching skills and overall effectiveness.
        </p>
        </div>
        </div>

        <div className="flex flex-col justify-end items-end max-md:justify-center max-md:items-center">
        <div className="relative flex flex-col justify-center items-center gap-5">
            <img src={orange} className="absolute w-1/6 -top-14 max-md:right-[-20px] -right-4" />
            <img src={GreenCurve} className="absolute w-2/12  -bottom-14 max-md:left-[-20px] -left-5"/>
            <img src={Coach01} className="w-10/12  max-md:w-9/12"/>
            </div>
        </div>
        </div>
      </div>

      <div data-aos="fade-left" data-aos-duration="3000" className="flex flex-col  px-20 gap-5 max-md:16 max-md:px-10  bg-[#F9FFF8]">
        <div className="relative  grid grid-cols-2 grid-re max-md:grid-cols-1 gap-16 py-28 max-md:py-5">
          <div className="flex flex-col justify-start items-start max-md:justify-center max-md:items-center">
            <div className="relative flex flex-col justify-center items-center gap-5">
              <img src={orange} className="absolute w-1/6 -top-14 max-md:right-[-20px] -right-4" />
              <img src={GreenCurve} className="absolute w-2/12  -bottom-14 max-md:left-[-20px] -left-5"/>
              <img src={Coach02} className="w-10/12  max-md:w-8/12 rounded-tl-xl rounded-br-xl"/>
            </div>
          </div>


        <div className="flex flex-col justify-center">
            <div className="flex flex-col">
            <h1 className="text-4xl font-semibold pb-5">We Provide Personalized Coaching services</h1>
            <p className="text-lg text-justify">
             we believe in the power of personalized coaching to transform your journey towards success. 
             Our dedicated team of experienced coaches is committed to understanding your unique goals, 
             challenges, and aspirations. Through one-on-one sessions tailored to your needs, we
             provide guidance, support, and actionable strategies to unlock your full teaching potential.
          </p>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default SerViceContent