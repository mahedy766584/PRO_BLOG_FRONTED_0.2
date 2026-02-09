import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    MapPin, Calendar, Globe,
    Github, Twitter, Linkedin, CheckCircle2,
    TrendingUp, FileText, Users, ArrowUpRight, Mail,
    PenLine, Plus, Sparkles, Camera,
} from "lucide-react";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import useCurrentUserProfile from "@/utils/UseCurrentUserProfile";
import { Link } from "react-router-dom";
import MyBlogsTab from "./MyBlogsTab";// 👈 নতুন ইমপোর্ট
// import EditProfileModal from "./EditProfileModal";

const Profile = () => {
    const { data: userData, isLoading } = useCurrentUserProfile();

    if (isLoading) return <LoadingSpinner fullScreen={true} />;

    const {
        name,
        role,
        userName,
        profileImage,
        bio,
        createdAt,
        email,
        _id,
    } = userData?.data || {};

    const firstName = name?.firstName || "Unknown";
    const lastName = name?.lastName || "User";
    const fullName = `${firstName} ${lastName}`;

    return (
        <div className="min-h-screen bg-[#FAFAFA] pb-20 relative selection:bg-slate-900 selection:text-white">

            {/* 🌟 Background Ambient Mesh (Same as before) */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-100/40 blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-100/40 blur-[120px]" />
            </div>

            {/* 🌟 Cinematic Banner */}
            <div className="h-48 md:h-80 w-full relative z-10 group overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-800 to-black">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                </div>

                <div className="absolute top-28 right-28.5 z-50">
                     {/* 💡 এখানেও এডিট মোডাল ট্রিগার করতে পারেন ভবিষ্যতে */}
                    <Button
                        variant="ghost"
                        size="sm"
                        className="bg-black/40 hover:bg-black/70 backdrop-blur-md text-white border border-white/20 rounded-full shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-2 px-4 py-2"
                    >
                        <Camera size={16} />
                        <span className="font-medium text-sm">Change Cover</span>
                    </Button>
                </div>
            </div>

            <div className="relative z-20">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 -mt-10 md:-mt-28">

                        {/* ➤ LEFT SIDEBAR (Identity) */}
                        <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit space-y-6">

                            {/* 🌟 Profile Card */}
                            <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-6 shadow-2xl shadow-slate-200/50 border border-white/50 relative">
                                {/* Avatar Wrapper */}
                                <div className="relative w-fit mx-auto -mt-20 mb-4 group">
                                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2rem] border-[6px] border-white shadow-xl overflow-hidden bg-white transition-transform duration-500 group-hover:scale-105">
                                        <img
                                            src={profileImage || "https://github.com/shadcn.png"}
                                            alt={fullName}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute bottom-1 right-1 bg-white p-1.5 rounded-full shadow-md">
                                        <div className="bg-emerald-500 w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-white animate-pulse"></div>
                                    </div>
                                </div>

                                {/* User Info */}
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

                                {/* Bio */}
                                <p className="mt-6 text-center text-slate-600 leading-relaxed font-light text-sm md:text-base px-2">
                                    {bio || "Write something about yourself..."}
                                </p>

                                {/* 👇 EDIT PROFILE BUTTON / MODAL */}
                                <div className="mt-8 space-y-6">
                                    {/* এখানে 'userData.data' পাস করছি যাতে ডিফল্ট ভ্যালু ফর্মে দেখায় */}
                                    {/* <EditProfileModal userData={userData?.data} />  */}
                                    <button className="group relative w-full inline-flex h-11 md:h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900 gap-2">
                                            Connect Now <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </span>
                                    </button>

                                    {/* Social Icons (Read only for now) */}
                                    <div className="flex justify-center gap-4 border-t border-slate-100 pt-6">
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
                            
                             {/* ...Rest of the code (Info Card, Stats, Tabs) remains same... */}
                             {/* শুধু 'Personal Details' সেকশনটি ডাটা অনুযায়ী ডায়নামিক আছে তা নিশ্চিত করবেন */}
                             
                            {/* 🌟 Info Card (Desktop Only) */}
                            <div className="hidden lg:block bg-white/60 backdrop-blur-md rounded-3xl p-6 shadow-sm border border-slate-100 space-y-5">
                                <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-2">
                                    <Sparkles size={14} className="text-amber-500" /> Personal Details
                                </h3>
                                <div className="space-y-4 text-sm font-medium">
                                    <div className="flex items-center gap-4 text-slate-600 group">
                                        <div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform"><MapPin size={16} /></div>
                                        <span>Dhaka, Bangladesh</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-slate-600 group">
                                        <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform"><Mail size={16} /></div>
                                        <span className="truncate">{email}</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-slate-600 group">
                                        <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform"><Globe size={16} /></div>
                                        <a href="#" className="hover:text-black transition-colors">mysite.com</a>
                                    </div>
                                    <div className="flex items-center gap-4 text-slate-600 group">
                                        <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform"><Calendar size={16} /></div>
                                        <span>Joined {new Date(createdAt || new Date()).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ➤ RIGHT CONTENT (Same as before) */}
                        <div className="lg:col-span-8 space-y-8 lg:mt-8">
                            {/* ... Stats Grid ... */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
                                {[
                                    { label: "Total Views", value: "84.2k", trend: "+12%", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
                                    { label: "Articles", value: "34", trend: "Active", icon: FileText, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
                                    { label: "Followers", value: "2.1k", trend: "+5%", icon: Users, color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-100" },
                                ].map((stat, idx) => (
                                    <div key={idx} className={`bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl border ${stat.border} shadow-sm hover:shadow-md transition-all group relative overflow-hidden`}>
                                        {/* ... card content same ... */}
                                        <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                            <stat.icon size={60} className={stat.color} />
                                        </div>
                                        <div className="flex flex-col gap-1 md:gap-2">
                                            <div className="flex items-center justify-between">
                                                <div className={`p-2 md:p-2.5 rounded-xl w-fit ${stat.bg} ${stat.color}`}>
                                                    <stat.icon size={18} />
                                                </div>
                                            </div>
                                            <div className="mt-2 md:mt-4">
                                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">{stat.value}</h2>
                                                <p className="text-xs md:text-sm text-slate-500 font-medium">{stat.label}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* 🌟 Content Area with Tabs */}
                            <div className="min-h-125">
                                <Tabs defaultValue="articles" className="w-full">
                                   {/* ... Tabs List same ... */}
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4 sticky top-17.5 lg:top-0 z-30 bg-[#FAFAFA]/80 backdrop-blur-lg py-2">
                                        <TabsList className="bg-white p-1.5 rounded-full border border-slate-200 shadow-sm w-full sm:w-auto h-auto">
                                            <TabsTrigger value="articles" className="rounded-full px-4 md:px-6 py-2 text-xs md:text-sm font-medium data-[state=active]:bg-slate-900 data-[state=active]:text-white transition-all">Latest Stories</TabsTrigger>
                                            <TabsTrigger value="about" className="rounded-full px-4 md:px-6 py-2 text-xs md:text-sm font-medium data-[state=active]:bg-slate-900 data-[state=active]:text-white transition-all">About Me</TabsTrigger>
                                            <TabsTrigger value="my-blogs" className="rounded-full px-4 md:px-6 py-2 text-xs md:text-sm font-medium data-[state=active]:bg-slate-900 data-[state=active]:text-white transition-all">My Blogs</TabsTrigger>
                                        </TabsList>
                                        <Link to="/write-blog" className="hidden sm:block">
                                            <Button className="rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-lg hover:shadow-slate-900/20 transition-all flex items-center gap-2 px-5 h-11">
                                                <PenLine size={16} /> <span className="font-medium">Write a Story</span>
                                            </Button>
                                        </Link>
                                    </div>

                                    {/* Tabs Content */}
                                    <TabsContent value="articles" className="space-y-6">
                                        {/* ... Articles content same ... */}
                                         <div className="bg-white rounded-[1.5rem] p-1.5 shadow-sm border border-slate-100 group cursor-pointer hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                                            <div className="grid md:grid-cols-2 gap-4 md:gap-6 p-4">
                                                <div className="h-48 md:h-full rounded-2xl overflow-hidden relative">
                                                    <img
                                                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                                        alt="Featured"
                                                    />
                                                    <Badge className="absolute top-3 left-3 bg-white/90 text-black hover:bg-white backdrop-blur shadow-sm border-0">
                                                        🔥 Featured
                                                    </Badge>
                                                </div>
                                                <div className="flex flex-col justify-center space-y-3 pr-2">
                                                    <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider">Development</div>
                                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">Why I moved from Redux to Zustand?</h3>
                                                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">State management has evolved. Here is a deep dive.</p>
                                                    <div className="flex items-center gap-4 text-xs text-slate-400 font-medium pt-2 border-t border-slate-50 mt-2">
                                                        <span>Jan 24, 2026</span><span>•</span><span>5 min read</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Standard List */}
                                        <div className="space-y-4">
                                            {[
                                                { title: "Mastering Tailwind CSS Grid Layouts", desc: "A comprehensive guide to understanding grid template columns.", tag: "CSS" },
                                                { title: "The Future of AI in Web Development", desc: "How LLMs are changing the way we write code and debug applications.", tag: "AI" }
                                            ].map((item, idx) => (
                                                <div key={idx} className="bg-white rounded-2xl p-5 md:p-6 border border-slate-100 hover:border-slate-300 transition-all group cursor-pointer flex flex-col md:flex-row gap-4 md:items-center justify-between">
                                                    <div className="space-y-2">
                                                        <div className="flex items-center gap-2">
                                                            <Badge variant="outline" className="text-[10px] text-slate-500 font-normal border-slate-200">{item.tag}</Badge>
                                                            <span className="text-xs text-slate-400">2 days ago</span>
                                                        </div>
                                                        <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                                            {item.title}
                                                        </h4>
                                                        <p className="text-slate-500 text-sm line-clamp-1 max-w-xl">
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                    <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 text-slate-400 group-hover:bg-black group-hover:text-white transition-all">
                                                        <ArrowUpRight size={18} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="about">
                                        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 text-center relative overflow-hidden">
                                            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
                                            <h3 className="text-xl font-bold mb-6 text-slate-900">More About {fullName}</h3>
                                            <div className="max-w-2xl mx-auto space-y-6 text-slate-600 leading-relaxed font-light">
                                                <p>{bio || "No bio added yet."}</p>
                                            </div>
                                        </div>
                                    </TabsContent>
                                    
                                    <TabsContent value="my-blogs">
                                        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 text-center relative overflow-hidden">
                                            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
                                            <MyBlogsTab userId={_id} />
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            
            {/* Mobile Action Button */}
             <div className="fixed bottom-6 right-6 z-50 sm:hidden">
                <Link to="/write-blog">
                    <Button size="icon" className="h-14 w-14 rounded-full bg-slate-900 text-white shadow-xl shadow-slate-900/30 hover:bg-slate-800 transition-all active:scale-95">
                        <Plus size={24} />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Profile;