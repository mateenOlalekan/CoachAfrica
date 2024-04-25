import Sidebar from "../Sidebar/Sidebar"
import LiveMain from "./LiveMain"
function Index() {
  return (
    <div className='flex h-screen w-screen'>
      <Sidebar />
      <LiveMain />
    </div>
  )
}

export default Index;

