import React from 'react';

const CreditCard = () => {
  const username = localStorage.getItem('username');
  return (
    <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl p-6 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -translate-y-20 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full translate-y-16 -translate-x-16"></div>
      </div>
      
      <div className="relative z-10">
        {/* Top */}
        <div className="flex justify-between items-start mb-8">
          <div className="text-lg font-bold">Security Eagles</div>
          <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">Active</span>
        </div>

        {/* Username */}
        <div className="mb-6">
          <div className="text-sm opacity-80 mb-1">Member</div>
          <div className="text-lg font-mono">{username ? username : 'User'}</div>
        </div>

        {/* Bottom */}
        <div className="flex justify-between items-end">
          <div>
            <div className="text-xs opacity-80 mb-1">Membership</div>
            <div className="font-semibold">Pro Member</div>
          </div>
          <div className="text-xs opacity-80">ID: 6580</div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
