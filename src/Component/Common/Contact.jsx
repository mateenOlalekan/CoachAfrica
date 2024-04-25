import { FaPhone} from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";


function Contact() {
  return (
    <>
      <div className="py-4 px-36 max-md:px-14 grid grid-cols-2 max-md:grid-cols-1 items-center justify-center gap-10px pt-20">
        <div className="flex flex-col items-center w-full  gap-5 rounded-2xl bg-[#029837] p-8">
          <h1 className="text-center text-3xl text-white font-bold">Get in Touch</h1>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-10">
              <MdMailOutline className="text-3xl text-white" />
              <div className="flex flex-col text-left">
                <p className="text-white font-semibold text-sm">Email Address</p>
                <p className="text-white font-semibold text-sm">info@coachrika.org</p>
              </div>
            </div>

            <div className="flex items-center gap-10">
              <FaPhone className="text-3xl text-white" />
              <div className="flex flex-col text-left">
                <p className="text-white font-semibold text-sm">Phone</p>
                <p className="text-white font-semibold text-sm">+234 806 123 4567</p>
              </div>
            </div>

            <div className="flex items-center gap-10">
              <IoLocationOutline className="text-3xl text-white" />
              <div className="flex flex-col text-left">
                <p className="text-white font-semibold text-sm">Office Address</p>
                <p className="text-white font-semibold text-sm">
                  No 3, Alakaloka, Phase 2, Sanni Road, Olomoore,
                  Abeokuta, Ogun State, Nigeria.
                </p>
              </div>
            </div>
          </div>
        </div>

      <div className="relative py-2 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-2 bg-white mx-8 shadow-lg sm:max-w-xl md:mx-0 rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className=" text-center text-[30px]"> Send a Message</div>
            <div className="">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex flex-col">
                  <label className="leading-loose text-sm">Enter Your Fullname</label>
                  <input type="email" className="px-4 py-2 border-2 border-[#029837]  w-full sm:text-sm  rounded-md focus:outline-none text-gray-600" placeholder="Your full name" />
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col">
                    <label className="leading-loose text-sm">Your Email Address</label>
                    <div className="relative focus-within:text-gray-600 text-gray-400">
                  <input type="text" className="px-4 py-2 border-2 border-[#029837]  w-full sm:text-sm  rounded-md focus:outline-none text-gray-600" placeholder="Your email address" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose text-sm">Your Phone Number</label>
                    <div className="relative focus-within:text-gray-600 text-gray-400">
                  <input type="text" className="px-4 py-2 border-2 border-[#029837]  w-full sm:text-sm  rounded-md focus:outline-none text-gray-600" placeholder="Your phone number" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="leading-loose text-sm">Message</label>
                  <textarea type="text" className="px-4 py-2 border-2 border-[#029837]  w-full sm:text-sm  rounded-md focus:outline-none text-gray-600" placeholder="Message"></textarea>
                 
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="bg-[#029837] flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Contact;
