import React from 'react';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const RecentActivities = () => {
  const activities = [
    {
      id: 1,
      type: 'event',
      name: 'Registered for Cybersecurity Bootcamp',
      subtitle: 'Event',
      amount: '+50 pts',
      time: '10:24',
      isPositive: true,
    },
    {
      id: 2,
      type: 'event',
      name: 'Attended Blue Team Workshop',
      subtitle: 'Workshop',
      amount: '+30 pts',
      time: '08:15',
      isPositive: true,
    },
    {
      id: 3,
      type: 'event',
      name: 'Completed Red Team Challenge',
      subtitle: 'Challenge',
      amount: '+20 pts',
      time: '07:42',
      isPositive: true,
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">Recent activities</h3>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
        </div>
      </div>

      {/* Activities List */}
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                activity.isPositive 
                  ? 'bg-blue-100 text-blue-600' 
                  : 'bg-blue-200 text-blue-800'
              }`}>
                {activity.isPositive ? (
                  <ArrowDownLeft className="w-4 h-4" />
                ) : (
                  <ArrowUpRight className="w-4 h-4" />
                )}
              </div>
              <div>
                <div className="font-medium text-blue-800 text-sm">{activity.name}</div>
                {activity.subtitle && (
                  <div className="text-xs text-gray-500">{activity.subtitle}</div>
                )}
              </div>
            </div>
            <div className="text-right">
              <div className={`font-semibold text-sm ${
                activity.isPositive ? 'text-blue-600' : 'text-blue-800'
              }`}>
                {activity.amount}
              </div>
              <div className="text-xs text-gray-500">{activity.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;