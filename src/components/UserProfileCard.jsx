import React from 'react';
import { TrendingUp } from 'lucide-react';
import User from '../Image/persona.jpg'
const UserProfileCard = () => {
  const username = localStorage.getItem('username');

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <img
            src={User}
            alt="User profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{username ? username : 'User'}</h3>
            <p className="text-sm text-gray-500">Cybersecurity Enthusiast</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Chart */}
      <div className="mb-4">
        <div className="flex items-end justify-center space-x-1 h-16">
          <div className="w-2 bg-gradient-to-t from-blue-300 to-blue-500 rounded-full" style={{ height: '60%' }}></div>
          <div className="w-2 bg-gradient-to-t from-blue-300 to-blue-500 rounded-full" style={{ height: '40%' }}></div>
          <div className="w-2 bg-gradient-to-t from-blue-300 to-blue-500 rounded-full" style={{ height: '80%' }}></div>
          <div className="w-2 bg-gradient-to-t from-blue-300 to-blue-500 rounded-full" style={{ height: '90%' }}></div>
          <div className="w-2 bg-gradient-to-t from-blue-300 to-blue-500 rounded-full" style={{ height: '70%' }}></div>
        </div>
      </div>

      {/* Level and Badges */}
      <div className="text-center mb-4">
        <div className="text-2xl font-bold text-blue-800">Level 5</div>
        <div className="flex items-center justify-center space-x-1 text-sm">
          <TrendingUp className="w-4 h-4 text-blue-500" />
          <span className="bg-blue-100 text-blue-500 px-2 py-1 rounded-full text-xs font-medium">+3 Badges</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;