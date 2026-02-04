import React from 'react';

interface MenuItemProps {
    icon: React.ReactNode;
    label: string;
    isActive?: boolean;
    onClick: () => void;
    badge?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, isActive, onClick, badge }) => {
    return (
        <button
            onClick={onClick}
            className={`w-full cursor-pointer flex items-center justify-between px-4 py-2.5 rounded-xl transition-all duration-200 group ${isActive ? 'bg-teal-50 text-teal-700 font-medium' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
        >
            <div className="flex items-center gap-3">
                <span className={`${isActive ? 'text-teal-600' : 'text-gray-400 group-hover:text-gray-600'}`}>
                    {icon}
                </span>
                {label}
            </div>
            {badge && (
                <span className="bg-teal-100 text-teal-700 text-[10px] px-2 py-0.5 rounded-full font-bold">
                    {badge}
                </span>
            )}
        </button>
    );
};

export default MenuItem;