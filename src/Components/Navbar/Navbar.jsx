import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Navbar = ({ isAuthenticated }) => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-[#029837]">
            CoachAfrica
          </Link>

          <div className="flex items-center space-x-4">
            <Link to="/about" className="text-gray-600 hover:text-[#029837]">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-[#029837]">
              Contact
            </Link>
            {isAuthenticated ? (
              <Link
                to="/dashboard"
                className="flex items-center text-gray-600 hover:text-[#029837]"
              >
                <FaUser className="w-5 h-5 mr-2" />
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-[#029837]"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-[#029837] text-white px-4 py-2 rounded-lg hover:bg-[#038A4F] transition-colors"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

export default Navbar; 