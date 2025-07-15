import { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaCalendarAlt, FaCog, FaSignOutAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Dashboard = ({ setIsAuthenticated }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Set active tab based on current route
    const path = location.pathname.split('/').pop();
    setActiveTab(path || 'overview');
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/');
  };

  const menuItems = [
    {
      path: 'overview',
      icon: FaHome,
      label: 'Overview'
    },
    {
      path: 'profile',
      icon: FaUser,
      label: 'Profile'
    },
    {
      path: 'sessions',
      icon: FaCalendarAlt,
      label: 'Sessions'
    },
    {
      path: 'settings',
      icon: FaCog,
      label: 'Settings'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-[#029837]">CoachAfrica</h1>
          </div>
          <nav className="mt-6">
            <div className="px-4 space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={`/dashboard/${item.path}`}
                    className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
                      activeTab === item.path
                        ? 'bg-[#029837] text-white'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg"
            >
              <FaSignOutAlt className="w-5 h-5 mr-3" />
              Logout
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  setIsAuthenticated: PropTypes.func.isRequired
};

export default Dashboard;