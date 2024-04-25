
import main from "../../assets/Image/blogimg.png";
import picture1 from "../../assets/Image/picture01.jpg";
import picture2 from "../../assets/Image/picture02.jpg";
import picture3 from "../../assets/Image/picture03.jpg";
import picture4 from "../../assets/Image/picture04.jpg";
import picture5 from "../../assets/Image/picture06.jpg";
import picture6 from "../../assets/Image/picture07.jpg";
import picture7 from "../../assets/Image/picture08.jpg";
import picture8 from "../../assets/Image/picture09.jpg";
import picture9 from "../../assets/Image/picture10.jpg";
import './Style.css';
import Coach from "../../Component/Coach/Coach";
import BlogHeader from "./BlogHeader";

function BlogHead() {
  return (
    <>
      
      <div className="flex flex-col px-24 pt-10 pb-5 max-md:px-10 gap-6">
        <img src={main} alt="Blog Header" className="w-full mb-3 h-[600px] max-lg:h-auto" />
        <div className="flex flex-col gap-6 text-justify">
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl">
              Coachfrika Partnered Ogun SUBEB
            </h1>
            <p className="text-sm">
              September 12, 2023
            </p>
          </div>
          <div>
            In an exciting development for the education sector, Coachfrika has officially partnered with the Ogun State Universal Basic Education Board (SUBEB) to bring transformative change to classrooms across the state. This groundbreaking collaboration marks a significant stride towards enhancing teaching methodologies, professional development, and overall educational excellence.
            
            Empowering Educators: The primary focus of this partnership is to empower educators with the tools and strategies needed to deliver high-quality education. Coachfrika's innovative coaching platform will be seamlessly integrated into Ogun SUBEB's initiatives, offering educators personalized coaching experiences that cater to their unique needs and aspirations. Through this collaboration, teachers can expect tailored support that fosters continuous growth and success in their teaching careers.

            Revolutionizing Professional Development: Gone are the days of generic professional development programs. With Coachfrika's cutting-edge platform, Ogun SUBEB is poised to revolutionize the landscape of teacher training. The personalized coaching services provided will not only address the current challenges faced by educators but will also focus on cultivating skills that align with modern pedagogical trends and technological advancements.

            Creating a Supportive Community: Beyond individual coaching sessions, the partnership aims to create a supportive community of educators. Through collaborative forums, webinars, and shared resources, teachers can engage in meaningful discussions, exchange best practices, and build a network that extends beyond geographical boundaries. This sense of community fosters a culture of continuous learning and professional camaraderie.

            Enhancing Student Learning: Ultimately, the Coachfrika and Ogun SUBEB partnership is centered around improving student outcomes. By investing in the professional development of educators, the ripple effect is felt in classrooms, leading to enhanced learning experiences for students. The collaboration aligns with the shared goal of ensuring that every child in Ogun State receives a high-quality education that prepares them for a dynamic future.

            Looking Ahead: As we anticipate the positive impact of this collaboration, the Coachfrika and Ogun SUBEB partnership symbolizes a commitment to excellence in education. By providing personalized coaching services, fostering a supportive community, and revolutionizing professional development, this collaboration sets the stage for a brighter future for both educators and students alike.

            Stay tuned as we embark on this transformative journey together—where education becomes a catalyst for empowerment, innovation, and success.
          </div>
        </div>

      </div>
        <div className="py-6 px-20 max-md:px-10 flex bg-[#F7FFF6] flex-col gap-6 justify-center items-center">
          <div className="text-center text-4xl py-4">Gallery</div>
<div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-2  w-full gap-3">
  <img src={picture1} className="col-span-1 h-52 w-80 object-cover  rounded-lg" />
  <img src={picture2} className=" row-span-2 col-span-2 max-md:row-span-1 max-md:col-span-1 max-md:h-52 max-md:w-80 object-cover rounded-lg" />
  <img src={picture3} className="col-span-1 h-52 w-80  object-cover rounded-lg" />
  <img src={picture4} className="col-span-1 h-52 w-80 object-cover rounded-lg" />
  <img src={picture5} className="col-span-1 h-52 w-80 object-cover rounded-lg" />
  <img src={picture6} className="col-span-1 h-52 w-80 object-cover rounded-lg" />
  <img src={picture7} className="col-span-1 h-52 w-80 object-cover rounded-lg" />
  <img src={picture8} className="col-span-1 h-52 w-80 object-cover rounded-lg" />
  <img src={picture9} className="col-span-1 h-52 w-80 object-cover rounded-lg" />
</div>

          <div className="px-8 py-3 rounded-md border-2 border-solid border-[#029837] text-[#029837]">
            See More
          </div>
        </div>
      <div className="mb-10">
        <Coach />
      </div>
    </>
  );
}

export default BlogHead;
