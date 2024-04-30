import { FaHome, FaCalendarAlt} from 'react-icons/fa';
import { MdPerson } from "react-icons/md";
import { HiSignal } from "react-icons/hi2";
import logo from "../../assets/Image/logo1.png";
import { Link } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";

function SideBar() {
  return (
    <div className="flex h-screen w-44 max-lg:w-20 flex-col justify-between border-e bg-white duration-1000 transition-all">
      <div>
        <div className="inline-flex size-auto items-center justify-center px-2 py-4">
          <img src={logo} className='w-auto' alt="Logo" />
        </div>

        <div className="border-t border-gray-100">
          <div className="px-2">
            <ul className="space-y-1 border-t flex flex-col border-gray-100 pt-4 gap-4">
              <li>
                <Link to="#" className="relative flex items-center max-lg:justify-center rounded p-2 gap-3 text-[#6A6A6A]  hover:bg-gray-50 hover:text-[#79C701]">
                  <FaHome className="size-5 opacity-75" />
                  <p className='text-[14px] max-lg:hidden'>Dashboard</p>
                  <span className="invisible absolute start-full ml-2 top-1/2 w-24 transform -translate-y-1/2 rounded bg-gray-600 px-2 py-1.5 text-[14px]  font-medium text-white z-50 group-hover:visible">
                    Live Classes
                  </span>
                </Link>
              </li>
              <li>
                <Link to="#" className="group relative flex items-center max-lg:justify-center rounded p-2 gap-3 text-[#6A6A6A]  hover:bg-gray-50 hover:text-[#79C701]">
                  <HiSignal className="size-5 opacity-75" />
                   <p className='text-[14px] max-lg:hidden'>Live Classes</p>
                  <span className="invisible absolute start-full ml-2 top-1/2 w-24 transform -translate-y-1/2 rounded bg-gray-600 px-2 py-1.5 text-[14px]  font-medium text-white z-50 group-hover:visible">
                    Live Classes
                  </span>
                </Link>
              </li>
              <li>
                <Link to="#" className="group relative flex items-center max-lg:justify-center rounded p-2 gap-3 text-[#6A6A6A]  hover:bg-gray-50 hover:text-[#79C701]">
                  <FaCalendarAlt className="size-5 opacity-75" />
                   <p className='text-[14px] max-lg:hidden'>Schedule</p>
                  <span className="invisible absolute start-full ml-2 top-1/2 transform -translate-y-1/2 rounded bg-gray-600 px-2 py-1.5 text-[14px]  font-medium text-white z-50 group-hover:visible">
                    Schedule
                  </span>
                </Link>
              </li>
              <li>
                <Link to="#" className="group relative flex items-center max-lg:justify-center rounded p-2 gap-3 text-[#6A6A6A]  hover:bg-gray-50 hover:text-[#79C701]">
                  <MdPerson className="size-5 opacity-75" />
                   <p className='text-[14px] max-lg:hidden'>Teacher & I</p>
                  <span className="invisible absolute start-full ml-2 w-24 top-1/2 transform -translate-y-1/2 rounded bg-gray-600 px-2 py-1.5 text-[14px]  font-medium text-white z-50 group-hover:visible">
                    Teacher & I
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-[#FFEFEF] text-red-600 p-2">
        <form action="#">
          <button type="submit" className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-[#79C701]">
            <AiOutlineLogout className="w-5 h-5 opacity-75  text-red-600" />
            <p className='text-[14px] max-lg:hidden  text-red-600'>Logout</p>
            <span className="invisible absolute start-full top-1/2 transform -translate-y-1/2 rounded bg-gray-600 px-2 py-1.5 text-[14px] font-medium text-white z-50 group-hover:visible">
              Logout
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SideBar;


