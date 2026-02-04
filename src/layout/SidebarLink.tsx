import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuItem from '@/components/dashboard/MenuItem';

interface SidebarLinkProps {
    to: string;
    icon: React.ReactNode;
    label: string;
    badge?: string;
    end?: boolean;
    setSidebarOpen: (isOpen: boolean) => void;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ 
    to, 
    icon, 
    label, 
    badge, 
    end = false, 
    setSidebarOpen 
}) => {
    return (
        <NavLink
            to={to}
            end={end}
            onClick={() => setSidebarOpen(false)}
            className="block"
        >
            {({ isActive }) => (
                <MenuItem
                    icon={icon}
                    label={label}
                    isActive={isActive}
                    badge={badge}
                    onClick={() => {}}
                />
            )}
        </NavLink>
    );
};

export default SidebarLink;