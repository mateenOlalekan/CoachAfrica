import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ReviewItem = ({ count, label, index }) => (
  <div 
    className="text-center p-6 transform transition-all duration-500 hover:scale-105"
    data-aos="fade-up"
    data-aos-delay={index * 100}
  >
    <h2 className="text-5xl sm:text-6xl font-bold text-[#BEF200] mb-2">{count}</h2>
    <p className="text-base sm:text-lg font-medium text-white/90">{label}</p>
  </div>
);

const Review = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  const stats = [
    { count: "3", label: "Leader Coaches Onboarded" },
    { count: "5", label: "School Benefitted" },
    { count: "10", label: "Teacher Leader Onboarded" },
    { count: "500+", label: "Students Impacted" }
  ];

  return (
    <div className="w-full bg-[#012112] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ReviewItem 
              key={index}
              count={stat.count}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
