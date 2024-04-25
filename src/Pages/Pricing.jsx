import Footer from "../Component/Common/Footer";
import Newsletter from "../Component/Common/NewLetter";
import PriceHeader from "../Component/Pricing/PricingHeader";
import PriceMain from "../Component/Pricing/PricingMain";
import Header from "../Component/Common/Header";
function Pricing() {
  return (
    <>
      <Header/>
      <PriceHeader/>
      <PriceMain/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default Pricing