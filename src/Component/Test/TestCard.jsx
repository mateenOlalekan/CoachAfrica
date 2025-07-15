import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TestCard = ({ image, name, country, description, categories }) => (
  <div 
    className="flex flex-col w-full transform transition-all duration-500 hover:scale-105"
    data-aos="fade-up"
  >
    <div className="relative overflow-hidden rounded-lg">
      <img 
        src={image} 
        className="w-full h-[300px] object-cover transition-transform duration-500 hover:scale-110" 
        alt={`Coach ${name}`} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </div>
    
    <div className="flex flex-col bg-white mt-4 p-6 rounded-lg shadow-lg">
      <div className="flex flex-row justify-between items-center mb-4">
        <h3 className="font-bold text-xl text-gray-900">{`Coach ${name}`}</h3>
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-600">{country}</span>
          <img
            loading="lazy"
            src={`https://flagcdn.com/w40/${country.toLowerCase()}.png`}
            className="w-6 h-4 object-cover rounded"
            alt={`Flag of ${country}`}
          />
        </div>
      </div>
      
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category, index) => (
          <span 
            key={index}
            className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700"
          >
            {category}
          </span>
        ))}
      </div>
      
      <button className="w-full py-2 px-4 text-center text-[#029837] text-sm font-medium border-2 border-[#029837] rounded-lg hover:bg-[#029837] hover:text-white transition-colors duration-300">
        Book a Session
      </button>
    </div>
  </div>
);

TestCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TestCard;
