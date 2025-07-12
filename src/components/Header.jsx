import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Settings, Share2, MoreHorizontal, LogOut } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear all authentication data
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    
    // Redirect to login page
    navigate('/login');
  };

  return (
    <div className="bg-white border-b border-gray-100 px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div>
          <h1 className="text-2xl font-bold text-blue-300">Overview</h1>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
            <MoreHorizontal className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button 
            onClick={handleLogout}
            className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm font-medium">Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
