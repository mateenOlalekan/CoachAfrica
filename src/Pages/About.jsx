import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaBullseye, FaHandshake, FaUsers, FaLightbulb } from 'react-icons/fa';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      bio: 'With over 15 years of experience in leadership development, Sarah founded CoachAfrica to bridge the gap in professional coaching across the continent.'
    },
    {
      name: 'Michael Okafor',
      role: 'Head of Coaching',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      bio: 'Michael brings extensive experience in executive coaching and has helped hundreds of professionals achieve their career goals.'
    },
    {
      name: 'Amina Diallo',
      role: 'Operations Manager',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      bio: 'Amina oversees the day-to-day operations and ensures seamless delivery of coaching services to our clients.'
    },
    {
      name: 'David Mensah',
      role: 'Technical Lead',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      bio: 'David leads our technology initiatives, ensuring a smooth and secure platform experience for all users.'
    }
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality coaching services and maintaining professional standards.',
      icon: FaBullseye
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical practices in all our interactions.',
      icon: FaHandshake
    },
    {
      title: 'Innovation',
      description: 'We continuously evolve our services and platform to meet the changing needs of our clients.',
      icon: FaLightbulb
    },
    {
      title: 'Community',
      description: 'We foster a supportive environment where professionals can connect, learn, and grow together.',
      icon: FaUsers
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#029837] to-[#038A4F] text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6" data-aos="fade-up">
              About CoachAfrica
            </h1>
            <p className="text-xl" data-aos="fade-up" data-aos-delay="100">
              We are dedicated to empowering professionals across Africa through expert coaching and mentorship.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600" data-aos="fade-up" data-aos-delay="100">
              At CoachAfrica, we believe in the transformative power of professional coaching. Our mission is to make high-quality coaching accessible to professionals across Africa, helping them achieve their career goals and unlock their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-12 h-12 bg-[#029837]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#029837]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center mb-1">{member.name}</h3>
                <p className="text-[#029837] text-center mb-4">{member.role}</p>
                <p className="text-gray-600 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#029837] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
            Join Our Mission
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Whether you&apos;re looking to find a coach or become one, we invite you to be part of our growing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
            <Link
              to="/register?type=coach"
              className="bg-white text-[#029837] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Become a Coach
            </Link>
            <Link
              to="/register?type=client"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Find a Coach
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;