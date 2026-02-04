import React, { useState } from 'react';
import {
    MoreHorizontal, Search, Filter,
    UserCheck, UserPlus, Users, Mail, Shield,
    Trash2, Edit3, Clock
} from 'lucide-react';
import type { User } from '@/types';
import StatsCard from '@/components/dashboard/user/StatsCard';

// Extended User Interface for this component
interface ExtendedUser extends User {
    id: number;
    lastActive: string;
    avatarUrl?: string;
    postsCount: number;
}

const UserManagement: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<'all' | 'active' | 'pending'>('all');

    // Premium Mock Data
    const users: ExtendedUser[] = [
        { id: 1, name: "Admin User", role: "Administrator", email: "admin@notebook.com", status: "Active", lastActive: "Now", postsCount: 42, avatarUrl: "https://i.pravatar.cc/150?u=admin" },
        { id: 2, name: "Sarah Jenkins", role: "Editor", email: "sarah@notebook.com", status: "Active", lastActive: "2h ago", postsCount: 15, avatarUrl: "https://i.pravatar.cc/150?u=sarah" },
        { id: 3, name: "Mike Ross", role: "Author", email: "mike@writer.com", status: "Pending", lastActive: "Never", postsCount: 0 },
        { id: 4, name: "Emily Clark", role: "Author", email: "emily@guest.com", status: "Active", lastActive: "1d ago", postsCount: 3, avatarUrl: "https://i.pravatar.cc/150?u=emily" },
        { id: 5, name: "David Miller", role: "Author", email: "david@content.com", status: "Active", lastActive: "3d ago", postsCount: 8 },
    ];

    return (
        <div className="space-y-8 animate-fade-in pb-10">

            {/* 1. Header & Quick Actions */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-serif font-bold text-gray-900">Users & Roles</h2>
                    <p className="text-gray-500 mt-1">Manage access and permissions for your team.</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-2.5 bg-teal-600 text-white rounded-lg font-medium shadow-lg shadow-teal-200 hover:bg-teal-700 transition-all active:scale-95">
                    <UserPlus size={18} />
                    <span>Invite New User</span>
                </button>
            </div>

            {/* 2. Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatsCard label="Total Users" value="24" icon={<Users size={20} />} color="bg-blue-50 text-blue-600" />
                <StatsCard label="Active Now" value="12" icon={<UserCheck size={20} />} color="bg-green-50 text-green-600" />
                <StatsCard label="Pending Invites" value="3" icon={<Mail size={20} />} color="bg-orange-50 text-orange-600" />
            </div>

            {/* 3. Main Content Card */}
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">

                {/* Toolbar: Tabs & Search */}
                <div className="p-5 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Tabs */}
                    <div className="flex bg-gray-50 p-1 rounded-lg">
                        {['all', 'active', 'pending'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setSelectedTab(tab as any)}
                                className={`px-4 py-1.5 rounded-md text-sm font-medium capitalize transition-all ${selectedTab === tab ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Search & Filter */}
                    <div className="flex gap-3 w-full md:w-auto">
                        <div className="relative flex-1 md:w-64">
                            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search users..."
                                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                            />
                        </div>
                        <button className="p-2 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50">
                            <Filter size={18} />
                        </button>
                    </div>
                </div>

                {/* Users Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 text-xs uppercase text-gray-400 font-semibold border-b border-gray-100">
                                <th className="px-6 py-4">User Info</th>
                                <th className="px-6 py-4">Role</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 hidden md:table-cell">Last Active</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {users.map((user) => (
                                <tr key={user.id} className="group hover:bg-gray-50/80 transition-colors">
                                    {/* User Info */}
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            {user.avatarUrl ? (
                                                <img src={user.avatarUrl} alt={user.name} className="w-10 h-10 rounded-full object-cover border border-gray-200" />
                                            ) : (
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-100 to-teal-50 flex items-center justify-center text-teal-700 font-bold border border-teal-100">
                                                    {user.name.charAt(0)}
                                                </div>
                                            )}
                                            <div>
                                                <h4 className="font-medium text-gray-900">{user.name}</h4>
                                                <p className="text-xs text-gray-500">{user.email}</p>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Role Badge */}
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            {user.role === 'Administrator' ? <Shield size={14} className="text-purple-500" /> : <UserCheck size={14} className="text-gray-400" />}
                                            <span className={`text-sm ${user.role === 'Administrator' ? 'font-medium text-gray-800' : 'text-gray-600'}`}>
                                                {user.role}
                                            </span>
                                        </div>
                                        <p className="text-[10px] text-gray-400 mt-0.5">{user.postsCount} posts published</p>
                                    </td>

                                    {/* Status */}
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${user.status === 'Active'
                                                ? 'bg-green-50 text-green-700 border-green-100'
                                                : 'bg-yellow-50 text-yellow-700 border-yellow-100'
                                            }`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                                            {user.status}
                                        </span>
                                    </td>

                                    {/* Last Active */}
                                    <td className="px-6 py-4 hidden md:table-cell">
                                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                                            <Clock size={14} />
                                            <span>{user.lastActive}</span>
                                        </div>
                                    </td>

                                    {/* Actions */}
                                    <td className="px-6 py-4 text-right relative">
                                        <div className="hidden group-hover:flex justify-end gap-2 absolute right-6 top-1/2 -translate-y-1/2 bg-gray-50/80 backdrop-blur-sm p-1 rounded-lg">
                                            <button className="p-1.5 text-gray-500 hover:text-teal-600 hover:bg-white rounded shadow-sm transition-all" title="Edit">
                                                <Edit3 size={16} />
                                            </button>
                                            <button className="p-1.5 text-gray-500 hover:text-red-500 hover:bg-white rounded shadow-sm transition-all" title="Delete">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                        <button className="text-gray-400 group-hover:hidden">
                                            <MoreHorizontal size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Footer */}
                <div className="p-4 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-xs text-gray-500">Showing <span className="font-medium text-gray-900">1-5</span> of <span className="font-medium text-gray-900">24</span> users</p>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 border border-gray-200 rounded text-xs font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-50">Previous</button>
                        <button className="px-3 py-1 border border-gray-200 rounded text-xs font-medium text-gray-600 hover:bg-gray-50">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default UserManagement;