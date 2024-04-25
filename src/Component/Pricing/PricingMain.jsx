import { FaCheckCircle} from 'react-icons/fa';
import Child from "../../assets/Image/Omodudu.png";
import Teacher from "../../assets/Image/teacher.png";
import BgFrame from "../../assets/Image/BgFrame02.png";
import PriceAccord from './PriceAccord';


const PricingMain = () => {


  return (
    <>
      <div className="flex flex-col px-20">
        <div className='flex flex-col text-center gap-4 py-2'>
          <h1 className='text-4xl font-semibold text-black'>Our Packages</h1>
          <p className='text-xl'>Choose from our range of subscription plans that best suit your needs</p>
        </div>

        <div className="grid grid-cols-3 py-8 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10 rounded">
          <div className="relative flex flex-col flex-1 shadow-md rounded-lg">
            <div className="bg-[#E0F1C5] py-4 text-center text-2xl leading-10">
              <h1>International</h1>
              <span>Teacher Leader</span>
            </div>
            <div className='text-center text-4xl py-2'>
              <h1>₦ 50,000</h1>
            </div>
            <ul className="flex-1 pl-10 pb-1 gap-4 max-sm:py-4">
              <li className="flex items-center gap-4 py-1">
                <FaCheckCircle className=" w-6 h-6 text-[#029837]" />
                <span>4 Coaching Session</span>
              </li>
              <li className="flex items-center gap-4 py-1">
                <FaCheckCircle className=" w-6 h-6 text-[#029837]" />
                <span>Access to Resource Library</span>
              </li>
              <li className="flex items-center gap-4 py-1">
                <FaCheckCircle className=" w-6 h-6 text-[#029837]" />
                <span>Certificate</span>
              </li>
            </ul>
            <div className='flex justify-center py-4 my-4'>
              <button type="button" className=" absolute bottom-4 inline-block px-5 py-3 font-semibold border-[#029837] border-2 rounded-lg items-center text-[#029837] hover:bg-[#029837] hover:text-white text-center">
                Choose Plan
              </button>
            </div>
          </div>
          <div className="relative flex flex-col flex-1 shadow-md rounded-lg">
            <div className="bg-[#79C701] py-4 text-center text-white text-2xl leading-10">
              <h1>Phenomenal</h1>
              <span>Teacher Leader</span>
            </div>
            <div className='text-center text-4xl py-2'>
              <h1>₦ 75,000</h1>
            </div>
            <ul className="flex-1 pl-10 pb-1 gap-4">
              <li className="flex items-center gap-4 py-1">
                <FaCheckCircle className=" w-6 h-6 text-[#029837]" />
                <span>6 Coaching Session</span>
              </li>
              <li className="flex items-center gap-4 py-1">
                <FaCheckCircle className=" w-6 h-6 text-[#029837]" />
                <span>Access to Resource Library</span>
              </li>
              <li className="flex items-center gap-4 py-1">
                <FaCheckCircle className=" w-6 h-6 text-[#029837]" />
                <span>Access to join Global Teacher Community</span>
              </li>
              <li className="flex items-center gap-4 py-1">
                <FaCheckCircle className=" w-6 h-6 text-[#029837]" />
                <span>Exclusive Webinars</span>
              </li>
              <li className="flex items-center gap-4 py-1">
                <FaCheckCircle className=" w-6 h-6 text-[#029837]" />
                <span>Certificate</span>
              </li>
            </ul>
            <div className='flex justify-center py-14 my-4'>
              <button type="button" className=" absolute bottom-4 inline-block px-5 py-3 font-semibold border-[#029837] border-2 rounded-lg items-center text-[#029837] hover:bg-[#029837] hover:text-white text-center">
                Choose Plan
              </button>
            </div>
          </div>

          <div className="relative flex flex-col flex-1 shadow-md rounded-lg">
            <div className="bg-[#029837] py-4  text-center text-2xl leading-10">
              <h1>Transformational</h1>
              <span>Teacher Leader</span>
            </div>
            <div className='text-center text-4xl py-2'>
              <h1>₦ 100,000</h1>
            </div>
            <ul className="flex-1 pl-10 pb-1 gap-4">
              <li className="flex items-center gap-4 py-1">
                <FaCheckCircle className=" w-6 h-6 text-[#029837]" />
                <span>9 Coaching Session</span>
              </li>
              <li className="flex items-center gap-4 py-1">
                <FaCheckCircle className=" w-6 h-6 text-[#029837]" />
                <span>Access to Resource Library</span>
              </li>
              <li className="flex items-center gap-4 py-1">
                <FaCheckCircle className=" w-6 h-6 text-[#029837]" />
                <span>Access to join Global Teacher Community</span>
              </li>
              <li className="flex items-center gap-4 py-1">
                <FaCheckCircle className=" w-6 h-6 text-[#029837]" />
                <span>Certificate of Participation</span>
              </li>
              <li className="flex items-center gap-4 py-1">
                <FaCheckCircle className=" w-6 h-6 text-[#029837]" />
                <span>Exclusive Webinars</span>
              </li>
              <li className="flex items-center gap-4 py-1">
                <FaCheckCircle className=" w-6 h-6 text-[#029837]" />
                <span>3 Months Mentorship</span>
              </li>
              <li className="flex items-center gap-4 py-1">
                <FaCheckCircle className=" w-6 h-6 text-[#029837]" />
                <span>Certificate</span>
              </li>
            </ul>
            <div className='flex justify-center py-4 my-4'>
              <button type="button" className=" absolute bottom-4 inline-block px-5 py-3 font-semibold border-[#029837] border-2 rounded-lg items-center text-[#029837] hover:bg-[#029837] hover:text-white text-center">
                Choose Plan
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 max-md:grid-cols-1 py-10 px-10 max-md:px-1 gap-10">
            <img src={Child} alt='Child' className='w-2/3 max-md:w-auto justify-end float-right' />
          <div className="flex flex-col items-center justify-center">
            <div className='flex flex-col pr-0 max-md:pr-3'>
              <div className='text-5xl max-md:text-3xl font-swmibold py-4'>
                Do You Know That <br/>
                With #30,000
              </div>
              <div className='text-[16px]  py-4'>
                You can give a child access to quality education
                through a professional Teacher in a low-income
                community.
              </div>
              <div className='flex justify-left py-4 my-4 '>
                <button type="button" className=" inline-block px-5 py-3 font-semibold bg-[#029837] border-2 rounded-lg items-center text-white text-center">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div className="grid grid-cols-2 max-md:grid-cols-1 justify-center items-center bg-[#F7FFF6] gap-40 py-16 px-24 max-md:p-5 max-md:gap-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl max-md:text-2xl font-semibold">
          We Provide Just What Every Great Teacher Needed To Become Exceptional At Their Profession.
        </h1>
        <p className="text-[16px] max-md:text-[12px] py-2">
          At the heart of Coachfrika lies a steadfast commitment to revolutionizing education through modern teaching methodologies, preparing teachers and students for the dynamic demands of the future of work. Our innovative solutions empower educators with cutting-edge tools, transforming classrooms into hubs of active engagement, personalized learning, and holistic development. Through our comprehensive coaching programs, we cultivate a cadre of exceptional teachers, equipped with the skills and knowledge to navigate the ever-evolving educational landscape.
        </p>
        <button type="button" className="inline-block px-5 py-1 w-2/5 font-semibold border-[#029837] border-2 rounded-lg items-center text-[#029837] hover:bg-[#029837] hover:text-white text-center">
          Choose Plan
        </button>
      </div>
      <div className="relative flex justify-center items-center max-md:gap-10">
        <img src={BgFrame} alt="Frame" className="relative bottom-20 w-4/12 max-md:w-2/12 right-40" />
        <img src={Teacher} alt="Teacher Image" className="absolute float-right w-7/12 rounded-tl-2xl rounded-br-2xl" />
      </div>
    </div>
    <PriceAccord/>
    </>
  );
};

export default PricingMain;
