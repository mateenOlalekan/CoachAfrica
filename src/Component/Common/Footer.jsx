import "./Footer.css";
import FooterLogo from "../../assets/Image/logo2.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer_container">
          <div className="footer_item">
            <div className="footer_p">
              Coachfrika is an innovative edtech social enterprise that provides personalized coaching support to teachers in public and private schools across Nigeria. .....
            </div>
            <img src={FooterLogo} alt="logo" className="footer_logo" />
            <p className="footer_motto">..The best way to learn is to teach.</p>
          </div>
          <div className="footer_item">
            <h3>Quick Links</h3>
            <ul className="footer_list">
              <li className="footer_list_item"><Link to="/home">Home</Link></li>
              <li className="footer_list_item"><Link to="/about">About</Link></li>
              <li className="footer_list_item"><Link to="/signup">Sign Up</Link></li>
            </ul>
          </div>
          <div className="footer_item">
            <h3>Company</h3>
            <ul className="footer_list">
              <li className="footer_list_item"><Link to="/services">Services</Link></li>
              <li className="footer_list_item"><Link to="/contact">Contact</Link></li>
              <li className="footer_list_item"><Link to="/policy">Private Policy</Link></li>
            </ul>
          </div>
          <div className="footer_item">
            <h3>Connect with Us</h3>
            <ul className="footer_list">
              <li className="footer_socials">
                <FaFacebookF className="footer_socials_icon" />
                <FaTwitter className="footer_socials_icon" />
                <FaInstagram className="footer_socials_icon" />
                <FaLinkedin className="footer_socials_icon" />
              </li>
              {/* Remove this div if not needed */}
              <li className="footer_btn w-3/4">Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="footer_bottom_container">
          <p className="footer_copy">
            Copyright Exclusive 2023. All right reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
