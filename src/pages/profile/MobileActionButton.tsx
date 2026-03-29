import { Button } from "@/components/ui/button";
import { Plus, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

const MobileActionButton = ({isOwnProfile}: any) => {
    return (
        <div className="fixed bottom-6 right-6 z-50 sm:hidden">
            {isOwnProfile ? (
                <Link to="/write-blog">
                    <Button size="icon" className="h-14 w-14 rounded-full bg-slate-900 text-white shadow-xl shadow-slate-900/30 hover:bg-slate-800 transition-all active:scale-95">
                        <Plus size={24} />
                    </Button>
                </Link>
            ) : (
                <Button size="icon" className="h-14 w-14 rounded-full bg-blue-600 text-white shadow-xl shadow-blue-600/30 hover:bg-blue-700 transition-all active:scale-95">
                    <UserPlus size={24} />
                </Button>
            )}
        </div>
    );
};

export default MobileActionButton;