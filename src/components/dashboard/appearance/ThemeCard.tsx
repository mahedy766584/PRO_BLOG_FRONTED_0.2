import { Check } from "lucide-react";
import React from "react"

type TThemeCardProps = { 
    children: React.ReactNode;
    title: string;
    isActive: boolean, 
    onClick: () => void 
};

const ThemeCard = ({ children, title, isActive, onClick }: TThemeCardProps) => (
    <div 
        onClick={onClick}
        className={`group cursor-pointer rounded-xl border-2 transition-all duration-200 overflow-hidden ${isActive ? 'border-teal-500 ring-4 ring-teal-500/10' : 'border-gray-100 hover:border-teal-200'}`}
    >
        <div className="h-32 bg-gray-50 border-b border-gray-100 p-3">
            {children}
        </div>
        <div className="p-4 bg-white flex justify-between items-center">
            <span className={`text-sm font-medium ${isActive ? 'text-teal-700' : 'text-gray-600'}`}>{title}</span>
            {isActive && <div className="w-5 h-5 bg-teal-600 rounded-full flex items-center justify-center text-white"><Check size={12} strokeWidth={3} /></div>}
        </div>
    </div>
);

export default ThemeCard;