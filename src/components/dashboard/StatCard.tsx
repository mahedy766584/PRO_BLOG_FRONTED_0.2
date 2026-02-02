import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  isPositive?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon, isPositive = true }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-400">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900 mt-2 font-serif">{value}</h3>
        </div>
        <div className="p-2.5 bg-teal-50 rounded-lg text-teal-600">{icon}</div>
      </div>
      <div className="mt-4 flex items-center text-xs">
        <span className={`px-2 py-1 rounded-md font-medium ${isPositive ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>
          {change}
        </span>
        <span className="text-gray-400 ml-2">vs last month</span>
      </div>
    </div>
  );
};

export default StatCard;