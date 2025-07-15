import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaUsers, FaCalendarAlt, FaStar, FaChartLine } from 'react-icons/fa';

const DashboardOverview = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const stats = [
    {
      title: 'Total Sessions',
      value: '12',
      change: '+2 this month',
      icon: FaCalendarAlt,
      color: 'text-blue-500'
    },
    {
      title: 'Active Coaches',
      value: '5',
      change: '+1 this month',
      icon: FaUsers,
      color: 'text-green-500'
    },
    {
      title: 'Average Rating',
      value: '4.8',
      change: '+0.2 this month',
      icon: FaStar,
      color: 'text-yellow-500'
    },
    {
      title: 'Progress',
      value: '85%',
      change: '+5% this month',
      icon: FaChartLine,
      color: 'text-purple-500'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'session',
      title: 'Upcoming Session',
      description: 'Career Development with Coach Sarah',
      time: 'Tomorrow at 2:00 PM',
      action: 'Join Session'
    },
    {
      id: 2,
      type: 'review',
      title: 'New Review',
      description: 'Received 5 stars from your last session',
      time: '2 hours ago',
      action: 'View Details'
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className="text-sm text-green-500 mt-1">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-full ${stat.color} bg-opacity-10`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div
              key={activity.id}
              className="flex items-center justify-between p-4 border border-gray-100 rounded-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div>
                <h3 className="font-medium text-gray-900">{activity.title}</h3>
                <p className="text-sm text-gray-500">{activity.description}</p>
                <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
              </div>
              <button className="text-[#029837] hover:text-[#038A4F] font-medium">
                {activity.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview; 