type ShareButtonProps = { 
    icon: React.ReactNode, 
    label?: string 
};

const ShareButton = ({ icon, label }: ShareButtonProps) => (
    <button className="group relative flex items-center justify-center w-10 h-10 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all">
        {icon}
        {label && (
            <span className="absolute left-14 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {label}
            </span>
        )}
    </button>
);

export default ShareButton;