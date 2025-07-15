import PropTypes from 'prop-types';

function CoachCard({ Event, detail, date, category }) {
  return (
    <div 
      className="flex flex-col w-full transform transition-all duration-500 hover:scale-105"
      data-aos="fade-up"
    >
      <div className="relative overflow-hidden rounded-lg">
        <img 
          src={Event} 
          alt={`Event ${date}`} 
          className="w-full h-[200px] object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#029837] text-white">
            {category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="mt-4">
        <span className="text-sm font-medium text-gray-500">{date}</span>
        <h3 className="text-xl font-bold text-gray-900 mt-2 mb-4 line-clamp-2">
          {detail}
        </h3>
        <button className="text-[#029837] font-medium hover:text-[#038A4F] transition-colors duration-300 flex items-center gap-2">
          Read more
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

CoachCard.propTypes = {
  Event: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default CoachCard;