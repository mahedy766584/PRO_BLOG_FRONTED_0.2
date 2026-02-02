type TModeCardProps = {
    label: string,
    icon: React.ReactNode,
    isActive: boolean,
    onClick: () => void
}

const ModeCard = ({ label, icon, isActive, onClick }: TModeCardProps) => (
    <button
        onClick={onClick}
        className={`flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all ${isActive ? 'border-teal-500 bg-teal-50 text-teal-700' : 'border-gray-100 bg-white text-gray-500 hover:bg-gray-50'}`}
    >
        {icon}
        <span className="text-sm font-medium">{label}</span>
    </button>
);

export default ModeCard;