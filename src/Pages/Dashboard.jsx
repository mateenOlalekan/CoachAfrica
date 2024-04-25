import Sidebar from "../Component/Dashboard/SideBar";
import Dash from "../Component/Dashboard/Dash/Dash"

function Dashboard() {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar/>
      <Dash/>
    </div>
  )
}

export default Dashboard