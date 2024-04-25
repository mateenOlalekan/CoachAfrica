import { useState } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import LiveClass from './LiveClass';
import ClassHistory from './LiveHistory';
import ScheduleHeader from '../Schedule/ScheduleHeader';

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

function LiveMain() {
  const [activeTab, setActiveTab] = useState('tab1');
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="py-2 px-2 mt-2 w-full  pb-3 overflow-y-auto overflow-hidden">
      <ScheduleHeader/>

      <div className='flex px-7 text-lg text-black justify-between items-center'>
        <div className="flex gap-10 justify-end max-md:justify-between max-md:w-full items-start text-lg">
          <Tab title="Live Classes" isActive={activeTab === 'tab1'} onClick={() => handleTabClick('tab1')} />
          <Tab title="Class History" isActive={activeTab === 'tab2'} onClick={() => handleTabClick('tab2')} />
        </div>

       <div className='flex gap-4 '>
          <div className="flex justify-center items-center gap-2 bg-green-500 max-md:w-max max-md:text-sm rounded-sm p-2">
            <FaPlus className="text-white" />
            <p className="text-white">New Schedule</p>
          </div>
          <div className="flex flex-row justify-start items-center gap-2 bg-gray-200 rounded-md py-2 px-4">
            <FaSearch className="text-gray-600" />
            <input type="text" placeholder="Search..." className="w-52 max-md:w-40 bg-transparent outline-none" />
          </div>
       </div>
      </div>


      <section className="grid grid-cols-1 w-full gap-5 px-4 justify-center items-start mt-2 ">
        {activeTab === 'tab1' && <LiveClass />}
        {activeTab === 'tab2' && <ClassHistory />}
      </section>
    </div>
  );
}

export default LiveMain;
