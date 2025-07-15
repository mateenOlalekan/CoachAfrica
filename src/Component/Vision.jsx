import { FaCheck } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Vision() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mission & Vision Card */}
          <div 
            className="bg-[#DDF3C5] p-8 rounded-3xl relative overflow-hidden transform transition-all duration-500 hover:shadow-xl"
            data-aos="fade-right"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="absolute bottom-[-30px] right-[10px] opacity-50" 
              width="88" 
              height="70" 
              viewBox="0 0 88 70" 
              fill="none"
            >
              <path d="M74.5 6C71.5 13.1667 56.8 35 50 37C41.5 39.5 16.5 36.5 14 68" stroke="#029837" strokeWidth="28" />
            </svg>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="absolute top-[-40px] left-[30px] opacity-50" 
              width="88" 
              height="70" 
              viewBox="0 0 88 70" 
              fill="none"
            >
              <path d="M71.1568 14.388C48.396 13.5928 5.63949 25.007 16.7001 77.0256" stroke="#ED3F26" strokeWidth="28"/>
            </svg>
            
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">Mission & Vision</h2>
              
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <h3 className="text-xl font-bold text-gray-800 min-w-[100px]">Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To engage enthusiastic educational/Leadership Coaches
                    who will Supports African Teachers in building their 
                    Potentials.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <h3 className="text-xl font-bold text-gray-800 min-w-[100px]">Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To Provide Exceptional Coaching Supports to Teachers Across Africa.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div 
            className="flex flex-col gap-8"
            data-aos="fade-left"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                We Provide An Unparalleled Supports To Teachers Through Personalized Coaching
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our commitment is to provide unparalleled assistance, guiding Teachers through
                modern educational process. Whether you&apos;re a private teacher seeking clarity
                or Public school educators wanting to enhance your classroom experience,
                trust us to deliver excellence in teaching support.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <FaCheck className="text-white bg-[#038A4F] w-8 h-8 p-2 rounded-full flex-shrink-0" />
                <p className="text-gray-700 font-medium">Personalized Guidance</p>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <FaCheck className="text-white bg-[#038A4F] w-8 h-8 p-2 rounded-full flex-shrink-0" />
                <p className="text-gray-700 font-medium">Digital approach to Teaching</p>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <FaCheck className="text-white bg-[#038A4F] w-8 h-8 p-2 rounded-full flex-shrink-0" />
                <p className="text-gray-700 font-medium">Talent & Leadership Development</p>
              </div>
            </div>

            <button className="btn-primary w-fit px-8 py-3 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Join Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
