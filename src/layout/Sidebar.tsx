import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    LayoutDashboard, FileText, Image as ImageIcon, Users,
    MessageSquare, Settings, TrendingUp, Globe, Palette, X
} from 'lucide-react';
import MenuItem from '@/components/dashboard/MenuItem';
import Logo from '@/shared/logo/Logo';
import SidebarLink from './SidebarLink';
import SidebarFooter from '@/shared/footer/SidebarFooter';

// নতুন কম্পোনেন্টগুলো ইম্পোর্ট করা হলো

interface SidebarProps {
    isSidebarOpen: boolean;
    setSidebarOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, setSidebarOpen }) => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    };

    return (
        <aside className={`fixed inset-y-0 left-0 z-30 w-72 bg-white border-r border-gray-200 transform transition-transform duration-300 lg:translate-x-0 lg:static ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col`}>
            
            {/* Header */}
            <div className="h-20 flex items-center justify-between px-8 border-b border-gray-50">
                <Logo />
                <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gray-500">
                    <X size={24} />
                </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto scrollbar-custom py-6 px-4 space-y-8 scrollbar-thin">
                
                {/* Overview Group */}
                <div>
                    <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Overview</p>
                    <div className="space-y-1">
                        <SidebarLink
                            to="/dashboard" 
                            end={true} 
                            icon={<LayoutDashboard size={18} />} 
                            label="Dashboard" 
                            setSidebarOpen={setSidebarOpen} 
                        />
                        <MenuItem icon={<Globe size={18} />} label="View Site" onClick={goToHome} />
                    </div>
                </div>

                {/* Content Group */}
                <div>
                    <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Content</p>
                    <div className="space-y-1">
                        <SidebarLink to="/dashboard/posts" icon={<FileText size={18} />} label="Posts" setSidebarOpen={setSidebarOpen} />
                        <SidebarLink to="/dashboard/media" icon={<ImageIcon size={18} />} label="Media Library" setSidebarOpen={setSidebarOpen} />
                        <SidebarLink to="/dashboard/comments" icon={<MessageSquare size={18} />} label="Comments" badge="2" setSidebarOpen={setSidebarOpen} />
                    </div>
                </div>

                {/* Management Group */}
                <div>
                    <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Management</p>
                    <div className="space-y-1">
                        <SidebarLink to="/dashboard/users" icon={<Users size={18} />} label="Users" setSidebarOpen={setSidebarOpen} />
                        <SidebarLink to="/dashboard/seo" icon={<TrendingUp size={18} />} label="SEO Tools" setSidebarOpen={setSidebarOpen} />
                        <SidebarLink to="/dashboard/appearance" icon={<Palette size={18} />} label="Appearance" setSidebarOpen={setSidebarOpen} />
                    </div>
                </div>

                {/* System Group */}
                <div>
                    <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">System</p>
                    <div className="space-y-1">
                        <SidebarLink to="/dashboard/settings" icon={<Settings size={18} />} label="Settings" setSidebarOpen={setSidebarOpen} />
                    </div>
                </div>

            </div>

            {/* Footer Component */}
            <SidebarFooter />
            
        </aside>
    );
};

export default Sidebar;