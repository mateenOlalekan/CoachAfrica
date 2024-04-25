import { FaCheck } from "react-icons/fa";

function Vision() {
  return (
    <>
         <div className="relative grid grid-cols-2 max-lg:grid-cols-1 gap-10 py-24 px-28 max-md:px-10 max-md:gap-10 ">
            <div className="Vision-content bg-[#DDF3C5] text-black px-10 py-10 rounded-3xl flex flex-col rounded-tr-lg rounded-bl-lg relative">
            <svg xmlns="http://www.w3.org/2000/svg" className=" absolute bottom-[-30px] right-[10px]" width="88" height="70" viewBox="0 0 88 70"  fill="none">
              <path d="M74.5 6C71.5 13.1667 56.8 35 50 37C41.5 39.5 16.5 36.5 14 68" stroke="#029837" strokeWidth="28" />
            </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-[-40px] left-[30px]" width="88"  height="70"  viewBox="0 0 88 70" fill="none">
                <path d="M71.1568 14.388C48.396 13.5928 5.63949 25.007 16.7001 77.0256" stroke="#ED3F26" strokeWidth="28"/>
              </svg>
              
              <div className="VisionFirst flex flex-col gap-8">
                  <h2 className="text-4xl text-center font-bold mt-2 mb-2">Mission & Vision</h2>
                  <div className="flex gap-10">
                      <h2 className="text-xl font-bold ">Mission</h2>
                      <p> 
                        To engage enthusiastic educational/Leadership Coaches
                        who will Supports African Teachers in building their 
                        Potentials.
                      </p>
                  </div>


                  <div className="flex gap-12">
                      <h2 className="text-xl font-bold">Vision</h2>
                      <p>To Provide Exceptional Coaching Supports to Teachers Across Africa. </p>
                  </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold">
                We Provide An Unparalleled Supports To Teachers Through Personalized Coaching
              </h2>
              <p className="text-sm font-medium text-justify">
                Our commitment is to provide unparalleled assistance, guiding Teachers through
                modern educational process. Whether you're a private teacher seeking clarity
                or Public school educators wanting to enhance your classroom experience,
                trust us to deliver excellence in teaching support.
              </p>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex justify-stretch items-center gap-3">
                  <FaCheck className="text-white bg-[#038A4F] w-6 h-6 p-2  rounded-full text-3xl" />
                  <p>Personalized Guidance</p>
                </div>
                <div className="flex justify-stretch items-center gap-3">
                  <FaCheck className="text-white bg-[#038A4F] w-6 h-6 p-2  rounded-full text-3xl"/>
                  <p>Digital approach to Teaching</p>
                </div>
                <div className="flex justify-stretch items-center gap-3">
                  <FaCheck className="text-white bg-[#038A4F] w-6 h-6 p-2  rounded-full text-3xl" />
                  <p>Talent & Leadership Development</p> 
                </div>
              </div>
              <div className="px-10 py-3 bg-[#F7FFF6] font-weight-bold 
                              rounded-sm text-[#029837] w-40 text-center 
                              cursor-pointer border-solid border-[#029837]
                              border-2">
                  Join Us
              </div>
            </div>
        </div>
    </>
  );
}

export default Vision;
