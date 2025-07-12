import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const EfficiencyChart = () => {
  const data = [
    { name: 'Completed', value: 75 },
    { name: 'Remaining', value: 25 },
  ];

  const COLORS = ['#3B82F6', '#BFDBFE'];

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-blue-800">Lab Completion</h3>
      </div>
      
      <div className="flex items-center justify-center">
        <div className="relative w-32 h-32">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={60}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-xs text-blue-500 mb-1">Labs Completed</div>
              <div className="text-2xl font-bold text-blue-800">75%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EfficiencyChart;
