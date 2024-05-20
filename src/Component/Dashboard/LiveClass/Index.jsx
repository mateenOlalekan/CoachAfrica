import Sidebar from "../SideBar";
import Live from "../LiveClass/Live";
function Index() {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar/>
      <Live/>
    </div>
  )
}

export default Index