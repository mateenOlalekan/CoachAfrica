import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaUserTie, FaChartLine, FaHandshake, FaStar } from 'react-icons/fa';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const features = [
    {
      title: 'Expert Coaches',
      description: 'Connect with experienced coaches who understand your unique needs and challenges.',
      icon: FaUserTie
    },
    {
      title: 'Personalized Growth',
      description: 'Receive tailored guidance and strategies to help you achieve your professional goals.',
      icon: FaChartLine
    },
    {
      title: 'Career Advancement',
      description: 'Get the support you need to navigate your career path and reach new heights.',
      icon: FaHandshake
    },
    {
      title: 'Proven Results',
      description: 'Join thousands of professionals who have transformed their careers through coaching.',
      icon: FaStar
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      quote: 'The coaching I received helped me land my dream job and significantly increased my confidence.'
    },
    {
      name: 'Michael Okafor',
      role: 'Software Engineer',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      quote: 'My coach provided invaluable insights that helped me navigate a challenging career transition.'
    },
    {
      name: 'Amina Diallo',
      role: 'Business Owner',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      quote: 'The guidance I received was instrumental in growing my business and developing my leadership skills.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#029837] to-[#038A4F] text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6" data-aos="fade-up">
              Transform Your Career with Expert Coaching
            </h1>
            <p className="text-xl mb-8" data-aos="fade-up" data-aos-delay="100">
              Connect with experienced coaches who will help you achieve your professional goals and unlock your full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="200">
              <Link
                to="/register"
                className="bg-white text-[#029837] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/about"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
            Why Choose CoachAfrica?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-12 h-12 bg-[#029837]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#029837]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">&ldquo;{testimonial.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#029837] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Join thousands of professionals who have achieved their career goals with the help of our expert coaches.
          </p>
          <Link
            to="/register"
            className="inline-block bg-white text-[#029837] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;