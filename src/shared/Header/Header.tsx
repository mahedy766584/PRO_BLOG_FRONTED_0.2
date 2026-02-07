/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
    ChevronDown,
    Menu,
    X,
    SquarePen,
    Globe
} from "lucide-react";
import Logo from "../logo/Logo";
import { NAV_ITEMS } from "./navLinks";
import NavDropdown from "./NavDropdown";
import DropdownMenuAvatar from "./DropdownMenuAvatar";
import SearchMenu from "./SearchMenu";

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change (Fix for warning)
    useEffect(() => {
        setMobileOpen(false);
    }, [location]);

    return (
        <header
            // FIX: 'left-0' added to force full width, replaced 'bg-white/80' with 'bg-white'
            className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 border-b border-transparent
            ${scrolled
                    ? "bg-white shadow-md border-gray-100 py-3" // Solid White Background (No transparency)
                    : "bg-[#E8F3F3] py-5"
                }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8">
                {/* Logo Section */}
                <div className="shrink-0">
                    <Logo />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    {NAV_ITEMS.map((item) =>
                        "children" in item ? (
                            <NavDropdown key={item.label} item={item} />
                        ) : (
                            <NavLink
                                key={item.label}
                                to={item.href}
                                className={({ isActive }) =>
                                    `relative text-[16px] font-medium transition-colors duration-300 group
                                    ${isActive ? "text-[#00AAA1]" : "text-gray-600 hover:text-[#00AAA1]"}`
                                }
                            >
                                {item.label}
                                {/* Hover Underline Animation */}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00AAA1] transition-all duration-300 group-hover:w-full"></span>
                            </NavLink>
                        )
                    )}
                </div>

                {/* Right Actions (Desktop) */}
                <div className="hidden lg:flex items-center gap-5">
                    <SearchMenu />

                    {/* Premium Write Button */}
                    <Link
                        to={'/writeBlog'}
                        className="flex items-center gap-2 px-4 py-2 bg-[#00AAA1] text-white rounded-full hover:bg-[#008f87] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 text-sm font-medium"
                    >
                        <SquarePen size={18} />
                        <span>Write</span>
                    </Link>

                    {/* Language Selector */}
                    <button className="flex items-center gap-1 text-gray-600 hover:text-[#00AAA1] transition-colors text-sm font-medium">
                        <Globe size={16} />
                        <span>EN</span>
                    </button>

                    <div className="pl-2 border-l border-gray-300">
                        <DropdownMenuAvatar />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileOpen(true)}
                    className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <Menu size={28} />
                </button>
            </nav>

            {/* Mobile Sidebar Overlay */}
            <div
                className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden 
                ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
                onClick={() => setMobileOpen(false)}
            >
                {/* Sidebar Content */}
                <div
                    className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-out transform
                    ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex flex-col h-full">
                        {/* Mobile Header */}
                        <div className="flex items-center justify-between p-5 border-b border-gray-100">
                            <span className="font-bold text-xl text-[#00AAA1]">Menu</span>
                            <button
                                onClick={() => setMobileOpen(false)}
                                className="p-2 hover:bg-red-50 text-gray-500 hover:text-red-500 rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Mobile Links */}
                        <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-2">
                            {NAV_ITEMS.map((item) =>
                                "children" in item ? (
                                    <details key={item.label} className="group">
                                        <summary className="flex cursor-pointer items-center justify-between py-3 px-2 text-gray-700 font-medium hover:bg-gray-50 rounded-lg transition-colors select-none">
                                            {item.label}
                                            <ChevronDown
                                                size={18}
                                                className="transition-transform duration-300 group-open:rotate-180 text-gray-400"
                                            />
                                        </summary>
                                        <div className="mt-1 ml-4 pl-4 border-l-2 border-gray-100 flex flex-col gap-1">
                                            {item.children?.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    to={child.href}
                                                    className="block py-2 px-2 text-sm text-gray-600 hover:text-[#00AAA1] hover:bg-teal-50 rounded-md transition-colors"
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </details>
                                ) : (
                                    <NavLink
                                        key={item.label}
                                        to={item.href}
                                        className={({ isActive }) =>
                                            `block py-3 px-2 font-medium rounded-lg transition-colors
                                            ${isActive ? "bg-teal-50 text-[#00AAA1]" : "text-gray-700 hover:bg-gray-50"}`
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                )
                            )}
                        </div>

                        {/* Mobile Footer Actions */}
                        <div className="p-5 border-t border-gray-100 bg-gray-50">
                            <div className="flex items-center justify-between mb-4">
                                <SearchMenu />
                                <DropdownMenuAvatar />
                            </div>
                            <Link
                                to={'/writeBlog'}
                                className="flex w-full items-center justify-center gap-2 bg-[#00AAA1] text-white py-3 rounded-xl font-medium shadow-md active:scale-95 transition-transform"
                            >
                                <SquarePen size={20} />
                                Start Writing
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;