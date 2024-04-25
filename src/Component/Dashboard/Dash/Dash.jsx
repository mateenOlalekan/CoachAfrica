import ScheduleHeader from "../Schedule/ScheduleHeader";
import Logo2 from "../../../assets/Image/logo2.png"
function DashMain() {
  return (
    <div className="py-2 px-2 w-full h-screen text-white  pb-3 overflow-y-auto overflow-hidden">
      <ScheduleHeader/>
      <div className="grid place-content-center bg-[#012112] py-14 rounded-md">
        
        <div className="-mt-4 flex flex-col">
          <img src={Logo2}/>
          <p>..creating the future we seek.</p>
        </div>
        
      </div>

      <div className="flex w-full py-5 px-2">
          <div className="w-1/2">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim obcaecati, eligendi nemo atque fugit consequuntur beatae modi perferendis debitis illo quae? Perferendis nisi nulla totam numquam magni amet rerum nobis?</p>
          </div>
          <div className="w-9/10 flex text-right text-[#989898]">
            <p>
              Dedicated to Excellence in Education. Afeez Iyiola is your trusted Professional Teacher Coach  
              Transforming teaching practices with innovative strategies Passionate about empowering educators 
              for student success Let's elevate your teaching journey together..
            </p>
          </div>
      </div>

    </div>
  );
}

export default DashMain;
