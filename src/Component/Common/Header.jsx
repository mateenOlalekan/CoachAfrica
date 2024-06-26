// import  { useState, useEffect } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { NavLink,Link} from 'react-router-dom';
// import Logo from "../../assets/Image/logo1.png";
// import "./Header.css";

// function Header() {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [scroll, setScroll] = useState(false);

//     useEffect(() => {  
//         const handleScroll = () => {
//             if (window.scrollY > 1) {
//                 setScroll(true);
//             } else {
//                 setScroll(false);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };

//     }, []);



//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen);
//     };

//     return (
//         <header className={`relative pb-6 max-md:pb-0 max-lg:px-10 max-md:px-2 bg-white lg:pb-0 ${scroll ? 'sticky' : ''} ${scroll ? 'shadow-md' : ''}`}>
//             <div className="px-4 mx-auto sm:px-6 lg:px-8 pb-4 max-w-[82rem]">
//                 <nav className="flex items-center justify-between h-16 lg:h-20">
//                     <div className="flex-shrink-0">
//                         <Link to="/" className="flex">
//                             <img className="w-auto h-8 lg:h-12 max-lg:h-12" src={Logo} alt="" />
//                         </Link>
//                     </div>

//                     <button type="button" className="inline-flex p-2 mt-5 text-black transition-all duration-500 rounded-md lg:hidden  hover:bg-gray-100" onClick={toggleMenu}>
//                         {menuOpen ? (
//                             <>
//                                 <FaTimes class="text-lg"/>
//                             </>
//                         ) : (
//                             <>
//                                 <FaBars class="text-lg"/>
//                             </>
//                         )}
//                     </button>

//                     <div className="hidden lg:flex mt-5 lg:items-center lg:ml-auto lg:space-x-10">
//                         <NavLink to="/" activeClassName="active" className="text-lg font-medium text-black transition-all duration-200 hover:text-[#4CAF50] focus:text-[#4CAF50]"> Home </NavLink>
//                         <NavLink to="/about" activeClassName="active" className="text-lg font-medium text-black transition-all duration-200 hover:text-[#4CAF50] focus:text-[#4CAF50]"> About </NavLink>
//                         <NavLink to="/pricing" activeClassName="active" className="text-lg font-medium text-black transition-all duration-200 hover:text-[#4CAF50] focus:text-[#4CAF50]"> Pricing </NavLink>
//                         <NavLink to="/contact" activeClassName="active" className="text-lg font-medium text-black transition-all duration-200 hover:text-[#4CAF50] focus:text-[#4CAF50]"> Contact </NavLink>
//                         <NavLink to="/service" activeClassName="active" className="text-lg font-medium text-black transition-all duration-200 hover:text-[#4CAF50] focus:text-[#4CAF50]"> Service </NavLink>
//                         <NavLink to="/blog" activeClassName="active" className="text-lg font-medium text-black transition-all duration-200 hover:text-[#4CAF50] focus:text-[#4CAF50]"> Blog </NavLink>
//                         <NavLink to="/dashboard" activeClassName="active" className="text-lg font-medium text-black transition-all duration-200 hover:text-[#4CAF50] focus:text-[#4CAF50]"> Dashboard </NavLink>
//                     </div>

//                     <NavLink to="/" className="items-center justify-center hidden px-5 py-2 mt-5 ml-10 text-[16px] font-semibold text-white transition-all duration-200 bg-[#4CAF50] border border-transparent rounded-md lg:inline-flex hover:bg-[#4CAF50] focus:bg-[#4CAF50]" role="button"> Join US </NavLink>
//                 </nav>

//                 <nav className={`pt-4 pb-6 bg-transparent border border-gray-200 rounded-md shadow-md lg:hidden ${menuOpen ? 'block' : 'hidden'}`}>
//                     <div className="flow-root">
//                         <div className="flex flex-col px-6 -my-2 space-y-1">
//                             <NavLink to="/" className="text-lg font-medium text-black transition-all duration-200 hover:text-[#4CAF50] focus:text-[#4CAF50]"> Home </NavLink>
//                             <NavLink to="/about" className="text-lg font-medium text-black transition-all duration-200 hover:text-[#4CAF50] focus:text-[#4CAF50]"> About </NavLink>
//                             <NavLink to="/pricing" className="text-lg font-medium text-black transition-all duration-200 hover:text-[#4CAF50] focus:text-[#4CAF50]"> Pricing </NavLink>
//                             <NavLink to="/contact" className="text-lg font-medium text-black transition-all duration-200 hover:text-[#4CAF50] focus:text-[#4CAF50]"> Contact </NavLink>
//                             <NavLink to="/service" className="text-lg font-medium text-black transition-all duration-200 hover:text-[#4CAF50] focus:text-[#4CAF50]"> Service </NavLink>
//                             <NavLink to="/blog" className="text-lg font-medium text-black transition-all duration-200 hover:text-[#4CAF50] focus:text-[#4CAF50]"> Blog </NavLink>
//                             <NavLink to="/dashboard" className="text-lg font-medium text-black transition-all duration-200 hover:text-[#4CAF50] focus:text-[#4CAF50]"> Dashboard </NavLink>
//                         </div>
//                     </div>

