import {FaPlus,FaSearch} from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { RiDeleteBin5Line } from "react-icons/ri";
import MainHeader from "./ScheduleHeader";
function Schedule() {
  return (
    <div className=" py-2 px-2 mt-2 w-full  pb-3 overflow-y-auto overflow-hidden ">
        <MainHeader />
        <section className="relative w-full flex max-lg:flex-col items-center justify-between  max-md:justify-around max-lg:justify-center px-4 gap-4 pb-3">
        <div className="flex justify-center  items-center gap-10">
        
            <div className="text-lg max-md:text-[12px]"> My Schedule</div>
        
        
            <div className="flex justify-center  items-center py-2 px-2 bg-[#EDEDF5] rounded-md gap-2">
            <CgMenuGridR className="text-lg"/>
            <span className="text-[#8D8D8D] max-md:text-[12px]">09-12-2023</span>
            </div>

        <div className="flex justify-center  items-center py-1 px-2 text-red-700 bg-[#fffff] gap-2 rounded-lg border border-red-500">
            <RiDeleteBin5Line className="text-lg"/>
            <span>Delete</span>
        </div>
        
        </div>

        <div className="flex flex-row gap-2 ">
            <div className="flex justify-center items-center gap-2 bg-[#79C701] rounded-sm p-1">
            <FaPlus className="text-white "/>
            <p className="text-white">New Schedule</p>
            </div>

            <div className="flex  flex-row justify-center  items-center gap-2 bg-[#F1F1F1] rounded-md p-2">
            <FaSearch className="text-[#9E9E9E] "/>
            <input type="text" placeholder="search....." className="w-52 max-md:w-40 bg-transparent outline-none"/>
            </div>
        </div>

        </section>
        <section className="grid lg:grid-cols-4 md:grid-cols-3 max-md:grid-cols-2  max-sm:grid-cols-1 gap-5 px-4  justify-center items-start mt-2">
        <div className="bg-[#F1F1F1] rounded-lg shadow-md gap-2">
            <div className="flex flex-col">
            <div className="text-center bg-black text-white rounded-tl-lg py-2 rounded-tr-lg">Not Started</div>
                <div className="flex flex-col p-2 gap-2">
                <div className="flex flex-col justify-between bg-[white] h-24 gap-2 rounded-md p-2  shadow-lg">
                    <p>Personal Development Reading with Cohort 1.</p>
                    <div className="text-center text-sm text-[#3D70F5]">View Details</div>
                </div>
                <div className="flex flex-col justify-between bg-[white] h-24 gap-2 rounded-md p-2  shadow-lg">
                    <p>Workshop Planning and Material Preparation.</p>
                    <div className="text-center text-sm text-[#3D70F5]">View Details</div>
                </div>
                <div className="flex flex-col justify-between bg-[white] h-24 gap-2 rounded-md p-2  shadow-lg">
                    <p>Curriculum Review and Enhancement.</p>
                    <div className="text-center text-sm text-[#3D70F5]">View Details</div>
                </div>
                <div className="flex flex-col justify-between bg-[white] h-24 gap-2 rounded-md p-2  shadow-lg">
                    <p>Individual Coaching Sessions.</p>
                    <div className="text-center text-sm text-[#3D70F5]">View Details</div>
                </div>
                </div>
            </div>
        </div>
        <div className="bg-[#FFF9E9] rounded-lg shadow-md gap-2">
            <div className="flex flex-col">
            <div className="text-center bg-[#F4BA24] text-white rounded-tl-lg rounded-tr-lg py-2 text">Ongoing</div>
                <div className="flex flex-col p-2 gap-2">
                <div className="flex flex-col justify-between bg-[white] h-24 gap-2 rounded-md p-2  shadow-lg">
                    <p>Classroom Observation Sessions.</p>
                    <div className="text-center text-sm text-[#3D70F5]">View Details</div>
                </div>
                <div className="flex flex-col justify-between bg-[white] h-24 gap-2 rounded-md p-2  shadow-lg">
                    <p>Individual Coaching Sessions.</p>
                    <div className="text-center text-sm text-[#3D70F5]">View Detail</div>
                </div>
                <div className="flex flex-col justify-between bg-[white] h-24 gap-2 rounded-md p-2  shadow-lg">
                    <p>Resource Review and Recommendation.</p>
                    <div className="text-center text-sm text-[#3D70F5]">View Details</div>
                </div>
                </div>
            </div>
        </div>
        <div className="bg-[#E8FFF3] rounded-lg shadow-md gap-2">
            <div className="flex flex-col gap-2">
            <div className="text-center bg-[#0FD76B] text-white rounded-tl-lg py-2 rounded-tr-lg">Completed</div>
                <div className="flex flex-col p-2 gap-2">
                <div className="flex flex-col justify-between bg-[white] h-24 gap-2 rounded-md p-2  shadow-lg">
                    <p>Workshop Facilitation.</p>
                    <div className="text-center text-sm text-[#3D70F5]">View Details</div>
                </div>
                <div className="flex flex-col justify-between bg-[white] h-24 gap-2 rounded-md p-2  shadow-lg">
                    <p>Professional Development Webinars.</p>
                    <div className="text-center text-sm text-[#3D70F5]">View Details</div>
                </div>
                </div>
            </div>
        </div>
        <div className="bg-[#FFECE6] rounded-lg shadow-md gap-2">
            <div className="flex flex-col gap-2">
            <div className="text-center bg-[#D73F0F] text-white rounded-tl-lg py-2 rounded-tr-lg">Missed</div>
                <div className="flex flex-col p-2 gap-2">
                <div className=" rounded-md p-2">
                    <p className="text-center text-[#D73F0FAD]">Any task beyond Due Date.</p>
                    <p className="text-center text">Nothing to Show.</p>
                </div>
                </div>
            </div>
        </div>        

        </section>
  </div>
  )
}

export default Schedule