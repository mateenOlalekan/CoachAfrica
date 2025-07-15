import { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit, FaSave } from 'react-icons/fa';

const DashboardProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    location: 'New York, USA',
    bio: 'Experienced professional seeking career growth and development through coaching.',
    userType: 'client'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to update the profile
    console.log('Profile updated:', profile);
    setIsEditing(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center text-[#029837] hover:text-[#038A4F]"
        >
          {isEditing ? (
            <>
              <FaSave className="w-4 h-4 mr-2" />
              Save Changes
            </>
          ) : (
            <>
              <FaEdit className="w-4 h-4 mr-2" />
              Edit Profile
            </>
          )}
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <FaUser className="w-12 h-12 text-gray-400" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">{profile.name}</h2>
          <p className="text-gray-500">{profile.userType === 'client' ? 'Client' : 'Coach'}</p>
        </div>

        {isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029837] focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029837] focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029837] focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={profile.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029837] focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Bio</label>
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029837] focus:border-transparent"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#029837] text-white px-6 py-2 rounded-lg hover:bg-[#038A4F] transition-colors"
              >
                Save Changes
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center text-gray-600">
              <FaEnvelope className="w-5 h-5 mr-3" />
              <span>{profile.email}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FaPhone className="w-5 h-5 mr-3" />
              <span>{profile.phone}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FaMapMarkerAlt className="w-5 h-5 mr-3" />
              <span>{profile.location}</span>
            </div>
            <div className="pt-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">About</h3>
              <p className="text-gray-600">{profile.bio}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardProfile; 