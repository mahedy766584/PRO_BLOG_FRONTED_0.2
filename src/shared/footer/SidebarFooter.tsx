import React, { useState, useRef, useEffect } from 'react';
import { LogOut, ChevronUp, User, Settings, Sparkles } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { logout, selectCurrentUser } from '@/redux/features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const SidebarFooter: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const user = useAppSelector(selectCurrentUser); 

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login'); 
    };

    // যদি ইউজার ডাটা লোড না হয় বা না থাকে
    const displayName = user?.name || 'Admin User';
    const displayRole = user?.role || 'Content Creator';
    const displayImage = user?.image; // ইমেজ URL

    return (
        <div className="p-4 border-t border-gray-100 relative" ref={menuRef}>
            
            {/* --- Popup Menu (Premium Feature) --- */}
            {isOpen && (
                <div className="absolute bottom-full left-0 w-[calc(100%-32px)] mx-4 mb-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transform transition-all duration-200 origin-bottom-left z-50">
                    <div className="p-2 space-y-1">
                        <button 
                            onClick={() => navigate('/dashboard/profile')}
                            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors"
                        >
                            <User size={16} />
                            <span>View Profile</span>
                        </button>
                        <button 
                            onClick={() => navigate('/dashboard/settings')}
                            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors"
                        >
                            <Settings size={16} />
                            <span>Settings</span>
                        </button>
                        <div className="h-px bg-gray-100 my-1"></div>
                        <button 
                            onClick={handleLogout}
                            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                            <LogOut size={16} />
                            <span>Sign out</span>
                        </button>
                    </div>
                </div>
            )}

            {/* --- User Trigger Card --- */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full flex items-center justify-between p-2 rounded-xl transition-all duration-200 border ${
                    isOpen ? 'bg-gray-50 border-gray-200 shadow-sm' : 'bg-transparent border-transparent hover:bg-gray-50'
                }`}
            >
                <div className="flex items-center gap-3">
                    {/* Premium Avatar Logic */}
                    <div className="relative">
                        {displayImage ? (
                            <img
                                src={displayImage}
                                alt={displayName}
                                className="h-10 w-10 rounded-full object-cover border-2 border-white shadow-sm"
                            />
                        ) : (
                            <div className="h-10 w-10 rounded-full bg-linear-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm border-2 border-white shadow-sm">
                                {displayName.charAt(0).toUpperCase()}
                            </div>
                        )}
                        {/* Online Indicator Status Dot */}
                        <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white"></span>
                    </div>

                    <div className="text-left">
                        <p className="text-sm font-semibold text-gray-900 leading-tight">
                            {displayName}
                            {user?.isPro && <Sparkles size={12} className="inline ml-1 text-yellow-500" fill="currentColor"/>}
                        </p>
                        <p className="text-xs text-gray-500 font-medium truncate w-24">
                            {displayRole}
                        </p>
                    </div>
                </div>

                <ChevronUp 
                    size={18} 
                    className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-gray-600' : ''}`} 
                />
            </button>
        </div>
    );
};

export default SidebarFooter;