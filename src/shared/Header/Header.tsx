import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
    ChevronDown,
    Menu,
    X,
    Moon,
    Search,
    SquarePen,
} from "lucide-react";
import Logo from "../logo/Logo";
import { NAV_ITEMS } from "./navLinks";
import NavDropdown from "./NavDropdown";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";
import { Button } from "@/components/ui/button";


const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <header className="bg-[#E8F3F3] text-[#333333]">
            <nav className="mx-auto flex max-w-6xl items-center justify-between py-4">
                <Logo />

                <Button className="cursor-pointer" onClick={handleLogout}>Logout</Button>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-6 lg:flex">
                    {NAV_ITEMS.map((item) =>
                        "children" in item ? (
                            <NavDropdown key={item.label} item={item} />
                        ) : (
                            <NavLink
                                key={item.label}
                                to={item.href}
                                className={({ isActive }) =>
                                    `text-[18px] font-normal transition-colors
                                    ${isActive ? "text-[#00AAA1]" : "hover:text-[#00AAA1]"}`
                                }
                            >
                                {item.label}
                            </NavLink>
                        )
                    )}
                </div>

                {/* Right Actions (Desktop) */}
                <div className="hidden items-center gap-6 lg:flex">
                    <Search size={20} className="cursor-pointer" />
                    <Link to={'/writeBlog'}><SquarePen size={20} className="cursor-pointer" /></Link>

                    <button className="flex items-center gap-1">
                        EN <ChevronDown size={16} />
                    </button>

                    <button className="rounded-md bg-[#00AAA1] p-1 text-white">
                        <Moon size={20} />
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="lg:hidden"
                >
                    {mobileOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </nav>

            {/* Mobile Navigation */}
            {mobileOpen && (
                <div className="lg:hidden border-t bg-[#E8F3F3] px-4 py-4">
                    <div className="flex flex-col gap-4">
                        {NAV_ITEMS.map((item) =>
                            "children" in item ? (
                                <details key={item.label} className="group">
                                    <summary className="flex cursor-pointer items-center justify-between text-[18px]">
                                        {item.label}
                                        <ChevronDown
                                            size={16}
                                            className="transition-transform group-open:rotate-180"
                                        />
                                    </summary>

                                    <div className="mt-2 ml-4 flex flex-col gap-2">
                                        {item.children?.map((child) => (
                                            <Link
                                                key={child.href}
                                                to={child.href}
                                                className="text-[16px] text-gray-700 hover:text-cyan-500"
                                                onClick={() => setMobileOpen(false)}
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                </details>
                            ) : (
                                <Link
                                    key={item.label}
                                    to={item.href}
                                    className="text-[18px] hover:text-cyan-500"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            )
                        )}

                        {/* Mobile Actions */}
                        <div className="mt-4 flex items-center gap-5">
                            <Search size={20} />
                            <SquarePen size={20} />
                            <Moon size={20} />
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
