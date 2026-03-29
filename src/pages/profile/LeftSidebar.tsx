import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle2, Github, Linkedin, Mail, MapPin, MessageCircle, Sparkles, Twitter, UserPlus } from "lucide-react";
import SettingsModal from "./SettingsModal";
import { Button } from "@/components/ui/button";

const LeftSidebar = ({
    profileImage,
    fullName,
    isOwnProfile,
    role,
    userName,
    bio,
    profileData,
    createdAt,
    email
}: any) => {
    return (
        <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit space-y-6">
            <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-6 shadow-2xl shadow-slate-200/50 border border-white/50 relative">
                <div className="relative w-fit mx-auto -mt-20 mb-4 group">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2rem] border-[6px] border-white shadow-xl overflow-hidden bg-white transition-transform duration-500 group-hover:scale-105">
                        <img
                            src={profileImage || "https://github.com/shadcn.png"}
                            alt={fullName}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute bottom-1 right-1 bg-white p-1.5 rounded-full shadow-md">
                        <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-white ${isOwnProfile ? 'bg-blue-500' : 'bg-emerald-500 animate-pulse'}`}></div>
                    </div>
                </div>

                <div className="text-center space-y-2">
                    <div className="flex items-center justify-center gap-2">
                        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                            {fullName}
                        </h1>
                        {(role === 'admin' || role === 'author') &&
                            <CheckCircle2 className="text-blue-500 fill-blue-50 w-5 h-5 md:w-6 md:h-6" />
                        }
                    </div>
                    <p className="text-slate-500 font-medium text-sm md:text-base">@{userName}</p>

                    <div className="flex justify-center gap-2 pt-2">
                        <Badge variant="secondary" className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full uppercase text-[10px] tracking-widest border border-slate-200">
                            {role}
                        </Badge>
                    </div>
                </div>

                <p className="mt-6 text-center text-slate-600 leading-relaxed font-light text-sm md:text-base px-2">
                    {bio || (isOwnProfile ? "Add a bio to tell the world about yourself." : "No bio available.")}
                </p>

                <div className="mt-8 space-y-4">
                    {isOwnProfile ? (
                        <>
                            <SettingsModal userData={profileData} />
                        </>
                    ) : (
                        <>
                            <Button className="w-full rounded-xl h-12 bg-slate-900 hover:bg-black text-white shadow-lg shadow-slate-900/20 gap-2 text-base font-medium transition-all hover:scale-[1.02]">
                                <UserPlus size={18} /> Follow
                            </Button>
                            <Button variant="outline" className="w-full rounded-xl h-12 border-slate-200 hover:border-slate-300 hover:bg-white text-slate-700 gap-2 font-medium">
                                <MessageCircle size={18} /> Send Message
                            </Button>
                        </>
                    )}

                    <div className="flex justify-center gap-4 border-t border-slate-100 pt-6 mt-4">
                        {[
                            { Icon: Github, href: "#" },
                            { Icon: Twitter, href: "#" },
                            { Icon: Linkedin, href: "#" }
                        ].map(({ Icon, href }, i) => (
                            <a key={i} href={href} className="p-3 rounded-full bg-slate-50 text-slate-500 hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm border border-slate-100">
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Personal Details */}
            <div className="hidden lg:block bg-white/60 backdrop-blur-md rounded-3xl p-6 shadow-sm border border-slate-100 space-y-5">
                <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-2">
                    <Sparkles size={14} className="text-amber-500" /> Details
                </h3>
                <div className="space-y-4 text-sm font-medium">
                    <div className="flex items-center gap-4 text-slate-600">
                        <div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600"><MapPin size={16} /></div>
                        <span>Dhaka, Bangladesh</span>
                    </div>
                    <div className="flex items-center gap-4 text-slate-600">
                        <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center text-green-600"><Calendar size={16} /></div>
                        <span>Joined {new Date(createdAt || new Date()).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}</span>
                    </div>
                    {isOwnProfile && (
                        <div className="flex items-center gap-4 text-slate-600">
                            <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600"><Mail size={16} /></div>
                            <span className="truncate">{email}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;