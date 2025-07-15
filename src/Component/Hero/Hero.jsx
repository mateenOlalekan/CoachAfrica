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
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <div className='relative w-full min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-20 transition-all duration-500'>
      <div className="container mx-auto">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div 
            data-aos="fade-right"
            data-aos-delay="200"
            className="flex flex-col justify-center items-start space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Personalized Coaching Supports For Teachers and Educators
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl">
              Empowering Africa&apos;s Educators Through A Modern and Smart Approach
            </p>
            
            <button className="btn-primary text-lg px-8 py-3 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Join Us
            </button>
            
            <div className="w-full mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Support and trusted by</h3>
              <div className="flex flex-wrap items-center gap-6">
                {supportImages.map((support, index) => (
                  <img 
                    key={index} 
                    src={support} 
                    alt={`Support Logo ${index + 1}`} 
                    className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                    data-aos="fade-up"
                    data-aos-delay={300 + (index * 100)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div 
            data-aos="fade-left"
            data-aos-delay="400"
            className="relative flex justify-center lg:justify-end w-full"
          >
            <div className="relative w-full max-w-lg">
              <img 
                src={HeroImg} 
                alt="Hero" 
                className="w-full h-auto object-contain transform transition-all duration-500 hover:scale-105"
              />
              
              {/* Success Card */}
              <div 
                className="absolute -bottom-10 -right-10 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl shadow-xl p-6 flex items-center gap-6 transform transition-all duration-300 hover:scale-105"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <div className="w-16 h-16">
                  <CircularProgressbar 
                    value={90} 
                    maxValue={100}
                    text={`${90}%`}
                    styles={buildStyles({
                      pathColor: '#4CAF50',
                      textColor: '#4CAF50',
                      trailColor: '#E5E7EB',
                      textSize: '24px'
                    })}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-gray-900">90%</span>
                  <span className="text-sm text-gray-600">Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
 
