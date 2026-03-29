import { Tabs, TabsList } from "@/components/ui/tabs";
import { SidebarTab } from "./settings/SidebarTab";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const ModalSidebarItems = ({activeTab, setActiveTab, User, Lock, Bell, Palette}: any) => {
    return (
        <aside className="w-48 bg-white border-r border-slate-100 p-6 flex-col justify-between hidden md:flex">
            <div>
                <div className="mb-8 pl-2">
                    <h2 className="text-lg font-bold text-slate-900">Settings</h2>
                    <p className="text-xs text-slate-500">Manage preferences</p>
                </div>
                <Tabs value={activeTab} onValueChange={setActiveTab} orientation="vertical" className="w-full">
                    <TabsList className="flex flex-col h-auto bg-transparent gap-1 p-0">
                        <SidebarTab value="account" icon={User} label="Account" active={activeTab} />
                        <SidebarTab value="security" icon={Lock} label="Security" active={activeTab} />
                        <SidebarTab value="notifications" icon={Bell} label="Notifications" active={activeTab} />
                        <SidebarTab value="appearance" icon={Palette} label="Appearance" active={activeTab} />
                    </TabsList>
                </Tabs>
            </div>
            <div className="pt-6 border-t border-slate-50">
                <Button variant="ghost" className="w-full cursor-pointer justify-start text-red-500 hover:bg-red-50 gap-2">
                    <LogOut size={16} /> Log Out
                </Button>
            </div>
        </aside>
    );
};

export default ModalSidebarItems;