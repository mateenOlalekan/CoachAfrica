import Sidebar from "../Sidebar/Sidebar";
import Index from "./Index";
function Teacher() {
  return (
    <>
      <div className="flex">
        <Sidebar/>
        <Index/>
      </div>
    </>
  )
}

export default Teacher