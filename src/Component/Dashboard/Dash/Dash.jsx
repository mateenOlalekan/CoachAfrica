import ScheduleHeader from "../Schedule/ScheduleHeader";
import Logo2 from "../../../assets/Image/logo2.png";
import Mask from "../../../assets/Image/MaskGroup.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import LiveClass from "../Live Class/LiveClass";

function DashMain() {
  return (
    <div className="relative py-2 px-2 w-full h-screen text-white h-full overflow-y-auto overflow-hidden">
      {/* Schedule Header */}
      <ScheduleHeader />
      
      <div className="text-black text-xl py-2 font-medium">
        Welcome Afeez Iyiola
      </div>
      <div className="grid place-content-center bg-[#012112] py-14 rounded-sm">
        <div className="-mt-4 flex flex-col items-center">
          <img src={Logo2} alt="Logo" className="w-36" />
          <p className="mt-2">..creating the future we seek.</p>
        </div>
      </div>


      <div className="flex max-md:flex-col w-full py-1 px-2 gap-2">

<div className="relative flex flex-col w-4/12 max-md:w-full p-4 max-md:justify-center max-md:items-center">
  <div className="absolute top-0 left-1/4 mt-2 max-md:left-2/4 transform  -translate-x-1/2 -translate-y-1/2">
    <img src={Mask} alt="Logo" className=" w-32 h-32 rounded-full" />
      <div className="justify-center items-center flex flex-col text-black items-start pt-5">
    <div>Follow me now</div>
    <div className="flex justify-center items-center gap-2">
      <FaFacebook className="text-xl text-black" />
      <FaTwitter className="text-xl text-black" />
      <FaInstagram className="text-xl text-black" />
    </div>
  </div>
  </div>
  
  <div className="float-right text-black items-end pt-5">
    <h2 className="text-xl font-semibold text-right">Afeez Iyiola<br/><span><p className="text-sm text-right">Professional Teacher Coach</p></span> </h2>
    
  </div>

</div>



        <div className=" flex flex-col w-8/12 max-md:w-full  p-2 rounded-md">
          <p className="text-[15px] text-black">
            Dedicated to Excellence in Education. Afeez Iyiola is your trusted Professional Teacher Coach  Transforming teaching 
            practices with innovative strategies Passionate about empowering educators for student success Let's elevate your 
            teaching journey together.
          </p>
          <div className="flex w-full justify-end gap-5 pt-4">
            <div className="flex justify-center items-center gap-2">
              <span className="text-[#565656]">5+</span>
              <p className="text-[#038A4F]">Years of Experience</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <span className="text-[#565656]">50+</span>
              <p className="text-[#038A4F]">Teacher Mentees</p>
            </div>
          </div>

        </div>       

      </div>

      <div className="flex justify-between max-md:flex-col text-black w-full py-1 px-2 gap-2">
        <div className="text-lg font-medium">Activities</div>
        <div className="flex justify-between items-end gap-2">
          <div className=" font-medium">View All</div>
          <div className=" font-medium">View All</div>
          </div>

      </div>
      <LiveClass/>
    </div>
  );
}

export default DashMain;
