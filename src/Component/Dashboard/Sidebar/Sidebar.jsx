import { Link } from 'react-router-dom';
import { HiSignal } from "react-icons/hi2";
import { FaCalendarAlt, FaHome } from "react-icons/fa";
import { IoIgPeople } from "react-icons/io";
import logoImage from '../../../assets/Image/logo1.png';
import { HiLogout } from 'react-icons/hi';

function Sidebar() {
  return (
    <div className="flex flex-col items-center justify-between w-36 max-lg:w-24 h-full overflow-hidden text-gray-900 bg-white border-r-2">
      <div className='flex flex-col justify-between'>
        <Link className="flex items-center justify-center w-full px-4 max-lg:px-2 mt-4 border-gray-700" to="/">
          <img src={logoImage} className="h-auto w-36 max-lg:w-24" alt="Logo" />
        </Link>
        <div className="w-full p-2 mt-3">
          <div className="flex flex-col items-center w-full gap-4">
            <Link className="flex items-center w-full px-2 py-4 gap-1 rounded text-[#666666] hover:bg-[#ECF1FF] hover:text-[#79C701]" to="/dashboard">
              <FaHome className="w-6 h-6 max-lg:h-5 max-lg:w-5 stroke-current" />
              <span className="ml-2 text-sm font-medium">Dasboard</span>
            </Link>
            <Link className="flex items-center w-full px-2 py-4 rounded text-[#666666] hover:bg-[#ECF1FF] hover:text-[#79C701]" to="/liveclass">
              <HiSignal className="w-6 h-6 max-lg:h-5 max-lg:w-5 stroke-current" />
              <span className="ml-2 text-sm font-medium">Live Classes</span>
            </Link>
            <Link className="flex items-center w-full px-2 py-4 rounded text-[#666666] hover:bg-[#ECF1FF] hover:text-[#79C701]" to="/">
              <FaCalendarAlt className="w-6 h-6 max-lg:h-5 max-lg:w-5 stroke-current" />
              <span className="ml-2 text-sm font-medium">Schedule</span>
            </Link>
            <Link className="flex items-center w-full px-2 py-4 rounded text-[#666666] hover:bg-[#ECF1FF] hover:text-[#79C701]" to="/teacher">
              <IoIgPeople className="w-6 h-6 max-lg:h-5 max-lg:w-5 stroke-current" />
              <span className="ml-2 text-sm font-medium">Teacher & I</span>
            </Link>
          </div>
        </div>
      </div>

      <Link className="flex items-center justify-center w-full rounded-sm bg-red-300 mt-auto" to="/">
        <div className='px-6 py-4 text-white rounded-lg flex'>
          <HiLogout />
          <span className="ml-2 text-sm font-medium">Logout</span>
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