//                     <div className="px-6 mt-6">
//                         <NavLink to="/" className="inline-flex justify-center px-4 py-3 text-lg font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md items-center hover:bg-blue-700 focus:bg-blue-700" role="button"> Get started now </NavLink>
//                     </div>
//                 </nav>
//             </div>
//         </header>
//     );
// }

// export default Header;


import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link,NavLink } from 'react-router-dom';
import Logo from "../../assets/Image/logo1.png";
import "./Header.css";
function Header() {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={` w-full flex justify-between items-center bg-white text-black py-7 lg:px-20 max-lg:px-6 transition-shadow duration-[0.75s] ${scroll ? 'fixed shadow-md z-50' : 'relative'}`}>
      <div className="flex-shrink-0">
        <Link to="/" className="flex">
          <img className="w-auto h-8 lg:h-12 max-lg:h-12 -mt-2" src={Logo} alt="Logo" />
        </Link>
      </div>

      <button type="button" className="inline-flex p-2 text-black transition-all duration-500 rounded-md xl:hidden  " onClick={toggleMenu}>
        {menuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
      </button>
      
      <div className='flex justify-center items-center max-xl:hidden'>
        <div className="hidden lg:flex mt-1 lg:items-center lg:ml-auto lg:space-x-10">
                <NavLink to="/" activeClassName="active" className="text-lg font-medium text-black transition-all duration-200 hover:text-[#4CAF50] focus:text-[#4CAF50]"> Home </NavLink>
                <NavLink to="/about" activeClassName="active" className="text-lg font-medium text-black transition-all duration-200 hover:text-[#4CAF50] focus:text-[#4CAF50]"> About </NavLink>
                <NavLink to="/pricing" activeClassName="active" className="text-lg font-medium text-black transition-all duration-200 hover:text-[#4CAF50] focus:text-[#4CAF50]"> Pricing </NavLink>
                <NavLink to="/contact" activeClassName="active" className="text-lg font-medium text-black transition-all duration-200 hover:text-[#4CAF50] focus:text-[#4CAF50]"> Contact </NavLink>
                <NavLink to="/service" activeClassName="active" className="text-lg font-medium text-black transition-all duration-200 hover:text-[#4CAF50] focus:text-[#4CAF50]"> Service </NavLink>
                <NavLink to="/blog" activeClassName="active" className="text-lg font-medium text-black transition-all duration-200 hover:text-[#4CAF50] focus:text-[#4CAF50]"> Blog </NavLink>
                <NavLink to="/dashboard" activeClassName="active" className="text-lg font-medium text-black transition-all duration-200 hover:text-[#4CAF50] focus:text-[#4CAF50]"> Dashboard </NavLink>
            </div>
            <NavLink to="/" className="items-center justify-center hidden px-5 py-2  ml-10 text-[16px] font-semibold text-white transition-all duration-200 bg-[#4CAF50] border border-transparent rounded-md lg:inline-flex hover:bg-[#4CAF50] focus:bg-[#4CAF50]" role="button"> Join US </NavLink>
      </div>
                      
                      <nav className={`flex flex-col h-screen absolute w-48 top-24 pt-4 pb-6 bg-white border border-gray-200 transition-all duration-500  shadow-md lg:hidden z-50 ${menuOpen ? 'block right-0' : ' right-[1000px]'}`}>
                    <div className="flow-root">
                        <div className="flex flex-col p-6 -my-2 space-y-1 gap-10 ">
                            <NavLink to="/" className="text-lg font-medium text-black transition-all duration-200 hover:text-[#4CAF50] focus:text-[#4CAF50]"> Home </NavLink>
                            <NavLink to="/about" className="text-lg font-medium text-black transition-all duration-200 hover:text-[#4CAF50] focus:text-[#4CAF50]"> About </NavLink>
                            <NavLink to="/pricing" className="text-lg font-medium text-black transition-all duration-200 hover:text-[#4CAF50] focus:text-[#4CAF50]"> Pricing </NavLink>
                            <NavLink to="/contact" className="text-lg font-medium text-black transition-all duration-200 hover:text-[#4CAF50] focus:text-[#4CAF50]"> Contact </NavLink>
                            <NavLink to="/service" className="text-lg font-medium text-black transition-all duration-200 hover:text-[#4CAF50] focus:text-[#4CAF50]"> Service </NavLink>
                            <NavLink to="/blog" className="text-lg font-medium text-black transition-all duration-200 hover:text-[#4CAF50] focus:text-[#4CAF50]"> Blog </NavLink>
                            <NavLink to="/dashboard" className="text-lg font-medium text-black transition-all duration-200 hover:text-[#4CAF50] focus:text-[#4CAF50]"> Dashboard </NavLink>
                        </div>
                    </div>
                </nav>
     
      
    </header>
  );
}

export default Header;
