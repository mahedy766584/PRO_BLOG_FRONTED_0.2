import React from 'react';
import { Search, Bell, Menu, Plus } from 'lucide-react';

interface HeaderProps {
  setSidebarOpen: (isOpen: boolean) => void;
}

const DashboardHeader: React.FC<HeaderProps> = ({ setSidebarOpen }) => {
  return (
    <header className="flex items-center justify-between h-20 px-6 lg:px-10 bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <button onClick={() => setSidebarOpen(true)} className="p-2 lg:hidden text-gray-500 rounded-md hover:bg-gray-100">
          <Menu size={24} />
        </button>
        <div className="hidden md:flex items-center bg-gray-50 rounded-full px-4 py-2.5 border border-transparent focus-within:border-teal-200 focus-within:bg-white transition-all w-80 group">
          <Search size={18} className="text-gray-400 group-focus-within:text-teal-600 transition-colors" />
          <input 
            type="text" 
            placeholder="Search anything..." 
            className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm ml-2 w-full text-gray-600 placeholder-gray-400" 
          />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <button className="relative p-2 text-gray-400 hover:text-teal-600 transition-colors">
          <Bell size={20} />
          <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <div className="h-8 w-[1px] bg-gray-200 hidden md:block"></div>
        <button className="bg-teal-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-teal-700 transition-all shadow-lg shadow-teal-100 flex items-center gap-2">
           <Plus size={18} /> New Post
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;