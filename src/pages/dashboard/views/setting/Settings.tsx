import React, { useState } from 'react';
import { 
  Save, Globe, Lock, Bell, Upload, 
  Layout, Shield, Mail, Trash2, AlertTriangle, 
  Check, Info
} from 'lucide-react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'general' | 'publishing' | 'security'>('general');
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [commentsEnabled, setCommentsEnabled] = useState(true);

  return (
    <div className="space-y-8 animate-fade-in pb-10">
      
      {/* 1. Header with Sticky Save Action */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sticky top-0 bg-[#FAFAFA]/95 backdrop-blur z-10 py-2">
        <div>
          <h2 className="text-3xl font-serif font-bold text-gray-900">System Settings</h2>
          <p className="text-gray-500 mt-1">Manage your site configuration and preferences.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-teal-600 text-white rounded-lg font-medium shadow-lg shadow-teal-200 hover:bg-teal-700 transition-all active:scale-95">
           <Save size={18} />
           <span>Save Changes</span>
        </button>
      </div>

      {/* 2. Settings Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* LEFT: Navigation Tabs */}
        <div className="lg:col-span-1 space-y-2">
            <NavTab 
                label="General" 
                icon={<Globe size={18}/>} 
                isActive={activeTab === 'general'} 
                onClick={() => setActiveTab('general')} 
            />
            <NavTab 
                label="Publishing" 
                icon={<Layout size={18}/>} 
                isActive={activeTab === 'publishing'} 
                onClick={() => setActiveTab('publishing')} 
            />
            <NavTab 
                label="Security & Access" 
                icon={<Shield size={18}/>} 
                isActive={activeTab === 'security'} 
                onClick={() => setActiveTab('security')} 
            />
        </div>

        {/* RIGHT: Content Area */}
        <div className="lg:col-span-3 space-y-6">
            
            {/* --- TAB: GENERAL SETTINGS --- */}
            {activeTab === 'general' && (
                <div className="space-y-6 animate-fade-in">
                    {/* Site Identity Card */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-50 pb-2">Site Identity</h3>
                        <div className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <InputGroup label="Site Title" placeholder="e.g. Notebook Blog" defaultValue="Notebook" />
                                <InputGroup label="Tagline" placeholder="e.g. Just another minimalist blog" defaultValue="A minimal template for storytellers" />
                            </div>
                            <div className="pt-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Site Logo</label>
                                <div className="flex items-center gap-6">
                                    <div className="w-20 h-20 rounded-full bg-gray-50 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                                        <div className="w-16 h-16 rounded-full bg-teal-600 text-white flex items-center justify-center text-xl font-serif font-bold">N</div>
                                    </div>
                                    <div>
                                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 text-gray-700 mb-1">
                                            <Upload size={16} /> Upload New
                                        </button>
                                        <p className="text-xs text-gray-400">Recommended size: 512x512px (PNG, JPG)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info Card */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-50 pb-2">Contact Information</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <InputGroup label="Admin Email" type="email" icon={<Mail size={16}/>} defaultValue="admin@notebook.com" />
                            <InputGroup label="Support Email" type="email" icon={<Mail size={16}/>} defaultValue="help@notebook.com" />
                        </div>
                    </div>
                </div>
            )}

            {/* --- TAB: PUBLISHING SETTINGS --- */}
            {activeTab === 'publishing' && (
                <div className="space-y-6 animate-fade-in">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-50 pb-2">Content Preferences</h3>
                        
                        <div className="space-y-6">
                            {/* Toggle 1 */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-sm font-medium text-gray-900">Enable Comments</h4>
                                    <p className="text-xs text-gray-500">Allow visitors to comment on your posts.</p>
                                </div>
                                <ToggleSwitch checked={commentsEnabled} onChange={() => setCommentsEnabled(!commentsEnabled)} />
                            </div>

                            {/* Toggle 2 */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-sm font-medium text-gray-900">Comment Moderation</h4>
                                    <p className="text-xs text-gray-500">Comments must be manually approved.</p>
                                </div>
                                <ToggleSwitch checked={true} onChange={() => {}} />
                            </div>

                            <div className="h-px bg-gray-50"></div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <InputGroup label="Posts per page" type="number" defaultValue="10" />
                                <div className="space-y-1">
                                    <label className="block text-sm font-medium text-gray-700">Date Format</label>
                                    <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white">
                                        <option>October 24, 2025 (Default)</option>
                                        <option>24/10/2025</option>
                                        <option>2025-10-24</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* --- TAB: SECURITY SETTINGS --- */}
            {activeTab === 'security' && (
                <div className="space-y-6 animate-fade-in">
                    
                    {/* Maintenance Mode */}
                    <div className={`p-6 rounded-2xl border transition-all ${maintenanceMode ? 'bg-orange-50 border-orange-200' : 'bg-white border-gray-100 shadow-sm'}`}>
                        <div className="flex items-start justify-between">
                            <div className="flex gap-4">
                                <div className={`p-3 rounded-xl ${maintenanceMode ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-500'}`}>
                                    <AlertTriangle size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Maintenance Mode</h3>
                                    <p className="text-sm text-gray-500 mt-1 max-w-md">
                                        When active, your site will show a "Under Construction" page to visitors. Admins can still access the dashboard.
                                    </p>
                                </div>
                            </div>
                            <ToggleSwitch checked={maintenanceMode} onChange={() => setMaintenanceMode(!maintenanceMode)} color="bg-orange-500" />
                        </div>
                    </div>

                    {/* Danger Zone */}
                    <div className="bg-white p-6 rounded-2xl border border-red-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
                        <h3 className="text-lg font-semibold text-red-600 mb-4 flex items-center gap-2">
                            <Trash2 size={20} /> Danger Zone
                        </h3>
                        <p className="text-sm text-gray-600 mb-6">
                            Once you delete a site, there is no going back. Please be certain.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">Reset Default Settings</button>
                            <button className="px-4 py-2 bg-red-50 border border-red-100 rounded-lg text-sm font-medium text-red-600 hover:bg-red-100">Delete Site Data</button>
                        </div>
                    </div>
                </div>
            )}

        </div>
      </div>
    </div>
  );
};

// --- Helper Components for Premium UI ---

const NavTab = ({ label, icon, isActive, onClick }: { label: string, icon: React.ReactNode, isActive: boolean, onClick: () => void }) => (
    <button 
        onClick={onClick}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left font-medium ${
            isActive 
            ? 'bg-teal-50 text-teal-700 shadow-sm border border-teal-100' 
            : 'text-gray-500 hover:bg-white hover:shadow-sm hover:text-gray-800 border border-transparent'
        }`}
    >
        <span className={isActive ? 'text-teal-600' : 'text-gray-400'}>{icon}</span>
        {label}
    </button>
);

interface InputGroupProps {
    label: string;
    placeholder?: string;
    defaultValue?: string;
    type?: string;
    icon?: React.ReactNode;
}

const InputGroup: React.FC<InputGroupProps> = ({ label, placeholder, defaultValue, type = "text", icon }) => (
    <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <div className="relative">
            {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</div>}
            <input 
                type={type} 
                defaultValue={defaultValue} 
                placeholder={placeholder}
                className={`w-full border border-gray-200 rounded-lg py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow ${icon ? 'pl-10 pr-4' : 'px-4'}`} 
            />
        </div>
    </div>
);

const ToggleSwitch = ({ checked, onChange, color = "bg-teal-600" }: { checked: boolean, onChange: () => void, color?: string }) => (
    <button 
        onClick={onChange}
        className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out ${checked ? color : 'bg-gray-200'}`}
    >
        <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${checked ? 'translate-x-6' : 'translate-x-0'}`}></div>
    </button>
);

export default Settings;