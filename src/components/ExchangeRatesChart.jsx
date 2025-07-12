import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const ExchangeRatesChart = () => {
  const data = [
    { name: 'Week 1', completed: 2, active: 1 },
    { name: 'Week 2', completed: 4, active: 2 },
    { name: 'Week 3', completed: 6, active: 2 },
    { name: 'Week 4', completed: 8, active: 1 },
    { name: 'Week 5', completed: 10, active: 0 },
  ];

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-blue-800">Learning Progress</h3>
        <div className="flex space-x-4 text-sm">
          <span className="text-blue-600">Completed Labs</span>
          <span className="text-blue-400">Active Labs</span>
        </div>
      </div>
      
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#3B82F6' }}
            />
            <YAxis hide />
            <Line 
              type="monotone" 
              dataKey="completed" 
              stroke="#3B82F6" 
              strokeWidth={3}
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="active" 
              stroke="#60A5FA" 
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExchangeRatesChart;
