import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardHeader from '@/shared/Header/DashboardHeader';
import Sidebar from './Sidebar';

const DashboardLayout: React.FC = () => {
    const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

    return (
        <div className="flex h-screen bg-[#FAFAFA] font-sans text-gray-800">

            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-20 bg-black/50 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <Sidebar
                isSidebarOpen={isSidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            {/* Main Content Wrapper */}
            <div className="flex-1 flex flex-col overflow-hidden">

                {/* Header Component */}
                <DashboardHeader setSidebarOpen={setSidebarOpen} />

                {/* Dynamic Content Body */}
                <main className="flex-1 overflow-y-auto p-6 lg:p-10 scrollbar-hide">
                    <div className="max-w-7xl mx-auto">
                        <Outlet /> 
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;