import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { dropdownMenuItem } from "./dropDownMenuItem";
import { LogOut, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import UserCurrentUserProfile from "../../utils/UseCurrentUserProfile";

type TDropDownMenu = {
    label: string;
    href: string;
    icon: LucideIcon;
};

const DropdownMenuAvatar = () => {
    const dispatch = useAppDispatch();

    const user = UserCurrentUserProfile();

    const { profileImage, email, name } = user?.data?.data || {};

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="relative h-10 w-10 rounded-full ring-2 ring-transparent hover:ring-[#00AAA1]/30 cursor-pointer transition-all duration-300 focus-visible:ring-offset-2"
                >
                    <Avatar className="h-10 w-10 border border-gray-200 shadow-sm">
                        <AvatarImage src={profileImage} alt={name?.firstName} className="object-cover" />
                        <AvatarFallback className="bg-[#E8F3F3] text-[#00AAA1] font-semibold">
                            {name?.firstName?.charAt(0)}
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-64 p-2 shadow-xl border-gray-100 rounded-xl" align="end" forceMount>
                <DropdownMenuLabel className="font-normal p-3">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-semibold leading-none text-gray-800">
                            {name?.firstName} {name?.lastName}
                        </p>
                        <p className="text-xs leading-none text-gray-500 truncate">
                            {email}
                        </p>
                    </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator className="bg-gray-100 my-1" />

                <DropdownMenuGroup className="flex flex-col gap-1">
                    {dropdownMenuItem?.map((item: TDropDownMenu) => {
                        const Icon = item?.icon;
                        return (
                            <Link key={item.label} to={item.href} className="w-full">
                                <DropdownMenuItem className="group flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer focus:bg-[#E8F3F3] focus:text-[#00AAA1] text-gray-600 transition-colors duration-200">
                                    <div className="flex items-center justify-center p-1 rounded-md bg-gray-50 group-hover:bg-white group-hover:shadow-sm transition-all">
                                        <Icon size={18} className="text-gray-500 group-hover:text-[#00AAA1] transition-colors" />
                                    </div>
                                    <span className="text-sm font-medium group-hover:text-[#00AAA1]">
                                        {item.label}
                                    </span>
                                </DropdownMenuItem>
                            </Link>
                        );
                    })}
                </DropdownMenuGroup>

                <DropdownMenuSeparator className="bg-gray-100 my-1" />

                <DropdownMenuItem
                    onClick={handleLogout}
                    className="group flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-red-600 focus:bg-red-50 focus:text-red-700 transition-colors duration-200 mt-1"
                >
                    <div className="flex items-center justify-center p-1 rounded-md bg-red-50 group-hover:bg-white group-hover:shadow-sm transition-all">
                        <LogOut size={18} className="text-red-500 group-hover:text-red-700" />
                    </div>
                    <span className="text-sm font-medium">Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default DropdownMenuAvatar;