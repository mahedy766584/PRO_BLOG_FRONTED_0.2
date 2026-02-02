import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { dropdownMenuItem } from "./dropDownMenuItem";
import { LogOutIcon, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

type TDropDownMenu = {
    label: string;
    href: string;
    icon: LucideIcon;
};

const DropdownMenuAvatar = () => {

    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon-lg" className="rounded-full cursor-pointer">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                        <AvatarFallback>LR</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuGroup className="space-y-2">
                    {
                        dropdownMenuItem?.map((item: TDropDownMenu) => {
                            const Icon = item?.icon;
                            return (
                                <Link key={item.label} to={item.href}>
                                    <DropdownMenuItem  className="group cursor-pointer hover:bg-cyan-50! hover:text-main!">
                                        <Icon className="group-hover:text-main" />
                                        <span className="group-hover:text-main!">{item.label}</span>
                                    </DropdownMenuItem>
                                </Link>
                            )
                        })
                    }
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="group cursor-pointer hover:bg-cyan-50! hover:text-main!">
                    <LogOutIcon className="group-hover:text-main" />
                    <span className="group-hover:text-main!">Sign Out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default DropdownMenuAvatar;