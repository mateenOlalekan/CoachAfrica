import Sidebar from "../Sidebar/Sidebar";
import LiveMain from "./LiveMain";

function Live() {
  return (
    <>
        <div className="flex">
            <Sidebar/>
            <LiveMain/>
        </div>
    </>
  )
}

export default Live