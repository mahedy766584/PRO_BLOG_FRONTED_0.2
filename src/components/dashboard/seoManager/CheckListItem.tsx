import { AlertCircle, CheckCircle } from "lucide-react";

type TCheckListItemsProps = {
    label: string,
    status: 'good' | 'warning' | 'error'
}

const CheckListItem = ({ label, status }: TCheckListItemsProps) => {
    let icon, color;
    switch (status) {
        case 'good': icon = <CheckCircle size={16} className="text-green-500" />; color = "text-gray-600"; break;
        case 'warning': icon = <AlertCircle size={16} className="text-orange-500" />; color = "text-gray-600"; break;
        case 'error': icon = <AlertCircle size={16} className="text-red-500" />; color = "text-red-500 font-medium"; break;
    }

    return (
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100 text-sm">
            <span className={color}>{label}</span>
            {icon}
        </div>
    );
};

export default CheckListItem