import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#029837]">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-2">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center mt-6 px-6 py-3 bg-[#029837] text-white rounded-lg hover:bg-[#038A4F] transition-colors"
        >
          <FaHome className="w-4 h-4 mr-2" />
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound; 