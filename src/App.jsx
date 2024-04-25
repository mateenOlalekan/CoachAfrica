import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Blog from "./Pages/Blog";
import Dashboard from "./Pages/Dashboard";
// import Teacher from "./Component/Dashboard/Teacher/Teacher";
// import LiveClass from "./Component/Dashboard/Live Class/Index";
// import Login from "./Pages/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/blog" element={<Blog/>}/>
         <Route path="/dashboard" element={<Dashboard/>}/>
        {/* <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/liveclass" element={<LiveClass/>}/>
        <Route path="/teacher" element={<Teacher/>}/> */}
      </Routes>
    </>
  )
}

export default App

























        {/* 
 */
        }