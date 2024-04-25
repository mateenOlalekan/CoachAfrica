import {useEffect} from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import support1 from "../../assets/Image/support01.png";
import support2 from "../../assets/Image/support02.png";
import support3 from "../../assets/Image/support03.png";
import HeroImg from "../../assets/Image/HeroMain.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
// Support images array
const supportImages = [support1, support2, support3];

const Hero = () => {
  useEffect(()=>{
    AOS.init();
  },[]);
  return (
    <div className='relative flex w-full items-center justify-center bg-white pt-2'>
    
    <div className="grid items-center  max-w-[83rem] grid-cols-1 gap-1 lg:grid-cols-2 px-10">

      <div data-aos="fade-up"
     data-aos-duration="3000" className="flex flex-col justify-center items-start gap-6 ">
        <div className="xl:text-[50px] md:text-5xl max-md:mt-2 max-md:text-[40px] font-semibold text-black leading-tight">
          Personalized Coaching Supports For Teachers and Educators.
        </div>
        <div className="text-2xl max-md:text-xl text-black">
          Empowering Africa's Educators Through A Modern and Smart Approach
        </div>
        <button className="Hero-btn text-white bg-[#038A4F] text-xl border border-white rounded-md px-10 py-2 transition duration-300 ease-in-out hover:text-[#038A4F] hover:bg-white hover:border-[#038A4F]">
          Join Us
        </button>
        <div className="text-2xl font-semibold text-black mt-4">Support and trusted by</div>
        <div className="flex justify-end items-center gap-4">
          {supportImages.map((support, index) => (
            <img key={index} src={support} alt={`Support Logo ${index + 1}`} className="w-full h-auto" />
          ))}
        </div>
      </div>

      <div data-aos="fade-up"
     data-aos-duration="3000"  className=' relative flex h-full max-md:justify-center justify-end w-full gap-10 max-lg:hidden'>
        <img src={HeroImg} className='w-8/12 max-sm:w-full h-9/12 block'/>
         <div className=" flex Success items-center  absolute -bottom-10 left-80 transform translate-x-[-50%] translate-y-[-50%]  gap-8 bg-[rgba(255, 255, 255, 0.31)] border-[0.88px solid #f8f8f8] rounded-[10px] shadow-md p-4">
          <div  style={{ width: 60, height: 60 }}>
            <CircularProgressbar 
              value={0.90} 
              maxValue={1} 
              styles={buildStyles({ pathColor: '#4CAF50' })} 
              text={`${0.90 * 100}%`} 
              className=''
            />
          </div>
          <span className="block text-sm">Success<br/>Result</span>
        </div>
      </div>

    </div>
    </div>
  );
}

export default Hero;
 
