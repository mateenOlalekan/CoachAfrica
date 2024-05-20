import ScheduleHeader from "../Schedule/ScheduleHeader";
import {FaPlus,FaSearch} from "react-icons/fa";
import { useState } from "react";
import LiveClassMain from "./LiveClassMain";
import LiveChat from "./LiveChat";


function Tab({ title, isActive, onClick }) {
  return (
    <div
      className={`px-4 py-2 cursor-pointer ${isActive ? 'text-green-400 border-b-2 border-green-400' : ''}`}
      onClick={onClick}
    >
      {title}
    </div>
  );
}

function Indexmain() {
    const [activeTab,setActiveTab] = useState('tab1');
    const handleTabClick = (tab) =>{
        setActiveTab(tab);
    }
  return (
    <div className="w-screen h-screen p-2">
        <ScheduleHeader/>
        <p className="text-lg font-semibold py-2">Teacher & I</p>
        <div className="flex justify-between max-lg:flex-col gap-y-4">
            <div className="flex gap-10 justify-end max-md:justify-between max-md:w-full items-start text-lg">
                <Tab title="My Teacher" isActive={activeTab === 'tab1'} onClick={() => handleTabClick('tab1')} />
                <Tab title="Chats" isActive={activeTab === 'tab2'} onClick={() => handleTabClick('tab2')} />
            </div>
        
            <div className="flex flex-row gap-2 ">
                <div className="flex justify-center items-center gap-1 bg-[#79C701] rounded-sm py-1 px-4">
                <FaPlus className="text-white "/>
                <p className="text-white hover:cursor-pointer">Add Teacher</p>
            </div>

            <div className="flex flex-row-reverse justify-between  items-center gap-2 bg-[#F1F1F1] rounded-md py-2 px-4">
            <FaSearch className="text-[#9E9E9E] hover:cursor-pointer"/>
            <input type="text" placeholder="search....." className="w-52 max-md:w-40 bg-transparent outline-none"/>
            </div>
        </div>
        </div>
        <section className="grid grid-cols-1 w-full gap-5 px-4 justify-center items-start mt-2 ">
            {activeTab === 'tab1' && <LiveChat/>}
            {activeTab === 'tab2' && <LiveClassMain/>}
        </section>
    </div>
  )
}

export default Indexmain