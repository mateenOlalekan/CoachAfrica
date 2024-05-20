import { useState,useEffect } from "react";
import { FaCalendarDays,FaRegClock } from "react-icons/fa6";
function ClassHistory() {
    const[date,setData]=useState('');
    const [time, setTime] = useState('');
    useEffect(() => {
        const date = new Date();
        const options = {  year: 'numeric', month: 'short', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        const formattedTime = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        setData(formattedDate);
        setTime(formattedTime);
    })
  return (
    <div className="flex flex-row h-screen overflow-hidden">


      <div className=" py-2 px-2 overflow-y-auto w-full">
        <section className="grid grid-cols-2 lg:grid-cols-3 max-md:grid-cols-1 gap-4 justify-center items-start mt-2">
        <div className="flex flex-col py-3 px-4 rounded-lg border border-gray-300 gap-2 bg-[#ffffff]">
          <p className="text-left text-xl font-semibold">Teacher As Leader</p>
          <scan className="text-left font-semibold border-2 p-2 rounded-lg w-max mt-1 text-[#989898]">Batch 1st Cohort</scan>
          <div className="flex gap-3 text-[#989898]">
            <div className="flex justify-start items-center gap-1">
              <FaCalendarDays/>{date}
            </div>
            <div className="flex justify-start items-center gap-1">
              <FaRegClock/><span>{time}</span>
            </div>
          </div>
          <span className="bg-[#FFDDDD] py-1 text-[#F12222] px-2 w-max rounded-md">Status:  Completed</span>
          <a className="text-center bg-black p-2 rounded-md text-white">View Attendance</a>
        </div>

        <div className="flex flex-col py-3 px-4 rounded-lg border border-gray-300 gap-2 bg-[#ffffff]">
          <p className="text-left text-xl font-semibold">Mindset Coaching</p>
          <scan className="text-left font-semibold border-2 p-2 rounded-lg w-max mt-1 text-[#989898]">Batch 1st Cohort</scan>
          <div className="flex gap-3 text-[#989898]">
            <div className="flex justify-start items-center gap-1">
              <FaCalendarDays/>{date}
            </div>
            <div className="flex justify-start items-center gap-1">
              <FaRegClock/><span>{time}</span>
            </div>
          </div>
          <span className="bg-[#FFDDDD] py-1 text-[#F12222] px-2 w-max rounded-md">Status: Completed</span>
          <a className="text-center bg-black p-2 rounded-md text-white">View Attendance</a>
        </div>

        <div className="flex flex-col py-3 px-4 rounded-lg border border-gray-300 gap-2 bg-[#ffffff]">
          <p className="text-left text-xl font-semibold">Pedagogical Coaching</p>
          <scan className="text-left font-semibold border-2 p-2 rounded-lg w-max mt-1 text-[#989898]">Batch 1st Cohort</scan>
          <div className="flex gap-3 text-[#989898]">
            <div className="flex justify-start items-center gap-1">
              <FaCalendarDays/>{date}
            </div>
            <div className="flex justify-start items-center gap-1">
              <FaRegClock/><span>{time}</span>
            </div>
          </div>
          <span className="bg-[#FFDDDD] py-1 text-[#F12222] px-2 w-max rounded-md">Status:  Completed</span>
          <a className="text-center bg-black p-2 rounded-md text-white">View Attendance</a>
        </div>

        </section>
      </div>
    </div>
  )
}

export default ClassHistory

