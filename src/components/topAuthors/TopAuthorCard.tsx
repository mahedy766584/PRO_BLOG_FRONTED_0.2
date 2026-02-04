import type { TAuthorCardProps } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SocialProfile from "../common/profile/SocialProfile";
import { BadgeCheck, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom"; // Link ইম্পোর্ট করতে ভুলবেন না

const TopAuthorCard = ({ author }: TAuthorCardProps) => {
    const { user } = author || {};
    
    // নাম হ্যান্ডলিং
    const firstName = user?.name?.firstName || "Unknown";
    const lastName = user?.name?.lastName || "";
    const fullName = `${firstName} ${lastName}`;
    const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;

    return (
        <div className="group relative bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 ease-in-out hover:-translate-y-1">
            
            {/* 🌟 Decorative Gradient Glow (Hidden by default, visible on hover) */}
            <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 flex items-start gap-4">
                
                {/* 🌟 Avatar Section */}
                <div className="relative shrink-0">
                    <div className="p-1 rounded-full border border-gray-100 bg-white shadow-sm group-hover:border-blue-100 transition-colors">
                        <Avatar className="h-14 w-14 md:h-16 md:w-16">
                            <AvatarImage 
                                src={user?.profileImage} 
                                className="object-cover transition-transform duration-500 group-hover:scale-110" 
                                alt={fullName} 
                            />
                            <AvatarFallback className="bg-slate-900 text-white font-bold tracking-widest">
                                {initials}
                            </AvatarFallback>
                        </Avatar>
                    </div>
                    {/* Optional Verified Badge */}
                    <div className="absolute bottom-0 right-0 bg-white rounded-full p-0.5 shadow-sm">
                        <BadgeCheck className="w-5 h-5 text-blue-500 fill-blue-50" />
                    </div>
                </div>

                {/* 🌟 Content Section */}
                <div className="flex-1 min-w-0 space-y-1.5">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-bold text-lg text-gray-900 leading-tight group-hover:text-main transition-colors truncate">
                                {fullName}
                            </h3>
                            <p className="text-xs font-medium text-gray-400">@{user?.username || "author"}</p>
                        </div>
                        
                        {/* Hover Action Icon */}
                        <Link to={`/profile/${user?._id}`} className="text-gray-300 group-hover:text-black transition-colors">
                            <ArrowUpRight size={20} />
                        </Link>
                    </div>

                    <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed h-10">
                        {user?.bio || "Passionate writer sharing insights on technology and lifestyle."}
                    </p>
                </div>
            </div>

            {/* 🌟 Footer Section (Socials & Stats) */}
            <div className="relative z-10 mt-5 pt-4 border-t border-gray-50 flex items-center justify-between">
                <div className="scale-90 origin-left -ml-2">
                    <SocialProfile />
                </div>
                
                <button className="text-[10px] uppercase font-bold tracking-wider text-gray-400 hover:text-black transition-colors flex items-center gap-1">
                    View Profile
                </button>
            </div>
        </div>
    );
};

export default TopAuthorCard;