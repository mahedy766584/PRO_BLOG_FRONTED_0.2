import React from 'react';
import { TrendingUp, Users, BarChart, MessageSquare } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import StatCard from '@/components/dashboard/StatCard';

const DashboardHome: React.FC = () => {
  const COLORS = ['#0d9488', '#14b8a6', '#5eead4', '#ccfbf1'];
  
  const trafficData = [
    { name: 'Mon', visits: 4000 }, { name: 'Tue', visits: 3000 },
    { name: 'Wed', visits: 2000 }, { name: 'Thu', visits: 2780 },
    { name: 'Fri', visits: 1890 }, { name: 'Sat', visits: 2390 },
    { name: 'Sun', visits: 3490 },
  ];
  
  const deviceData = [
    { name: 'Desktop', value: 65 }, { name: 'Mobile', value: 25 }, { name: 'Tablet', value: 10 },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-serif font-bold text-gray-900">Dashboard Overview</h2>
          <p className="text-gray-500 mt-1">Welcome back! Here's what's happening today.</p>
        </div>
        <div className="text-sm text-gray-400">Last updated: Just now</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Views" value="145.2K" change="+12%" icon={<TrendingUp size={20} />} isPositive={true} />
        <StatCard title="Subscribers" value="5,204" change="+8.4%" icon={<Users size={20} />} isPositive={true} />
        <StatCard title="Bounce Rate" value="42.3%" change="-2.1%" icon={<BarChart size={20} />} isPositive={true} />
        <StatCard title="Comments" value="842" change="-5%" icon={<MessageSquare size={20} />} isPositive={false} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Traffic Analytics</h3>
            <select className="text-sm border-none bg-gray-50 rounded-lg px-3 py-1 text-gray-600 focus:ring-0 cursor-pointer">
              <option>Last 7 Days</option>
              <option>Last Month</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficData}>
                <defs>
                  <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0d9488" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#0d9488" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                <Tooltip contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}} />
                <Area type="monotone" dataKey="visits" stroke="#0d9488" strokeWidth={3} fillOpacity={1} fill="url(#colorVisits)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Device Source</h3>
          <div className="flex-1 flex items-center justify-center relative">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={deviceData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {deviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-8">
              <span className="text-3xl font-serif font-bold text-gray-800">65%</span>
              <span className="text-xs text-gray-400 uppercase">Desktop</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;