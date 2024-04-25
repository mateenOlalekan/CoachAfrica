import { useState, useEffect } from "react";
import { FaCalendarDays, FaRegClock } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import ScheduleHeader from "../Schedule/ScheduleHeader";
import smile from "../../../assets/Image/coach01.png";
import { FaPhone } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

function Index() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    const formattedTime = currentDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    setDate(formattedDate);
    setTime(formattedTime);
  }, []);

  return (
    <div className="w-11/12 max-md:w-10/12 h-screen overflow-y-auto pt-2">
      <ScheduleHeader />
      <div className="flex flex-col px-2">
        <div className="flex justify-start gap-3 items-center px-4">
          <FaArrowRight />
          <p>Teacher</p>
        </div>

        <div className="flex flex-col px-4">
          <div className="flex justify-end items-start gap-4">
            <div className="flex flex-col">
              <span>Attendance</span>
              <h2 className="text-lg">85%</h2>
            </div>
            <div><span className="text-[#00CF91]">85</span>/100</div>
          </div>

          <div className="flex max-md:flex-col justify-between gap-4">
            <div className="flex gap-4 p-2">
              <img src={smile} alt="Smiling" className="w-24 h-24 rounded-full" />
              <div className="flex flex-col text-[#3C3C3C] gap-2">
                <p className="font-semibold">MRS. B. Adeyemi</p>
                <p className="font-medium text-sm">Mentee ID : CFKAOG1234</p>
                <p className="font-medium text-sm">Gender:Female</p>
              </div>
            </div>

            <div className="border flex max-md:flex-col justify-between border-[#3C3C3C] p-1 rounded-md gap-15">
              <div className="flex flex-col gap-2 p-3">
                <h2 className="font-medium">Residential Address</h2>
                <p>No. 111, Ebinpejo avenue,<br /> ikate, Odogbolu, Ogun State.</p>
              </div>
              <div className="flex flex-col gap-2 p-3">
                <h2 className="font-medium">Contact Address</h2>
                <div className="flex items-center gap-3">
                  <FaPhone />
                  <p>+234 812 345 6789</p>
                </div>
                <div className="flex items-center gap-3">
                  <MdMailOutline />
                  <p>info@coachrika.org</p>
                </div>
              </div>
            </div>

          </div>
          <hr className="w-full h-1 text-black my-2" />

          <div className="grid grid-cols-1 gap-2 lg:grid-cols-5">
            <div className="flex flex-col rounded-[16px] pl-4 py-1 font-semibold lg:col-span-2">
              <p>Admission: DIRECT By Coachfrika</p>
              <p>Full name : MRS. Bukola Adeleye</p>
              <p className="text-[#3C3C3C]">Marital Status: Married </p>
              <p className="text-[#3C3C3C]">Batch: Cohort 1 </p>
              <p className="text-[#3C3C3C]">Course Start Date : 12 Dec., 2023 </p>
              <p className="text-[#3C3C3C]">Course End Date : 12 March, 2024</p>
            </div>
            <div className="flex justify-center lg:col-span-3 items-center p-1">
              <div className="text-[11px] p-3 leading-loose border-[1px] border-black rounded-md">
                Hello, I'm Mrs. B Adeleye – an enthusiastic educator dedicated to shaping young minds and fostering a love for learning.
                With a passion for creating dynamic and engaging classroom environments, I strive to inspire curiosity and empower my
                students to reach their full potential.
                My teaching philosophy centers around cultivating a nurturing space where every student feels seen, heard, and valued.
                Join me on this educational journey as we explore the wonders of knowledge and growth together.
                Let's ignite a love for learning that lasts a lifetime!
              </div>
            </div>

          </div>

          <hr className="w-full h-1 text-black my-1" />

          <p className="text-lg font-medium py-2">Current Activities</p>

          <div className="grid grid-cols-1 gap-2 lg:grid-cols-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex flex-col p-2 gap-2 rounded-lg border border-gray-300 bg-[#fffff] overflow-hidden">
                <p className="text-left text-[14px] font-bold">Curriculum Review And Enhancement</p>

                <div className="flex gap-3 text-[10px] text-[#989898] text-sm">
                  <div className="flex justify-start items-center gap-1">
                    <FaCalendarDays />09 Dec 2023 - 09 Mar. 2024
                  </div>
                 
                </div>
                <span className="bg-[#FFDDDD] text-[12px] p-1 text-[#F12222] w-max px-4 rounded-md">Status: Completed</span>
                <a href="#" className="text-center  text-sm w-max  bg-[#79C701] p-1 px-2 rounded-md text-white">View Details</a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Index;
