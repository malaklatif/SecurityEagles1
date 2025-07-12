import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const LastCostsChart = () => {
  const data = [
    { name: 'Jan', achievements: 1 },
    { name: 'Feb', achievements: 2 },
    { name: 'Mar', achievements: 3 },
    { name: 'Apr', achievements: 2 },
    { name: 'May', achievements: 4 },
  ];

  return (
    <div className="bg-white rounded-xl p-6 border border-blue-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-blue-800">Recent Achievements</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>
      
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#3B82F6' }}
            />
            <YAxis hide />
            <Bar 
              dataKey="achievements" 
              fill="#3B82F6" 
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex justify-between text-xs text-blue-500 mt-4">
        <span>4 this month</span>
        <span className="flex items-center space-x-1">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          <span>Badges</span>
        </span>
        <span className="flex items-center space-x-1">
          <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
          <span>Certificates</span>
        </span>
      </div>
    </div>
  );
};

export default LastCostsChart;
