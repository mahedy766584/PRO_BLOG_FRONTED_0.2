import AllPosts from '@/pages/dashboard/views/posts/AllPosts';
import Appearance from '@/pages/dashboard/views/appearance/Appearance';
import Comments from '@/pages/dashboard/views/comments/Comments';
import DashboardHome from '@/pages/dashboard/views/dashboardHome/DashboardHome';
import MediaLibrary from '@/pages/dashboard/views/mediaLibray/MediaLibrary';
import SeoManager from '@/pages/dashboard/views/seoManager/SeoManager';
import Settings from '@/pages/dashboard/views/setting/Settings';
import UserManagement from '@/pages/dashboard/views/users/UserManagement';
import type { TabType } from '@/types';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import DashboardHeader from '@/shared/Header/DashboardHeader';

// View Imports


// Placeholder components for brevity in this response (Create actual files for them)
const Placeholder = ({ title }: { title: string }) => <div className="p-10 text-center text-gray-500">Component: {title}</div>;

const DashboardLayout: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardHome />;
      case 'posts': return <AllPosts />;
      case 'media': return <MediaLibrary />; // Ensure this file exists
      case 'users': return <UserManagement />;
      case 'comments': return <Comments />; // Ensure this file exists
      case 'seo': return <SeoManager />; // Ensure this file exists
      case 'appearance': return <Appearance />; // Ensure this file exists
      case 'settings': return <Settings />;
      default: return <DashboardHome />;
    }
  };

  return (
    <div className="flex h-screen bg-[#FAFAFA] font-sans text-gray-800">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Component */}
      <Sidebar
        isSidebarOpen={isSidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Header Component */}
        <DashboardHeader setSidebarOpen={setSidebarOpen} />

        {/* Dynamic Content Body */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-10 scrollbar-hide">
          <div className="max-w-7xl mx-auto">
             {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;