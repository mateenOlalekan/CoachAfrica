import Sidebar from "../../Dashboard/SideBar";
import Schedule from "../Schedule/Schedule";

function Index() {
  return (
    <div className="flex w-screen h-screen">
        <Sidebar/>
        <Schedule/>
    </div>
  )
}

export default Index