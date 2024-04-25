import {useEffect} from "react";
import AboutImg from "./about.png";
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa";
import coach01 from "../../assets/Image/coach01.png";
import coach02 from "../../assets/Image/coach02.png";
import coach03 from "../../assets/Image/coach03.png";
import coach04 from "../../assets/Image/coach04.png";
import coach05 from "../../assets/Image/coach05.png";
import coach06 from "../../assets/Image/coach01.png";
import AOS from "aos";
import "aos/dist/aos.css";
function AboutContent() {
  useEffect(()=>{
    AOS.init();
  },[])

  const AboutData = [
    {
      id: 1,
      name: "Mariam Olowu",
      image: coach01,
      description: "Program Officer I",
    },
    {
      id: 2,
      name: "Ufuoma Emmanuel",
      image: coach02,
      description: "Program Officer II",
    },
    {
      id: 3,
      name: "Solomon Asuquo",
      image: coach03,
      description: "Head of Coaches",
    },
    {
      id: 4,
      name: "Emmmanuel Attah",
      image: coach04,
      description: "Monitoring Evaluation and Learning Officer I",
    },
    {
      id: 5,
      name: "Bukhari Amosa",
      image: coach05,
      description: "Monitoring Evaluation and Learning Officer II",
    },
    {
      id: 6,
      name: "Kayode Odunayo",
      image: coach06,
      description: "Kayode Odunayo",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-end w-full py-4">
      {/* Founder Section */}
      <div data-aos="fade-down"
     data-aos-duration="3000" className="grid min-lg:grid-cols-2 py-4  max-w-[82rem] gap-20 items-center 
                      md:grid-cols-2
                      max-md:grid-cols-1 
                      max-w-sm:grid-cols-1   max-w-sm:py-10 px-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-semibold pb-5">Afees Iyiola - FOUNDER</h1>
          <div className="text-[14px]">
            Coachfrika is an innovative edtech social enterprise that provides personalized coaching 
            support to teachers in public and private schools across Nigeria.
          </div>
          <div className="text-[14px]">
            Our mission is to bridge the education inequality gap by empowering teachers with the skills 
            and resources they need to become purposeful, effective, and efficient leaders in their classrooms. 
            Through our hybridized one-on-one coaching approach, we help teachers develop better leadership, 
            problem-solving, and communication skills, ultimately improving the quality of lesson delivery 
            and enhancing learning outcomes. Our unique platform connects passionate educational and leadership 
            coaches with teachers, creating a dynamic ecosystem that fosters professional growth and development.
          </div>
          <div className="text-[14px]">
            Our goal is to provide top-notch coaching to educators throughout Africa to help them become purposeful,
            effective, and efficient teacher-leaders in their classrooms. We believe that through our coaching, teachers 
            will experience greater job satisfaction and career fulfillment while accelerating their progress. 
            Our approach involves coaching, tracking and assessing growth, and seeking feedback from stakeholders. 
            We also believe that coaching can help teachers make wise decisions about their future career paths and 
            develop sustainable leaders who can solve problem.
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="3000" className="relative grid place-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-[-45px] right-[45px]" width="84" height="68" viewBox="0 0 81 70" fill="none">
            <path d="M69.3173 66.1833C66.9993 45.687 50.5958 6.87166 3.52666 15.581" stroke="#FAAF18" strokeWidth="25"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-[-45px] left-[40px]" width="81" height="70" viewBox="0 0 81 70" fill="none">
            <path d="M14.1441 1.81284C15.8213 22.3715 31.0053 61.6798 78.3234 54.4438" stroke="#029837" strokeWidth="25"/>
          </svg>
          <img src={AboutImg} alt="Coach" className="rounded w-7/12" />
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="flex flex-col px-10 pb-10 gap-4 pt-10 bg-[#F7FFF6]">
        <div className="flex flex-col text-center pb-5">
          <h1 className="text-5xl font-[600] pb-5">Our vision</h1>
          <p className="text-[16px] font-[500] ">
            Meet Our Exceptional Team of Seasoned Professionals
          </p>
        </div>

        <div className="grid grid-cols-3 max-md:grid-cols-1 items-center gap-5 px-10 justify-between">
          {AboutData.map((data) => (
            <div key={data.id} data-aos="fade-up"
     data-aos-duration="3000" className="flex flex-col">
              <img src={data.image} alt="Coach" className="rounded" />
              <div className="flex flex-col justify-center items-start overflow-hidden rounded-lg bg-green mt-4 p-4 shadow-box h-36" style={{
                borderRadius: '8px',
                background: '#FFF',
                boxShadow: '0px 10px 25px 0px rgba(0, 0, 51, 0.08)',
              }}>
                <h1 className="text-2xl font-sm pb-5">{data.name}</h1>
                <div className="flex flex-row w-full justify-between gap-4">
                  <p className="text-sm">{data.description}</p>
                  <div className="flex flex-row gap-2 text-[#029837] items-center">
                    <FaTwitter className="text-xl"/>
                    <FaInstagram className="text-xl"/>
                    <FaFacebookF className="text-xl"/>
                    <FaLinkedin className="text-xl"/>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
