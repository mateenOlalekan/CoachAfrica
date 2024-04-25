import EducatorCard from "./EducatorCard";
import Educa01 from "../../assets/Image/ellipse12.png";
import Educa02 from "../../assets/Image/ellipse12.png";
import Educa03 from "../../assets/Image/ellipse12.png";

const educatorData = [
  { Name: "Anita",imgSrc: Educa01, Country: "South Africa", College: "Oxland Schools", Capital: "CapeTown",info:"Using the coachfika platform has been a game-changer in my teaching career. The personalized support I received from my coach significantly enhanced my instructional strategies"},
  { Name: "Precious",imgSrc: Educa02, Country: "Ghana", College: "Afema College", Capital: "Accra",info:"The platform's user-friendly interface and insightful resources made the entire experience seamless. It's a must-have for any educator looking to grow and excel in their profession."},
  { Name: "Mrs Kinston",imgSrc: Educa03, Country: "Nigeria", College: "layola College", Capital: "Abeokuta",info:"I can't express how valuable my experience with the Coachfrika. The platform provided a space for meaningful collaboration, allowing me to discuss challenges and receive constructive feedback.."},
  { Name: "Anita",imgSrc: Educa01, Country: "South Africa", College: "Oxland Schools", Capital: "CapeTown",info:"I've been using the coaching platform for a year, and it's been an incredible asset to my teaching toolkit." },
  { Name: "Precious",imgSrc: Educa02, Country: "Ghana", College: "Afema College", Capital: "Accra",info:"I've been using the coaching platform for a year, and it's been an incredible asset to my teaching toolkit." },
  { Name: "Mrs Kinston",imgSrc: Educa03, Country: "Nigeria", College: "layola College", Capital: "Abeokuta",info:"The coaching platform surpassed my expectations. The curated resources and one-on-one coaching sessions provided practical strategies I could implement immediately." },
  { Name: "Anita",imgSrc: Educa01, Country: "South Africa", College: "Oxland Schools", Capital: "CapeTown",info:"I've been using the coaching platform for a year, and it's been an incredible asset to my teaching toolkit." },
  { Name: "Precious",imgSrc: Educa02, Country: "Ghana", College: "Afema College", Capital: "Accra",info:"The coaching platform surpassed my expectations. The curated resources and one-on-one coaching sessions provided practical strategies I could implement immediately." },
  { Name: "Mrs Kinston",imgSrc: Educa03, Country: "Nigeria", College: "layola College", Capital: "Abeokuta",info:"The coaching platform has been an essential part of my professional development. The ability to connect with an experienced coach remotely has been a lifesaver" },

  // Add more data as needed
];

function Educator() {
  return (
    <div className="w-full  h-screen bg-[#F7FFF6]  overflow-y-scroll">
      <div className="flex flex-col items-center pt-4 pb-8 lg:px-30 sm:px-10 border-t border-b-2">
        <h1 className="text-3xl font-bold text-center pt-10 pb-10">
          What Our Educators Are<br /> Saying
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 lg:px-12 md:px-10 max-sm:px-5">
          {educatorData.map((educator, index) => (
            <EducatorCard key={index} {...educator} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Educator;
