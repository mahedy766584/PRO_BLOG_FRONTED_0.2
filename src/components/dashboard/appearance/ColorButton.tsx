import { Check } from "lucide-react";

type TColorButton = {
    color: string,
    name: string,
    isSelected: boolean,
    onClick: () => void
}

const ColorButton = ({ color, name, isSelected, onClick }: TColorButton) => (
    <div className="flex flex-col items-center gap-2 cursor-pointer group" onClick={onClick}>
        <div className={`w-12 h-12 rounded-full ${color} shadow-sm transition-transform group-hover:scale-110 flex items-center justify-center ${isSelected ? 'ring-2 ring-offset-2 ring-gray-400' : ''}`}>
            {isSelected && <Check size={20} className="text-white" />}
        </div>
        <span className={`text-xs font-medium ${isSelected ? 'text-gray-800' : 'text-gray-400'}`}>{name}</span>
    </div>
);

export default ColorButton;