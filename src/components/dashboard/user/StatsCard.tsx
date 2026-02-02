type TStateCardProps = {
    label: string,
    value: string,
    icon: React.ReactNode,
    color: string
}

const StatsCard = ({ label, value, icon, color }: TStateCardProps) => (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
        <div>
            <p className="text-sm text-gray-400 font-medium">{label}</p>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mt-1">{value}</h3>
        </div>
        <div className={`p-3 rounded-xl ${color}`}>
            {icon}
        </div>
    </div>
);

export default StatsCard;