const StatCard = ({ label, value, icon: Icon, color, bg }: any) => {
    return (
        <div className={`bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl border border-slate-100 hover:shadow-md transition-all group relative overflow-hidden`}>
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                <Icon size={60} className={color} />
            </div>
            <div className="flex flex-col gap-1 md:gap-2">
                <div className={`p-2 md:p-2.5 rounded-xl w-fit ${bg} ${color}`}>
                    <Icon size={18} />
                </div>
                <div className="mt-2 md:mt-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">{value}</h2>
                    <p className="text-xs md:text-sm text-slate-500 font-medium">{label}</p>
                </div>
            </div>
        </div>
    );
};

export default StatCard;