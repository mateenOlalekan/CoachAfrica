import ScheduleHeader from "./Schedule/ScheduleHeader";
import Livemain from "../LiveClass/LiveMain";

function Live() {
  return (
    <>
        <div className="p-2  w-full h-full  pb-3 overflow-y-auto overflow-hidden">
           <ScheduleHeader />
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum deserunt impedit magnam ab, a odit repellendus, officiis veniam dolorem eveniet at eum! Modi, molestias maiores. Animi facilis magni doloribus repellendus?</p>
           <Livemain/>
        </div>
    </>
  )
}

export default Live