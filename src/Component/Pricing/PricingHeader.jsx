// import Priceimg from "/bgFrame01.png";
import PriceImg from "../../assets/Image/BgFrame02.png";
import big from "../../assets/Image/big.svg";
import lpb from "../../assets/Image/loopiebrown.svg";
import lpg from "../../assets/Image/loopiegreen.svg";
import small from "../../assets/Image/small.svg";


function PricingHeader() {
  return (
    <>
      <div className="relative  flex flex-col justify-center text-center items-center  pb-20  gap-8 overflow-hidden bg-white">
        <div className="relative flex flex-row w-full  justify-between px-20">
          <img src={lpg} className="abolute"/>
          <img src={small} className="abolute top-36 left-96"/>
        </div>

        <img src={PriceImg} className='absolute bottom-0 left-0 w-1/12' />
        <h1 className="relative text-4xl max-md:text-3xl max-md:px-6 font-[500]">Are You Ready To Take Your<br/> 
          Teaching Career To New Height ?
          </h1>
          <p className=' px-[270px] max-lg:px-[150px] text-[16px] font-[400] max-md:px-6'>
            Join Coachfrika's exclusive subscription mode and embark on a transformative
            experience that will empower you as an educator and leader. Our subscription 
            is designed to provide you with ongoing support, professional development, and 
            a thriving community of like-minded educators.
          </p>
          <button className="Hero-btn text-white bg-[#038A4F] border border-white rounded-md px-6 py-2 transition duration-300 ease-in-out hover:text-[#038A4F] hover:bg-white hover:border-[#038A4F]">
           Get Started
        </button>
      
          <div className="relative flex flex-row w-full justify-between">
            <img src={big} className="absolute bottom-[-58px] left-40" />
            <img src={lpb} className="absolute right-40 max-md:right-20 bottom-4"  />
          </div>

      </div>
    </>
  )
}

export default PricingHeader;

