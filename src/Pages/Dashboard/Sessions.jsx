import { useState } from 'react';
import { FaCalendarAlt, FaClock, FaUser, FaVideo, FaCheck, FaTimes } from 'react-icons/fa';

const DashboardSessions = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const sessions = [
    {
      id: 1,
      title: 'Career Development Session',
      coach: 'Sarah Johnson',
      date: '2024-03-20',
      time: '14:00',
      duration: '60 mins',
      status: 'upcoming',
      type: 'video'
    },
    {
      id: 2,
      title: 'Leadership Skills Workshop',
      coach: 'Michael Okafor',
      date: '2024-03-18',
      time: '10:00',
      duration: '90 mins',
      status: 'completed',
      type: 'video'
    },
    {
      id: 3,
      title: 'Personal Development Coaching',
      coach: 'Amina Diallo',
      date: '2024-03-15',
      time: '15:30',
      duration: '60 mins',
      status: 'completed',
      type: 'video'
    }
  ];

  const filteredSessions = sessions.filter(session => 
    activeTab === 'upcoming' ? session.status === 'upcoming' : session.status === 'completed'
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Sessions</h1>
        <button className="bg-[#029837] text-white px-4 py-2 rounded-lg hover:bg-[#038A4F] transition-colors">
          Schedule New Session
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === 'upcoming'
              ? 'text-[#029837] border-b-2 border-[#029837]'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming Sessions
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === 'completed'
              ? 'text-[#029837] border-b-2 border-[#029837]'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('completed')}
        >
          Completed Sessions
        </button>
      </div>

      {/* Sessions List */}
      <div className="space-y-4">
        {filteredSessions.map(session => (
          <div
            key={session.id}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">{session.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <FaUser className="w-4 h-4 mr-2" />
                    {session.coach}
                  </div>
                  <div className="flex items-center">
                    <FaCalendarAlt className="w-4 h-4 mr-2" />
                    {session.date}
                  </div>
                  <div className="flex items-center">
                    <FaClock className="w-4 h-4 mr-2" />
                    {session.time} ({session.duration})
                  </div>
                  <div className="flex items-center">
                    <FaVideo className="w-4 h-4 mr-2" />
                    {session.type === 'video' ? 'Video Call' : 'In Person'}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                {session.status === 'upcoming' ? (
                  <>
                    <button className="text-[#029837] hover:text-[#038A4F]">
                      Join Session
                    </button>
                    <button className="text-red-600 hover:text-red-700">
                      Cancel
                    </button>
                  </>
                ) : (
                  <div className="flex items-center text-green-600">
                    <FaCheck className="w-4 h-4 mr-2" />
                    Completed
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardSessions; 