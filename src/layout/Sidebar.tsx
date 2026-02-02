import React from 'react';
import { 
  LayoutDashboard, FileText, Image as ImageIcon, Users, 
  MessageSquare, Settings, TrendingUp, Globe, Palette, LogOut, X 
} from 'lucide-react';
import type { TabType } from '@/types';
import MenuItem from '@/components/dashboard/MenuItem';

interface SidebarProps {
  isSidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, setSidebarOpen, activeTab, setActiveTab }) => {
  
  const handleNavigation = (tab: TabType) => {
    setActiveTab(tab);
    setSidebarOpen(false);
  };

  return (
    <aside className={`fixed inset-y-0 left-0 z-30 w-72 bg-white border-r border-gray-200 transform transition-transform duration-300 lg:translate-x-0 lg:static ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col`}>
      <div className="h-20 flex items-center justify-between px-8 border-b border-gray-50">
        <h1 className="text-2xl font-serif font-bold tracking-tight text-gray-900">
          Notebook<span className="text-teal-600">.</span>
        </h1>
        <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gray-500"><X size={24}/></button>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-custom py-6 px-4 space-y-8 scrollbar-thin">
        {/* Overview Group */}
        <div>
            <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Overview</p>
            <div className="space-y-1">
                <MenuItem icon={<LayoutDashboard size={18} />} label="Dashboard" isActive={activeTab === 'dashboard'} onClick={() => handleNavigation('dashboard')} />
                <MenuItem icon={<Globe size={18} />} label="View Site" onClick={() => {}} />
            </div>
        </div>
        
        {/* Content Group */}
        <div>
            <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Content</p>
            <div className="space-y-1">
                <MenuItem icon={<FileText size={18} />} label="Posts" isActive={activeTab === 'posts'} onClick={() => handleNavigation('posts')} />
                <MenuItem icon={<ImageIcon size={18} />} label="Media Library" isActive={activeTab === 'media'} onClick={() => handleNavigation('media')} />
                <MenuItem icon={<MessageSquare size={18} />} label="Comments" badge="2" isActive={activeTab === 'comments'} onClick={() => handleNavigation('comments')} />
            </div>
        </div>

        {/* Management Group */}
        <div>
            <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Management</p>
            <div className="space-y-1">
                <MenuItem icon={<Users size={18} />} label="Users" isActive={activeTab === 'users'} onClick={() => handleNavigation('users')} />
                <MenuItem icon={<TrendingUp size={18} />} label="SEO Tools" isActive={activeTab === 'seo'} onClick={() => handleNavigation('seo')} />
                <MenuItem icon={<Palette size={18} />} label="Appearance" isActive={activeTab === 'appearance'} onClick={() => handleNavigation('appearance')} />
            </div>
        </div>

        {/* System Group */}
        <div>
            <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">System</p>
            <div className="space-y-1">
                <MenuItem icon={<Settings size={18} />} label="Settings" isActive={activeTab === 'settings'} onClick={() => handleNavigation('settings')} />
            </div>
        </div>
      </div>

      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center justify-between group cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition-colors">
            <div className="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Admin" className="h-9 w-9 rounded-full object-cover border border-gray-200" />
                <div>
                    <p className="text-sm font-semibold text-gray-900">Admin</p>
                    <p className="text-xs text-gray-400">Editor in Chief</p>
                </div>
            </div>
            <LogOut size={18} className="text-gray-400 group-hover:text-red-500 transition-colors" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;