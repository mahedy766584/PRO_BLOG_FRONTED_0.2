import { TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { ChevronRight, type LucideIcon } from "lucide-react";

type SidebarTabProps = {
    value: string;
    icon: LucideIcon;
    label: string;
    active: string;
};

export const SidebarTab = ({ value, icon: Icon, label, active }: SidebarTabProps) => (
    <TabsTrigger
        value={value}
        className={cn(
            "w-full justify-start gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
            active === value
                ? "bg-slate-900 text-white shadow-md shadow-slate-900/20"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
        )}
    >
        <Icon size={18} className={active === value ? "text-white" : "text-slate-500"} />
        {label}
        {active === value && <ChevronRight size={14} className="ml-auto opacity-50" />}
    </TabsTrigger>
);