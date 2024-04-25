
import Header from "../Component/Common/Header";
import Hero from "../Component/Hero/Hero";
import Footer from "../Component/Common/Footer";
import Newsletter from "../Component/Common/NewLetter";
import Frame from "../Component/Frame/Frame";
import Educator from "../Component/Educator/Educator";
import Coach from "../Component/Coach/Coach";
import Test from "../Component/Test/Test";
import Vision from "../Component/Vision";
import Review from "../Component/Review";
function Home() {
  return (
    <>
    <div className="relative">
      <Header/>
      <Hero />
      <Review/>
      <Vision />
      <Test/>
      <Coach/>
      <Educator/>
      <Frame/>
      <Newsletter />
      <Footer />
    </div>

    </>
  )
}

export default Home