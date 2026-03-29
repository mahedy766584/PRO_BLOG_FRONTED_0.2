import { Button } from "@/components/ui/button";
import { TabsList } from "@/components/ui/tabs";
import { User, Lock, Bell, Palette, LogOut } from "lucide-react";
import { SidebarTab } from "./SidebarTab";

export const Sidebar = ({ activeTab }: { activeTab: string }) => {
    return (
        <div className="w-44 bg-white border-r border-slate-100 p-6 flex-col justify-between hidden md:flex">
            <div>
                <div className="mb-8 pl-2">
                    <h2 className="text-lg font-bold tracking-tight text-slate-900">Settings</h2>
                    <p className="text-xs text-slate-500 font-medium">Manage preferences</p>
                </div>

                <TabsList className="flex flex-col h-auto bg-transparent gap-1 p-0">
                    <SidebarTab value="account" icon={User} label="Account" active={activeTab} />
                    <SidebarTab value="security" icon={Lock} label="Security" active={activeTab} />
                    <SidebarTab value="notifications" icon={Bell} label="Notifications" active={activeTab} />
                    <SidebarTab value="appearance" icon={Palette} label="Appearance" active={activeTab} />
                </TabsList>
            </div>

            <div className="pt-6 border-t border-slate-50">
                <Button variant="ghost" className="w-full justify-start text-red-500 hover:bg-red-50 gap-2 rounded-lg">
                    <LogOut size={16} /> Log Out
                </Button>
            </div>
        </div>
    );
};