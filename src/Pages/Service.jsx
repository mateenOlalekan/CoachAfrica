import Header from "../Component/Common/Header";
import Footer from "../Component/Common/Footer";
import Newsletter from "../Component/Common/NewLetter";
import Educator from "../Component/Educator/Educator";
import ServiceContact from "../Component/Services/ServiceOne";
import SerViceContent from "../Component/Services/ServiceTwo";

function Service() {
  return (
    <>
      <Header/>
      <ServiceContact/>
      <SerViceContent/>
      <Educator/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default Service