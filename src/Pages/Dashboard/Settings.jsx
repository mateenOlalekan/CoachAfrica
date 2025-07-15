import { useState } from 'react';
import { FaBell, FaLock, FaLanguage, FaPalette, FaSave } from 'react-icons/fa';

const DashboardSettings = () => {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      sessionReminders: true,
      newMessages: true
    },
    security: {
      twoFactorAuth: false,
      password: '',
      confirmPassword: ''
    },
    preferences: {
      language: 'en',
      theme: 'light',
      timezone: 'UTC'
    }
  });

  const handleChange = (section, field, value) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to save the settings
    console.log('Settings saved:', settings);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Notifications Section */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center mb-4">
            <FaBell className="w-5 h-5 text-[#029837] mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Email Notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.notifications.email}
                  onChange={(e) => handleChange('notifications', 'email', e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#029837]"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Push Notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.notifications.push}
                  onChange={(e) => handleChange('notifications', 'push', e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#029837]"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Session Reminders</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.notifications.sessionReminders}
                  onChange={(e) => handleChange('notifications', 'sessionReminders', e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#029837]"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">New Messages</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.notifications.newMessages}
                  onChange={(e) => handleChange('notifications', 'newMessages', e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#029837]"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center mb-4">
            <FaLock className="w-5 h-5 text-[#029837] mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">Security</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Two-Factor Authentication</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.security.twoFactorAuth}
                  onChange={(e) => handleChange('security', 'twoFactorAuth', e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#029837]"></div>
              </label>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Change Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029837] focus:border-transparent"
                placeholder="New Password"
                value={settings.security.password}
                onChange={(e) => handleChange('security', 'password', e.target.value)}
              />
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029837] focus:border-transparent"
                placeholder="Confirm New Password"
                value={settings.security.confirmPassword}
                onChange={(e) => handleChange('security', 'confirmPassword', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center mb-4">
            <FaPalette className="w-5 h-5 text-[#029837] mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">Preferences</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Language</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029837] focus:border-transparent"
                value={settings.preferences.language}
                onChange={(e) => handleChange('preferences', 'language', e.target.value)}
              >
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Theme</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029837] focus:border-transparent"
                value={settings.preferences.theme}
                onChange={(e) => handleChange('preferences', 'theme', e.target.value)}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Timezone</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029837] focus:border-transparent"
                value={settings.preferences.timezone}
                onChange={(e) => handleChange('preferences', 'timezone', e.target.value)}
              >
                <option value="UTC">UTC</option>
                <option value="EST">Eastern Time</option>
                <option value="CET">Central European Time</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#029837] text-white px-6 py-2 rounded-lg hover:bg-[#038A4F] transition-colors flex items-center"
          >
            <FaSave className="w-4 h-4 mr-2" />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default DashboardSettings; 