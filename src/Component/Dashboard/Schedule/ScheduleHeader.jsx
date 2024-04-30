import { FiBell, FiUser} from 'react-icons/fi';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineLogout } from "react-icons/ai";
import { FaHome, FaUser} from 'react-icons/fa';

const dropdownItems = [
  { icon: <FaHome />, name: 'Home', textColor: 'text-purple-500', bgColor: 'bg-purple-100' },
  { icon: <FaUser />, name: 'Profile', textColor: 'text-blue-500', bgColor: 'bg-blue-100' },
  { icon: <AiOutlineLogout />, name: 'Logout', textColor: 'text-red-500', bgColor: 'bg-red-100' }
];

function ScheduleHeader() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="relative">
      <div className="flex justify-end items-center gap-5 px-4 -pt-2 pb-2">
        <div className="text-gray-600 hover:text-gray-800 bg-[#038A4F] p-1.5 rounded-full">
          <FiBell className="text-[16px] max-md:text-sm text-white" />
        </div>

        <div className="flex-none z-[9999] relative bg-[#ECFFEE] rounded-full gap-4">
          <button
            onClick={toggleDropdown}
            className="flex flex-row justify-between items-center w-max px-2 py-2 text-gray-700 rounded-full shadow focus:outline-none "
          >
            <div className="bg-[#038a4f] text-white rounded-full p-1 hover:text-white">
              <FiUser className="text-sm max-md:text-sm" />
            </div>
            {isOpen ? (
              <BiChevronUp className="w-5 h-5 stroke-current" />
            ) : (
              <BiChevronDown className="w-5 h-5 stroke-current" />
            )}
            {isOpen && (
              <div  className="absolute right-0 mt-[11.5rem] w-48  bg-white overflow-hidden  shadow-lg border rounded-lg">
                {/* Dropdown items */}
                <ul>
                  {dropdownItems.map((item, index) => (
                    <div key={index}>
                      <li className="flex items-center py-2 px-4 hover:bg-gray-100">
                        <div className={`${item.textColor} ${item.bgColor} rounded-full p-1.5`}>
                          <span>{item.icon}</span>
                        </div>
                        <span className="ml-6">{item.name}</span>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default ScheduleHeader;
