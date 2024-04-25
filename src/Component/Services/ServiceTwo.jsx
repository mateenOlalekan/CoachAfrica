import yt from "../../assets/Image/Ytriangle.svg";
import vice from "../../assets/Image/serviceimg.png";
import redSquare from "../../assets/Image/RedSquare.svg";

function ServiceContent2() {
  return (
    <>
      <div className="py-10">
        <div className='relative overflow-hidden grid grid-cols-2 max-md:grid-cols-1 py-20 px-10 md:px-20 bg-[#79C701] gap-10'>

          {/* Responsive images */}
          <img src={yt} className="absolute w-20 max-md:w-32" />
          <img src={redSquare} className="absolute bottom-0 left-1/2 w-10 max-md:w-32 transform -translate-x-1/2" />

          <div className='flex flex-col justify-start items-start text-black gap-4'>
            <div className='text-4xl max-md:text-3xl font-bold '>Elevate your teaching journey with our exclusive one-on-one Coaching</div>
            <p className='text-xl text-justify'>
              Our Teachers make extra cash outside their primary salary. Join us to know how they do it.
            </p>
            <a className='py-2 px-10 flex flex-col items-center justify-center rounded-lg border-2 border-black'>
              Get Started
            </a>

          </div>

          <div className='relative flex flex-col justify-center items-center mt-10 pt-10'>
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute -top-10 right-10" width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="7.5" fill="#9F00EA"/>
            </svg>  
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute -top-10 left-12" width="36" height="31" viewBox="0 0 36 31" fill="none">
              <path d="M1.39879 30C1.39879 30 -0.965616 16.0231 5.82 13.2373C11.5206 10.8969 16.4628 21.2468 21.1469 17.4945C25.8915 13.6937 14.0474 7.6724 17.9046 3.12642C21.9643 -1.65803 35 3.12642 35 3.12642" stroke="#005EEA" stroke-width="1.89784"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-10 right-10" width="57" height="43" viewBox="0 0 57 43" fill="none">
              <path d="M8.22854 41.0738L10.6776 19.8579L27.7504 30.7289L29.6966 12.931L45.2696 23.7058L50.1197 4.46488" stroke="#005EEA" stroke-width="1.58153"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-10 left-10" width="22" height="28" viewBox="0 0 22 28" fill="none">
              <rect width="14.2384" height="24.2142" transform="matrix(0.923516 0.383561 -0.365513 0.930806 8.85156 0)" fill="#EA0000"/>
            </svg>        
            <div className="w-full md:w-1/2 h-60 bg-white absolute bottom-[-2rem] md:bottom-[-4rem] float-right ml-10 rounded-lg"></div>
            <img src={vice} className="w-2/4 md:w-1/2 absolute items-center justify-center z-10" />
          </div>

        </div>
      </div>
    </>
  );
}

export default ServiceContent2;
