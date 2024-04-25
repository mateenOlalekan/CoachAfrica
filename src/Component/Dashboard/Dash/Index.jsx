
import Sidebar from "../SideBar";
import Dash from "../Dash/Dash"; 


function Index() {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar/>
      <Dash/>
    </div>
  )
}

export default Index