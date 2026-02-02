/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    MapPin, Calendar, Globe, Edit3,
    Github, Twitter, Linkedin, CheckCircle2,
    TrendingUp, FileText, Users, ArrowUpRight, Mail
} from "lucide-react";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import useCurrentUserProfile from "@/utils/UseCurrentUserProfile";

const Profile = () => {
    const { data: userData, isLoading } = useCurrentUserProfile();

    if (isLoading) return <LoadingSpinner fullScreen={true} />;

    const {
        name,
        role = "Author",
        userName = "username",
        profileImage,
        bio = "Passionate Full-stack developer & UI Enthusiast. Building digital products that make a difference.",
        createdAt,
        email = "user@example.com",
    } = userData?.data || {};

    // 🟢 Name Handling (Object vs String issue fixed)
    const firstName = name?.firstName || "Unknown";
    const lastName = name?.lastName || "User";
    const fullName = `${firstName} ${lastName}`;
    const newData = new Date();

    return (
        <div className="min-h-screen bg-gray-50/50 selection:bg-black selection:text-white pb-20 relative overflow-hidden">

            {/* 🌟 1. Premium Background Mesh Gradient */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-200/30 blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-200/30 blur-[100px]" />
            </div>

            {/* 🌟 2. Cinematic Banner */}
            <div className="h-64 md:h-80 w-full relative z-10 group overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-gray-900 via-slate-800 to-gray-900">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                </div>
                {/* Banner Content */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <Button variant="secondary" size="sm" className="shadow-2xl backdrop-blur-md bg-white/10 text-white border border-white/20 hover:bg-white/20">
                        <Edit3 size={14} className="mr-2" /> Change Cover
                    </Button>
                </div>
            </div>

            <div className="relative z-20">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 -mt-24">

                        {/* ➤ LEFT SIDEBAR (Sticky Identity) */}
                        <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit space-y-6">

                            {/* 🌟 Profile Card */}
                            <div className="bg-white rounded-[2rem] p-6 shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
                                {/* Avatar */}
                                <div className="relative w-fit mx-auto -mt-16 mb-4 group">
                                    <div className="w-40 h-40 rounded-[2rem] border-[6px] border-white shadow-2xl overflow-hidden bg-white rotate-3 group-hover:rotate-0 transition-all duration-500 ease-out">
                                        <img
                                            src={profileImage || "https://github.com/shadcn.png"}
                                            alt={fullName}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 bg-white p-1.5 rounded-full shadow-lg">
                                        <div className="bg-emerald-500 w-5 h-5 rounded-full border-2 border-white animate-pulse"></div>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="text-center space-y-2">
                                    <h1 className="text-3xl font-black text-gray-900 tracking-tight flex items-center justify-center gap-2">
                                        {fullName}
                                        {(role === 'admin' || role === 'author') && <CheckCircle2 className="text-blue-500 fill-blue-50 w-6 h-6" />}
                                    </h1>
                                    <p className="text-gray-500 font-medium">@{userName}</p>

                                    <div className="flex justify-center gap-2 pt-2">
                                        <Badge className="bg-black text-white hover:bg-gray-800 px-3 py-1 rounded-full uppercase text-[10px] tracking-widest">
                                            {role}
                                        </Badge>
                                    </div>
                                </div>

                                {/* Bio */}
                                <p className="mt-6 text-center text-gray-600 leading-relaxed font-light text-sm md:text-base">
                                    {bio}
                                </p>

                                {/* Connect Button */}
                                <div className="mt-8">
                                    <button className="relative w-full inline-flex h-12 overflow-hidden rounded-xl p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:bg-slate-900 transition-colors gap-2">
                                            Connect Now <ArrowUpRight size={16} />
                                        </span>
                                    </button>
                                    <div className="flex justify-center gap-4 mt-6 border-t border-gray-100 pt-6">
                                        {[Github, Twitter, Linkedin].map((Icon, i) => (
                                            <a key={i} href="#" className="p-3 rounded-full bg-gray-50 text-gray-500 hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm">
                                                <Icon size={18} />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* 🌟 Details Card */}
                            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 space-y-4">
                                <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider">Details</h3>
                                <div className="space-y-4 text-sm">
                                    <div className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors">
                                        <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600"><MapPin size={16} /></div>
                                        <span>San Francisco, CA (Default)</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors">
                                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600"><Mail size={16} /></div>
                                        <span>{email}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors">
                                        <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600"><Globe size={16} /></div>
                                        <a href="#" className="hover:underline">Portfolio Website</a>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors">
                                        <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-green-600"><Calendar size={16} /></div>
                                        <span>Joined {new Date(createdAt || newData).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ➤ RIGHT CONTENT */}
                        <div className="lg:col-span-8 space-y-8 lg:mt-6">

                            {/* 🌟 Stats Grid (Dummy Data Added) */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    { label: "Total Views", value: "84.2k", trend: "+12%", icon: TrendingUp, color: "text-green-600", bg: "bg-green-50" },
                                    { label: "Articles", value: "34", trend: "New", icon: FileText, color: "text-blue-600", bg: "bg-blue-50" },
                                    { label: "Followers", value: "2.1k", trend: "+5%", icon: Users, color: "text-purple-600", bg: "bg-purple-50" },
                                ].map((stat, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                                                <stat.icon size={20} />
                                            </div>
                                            <span className="text-xs font-bold bg-gray-100 px-2 py-1 rounded-full text-gray-600 group-hover:bg-black group-hover:text-white transition-colors">
                                                {stat.trend}
                                            </span>
                                        </div>
                                        <h2 className="text-3xl font-black text-gray-900">{stat.value}</h2>
                                        <p className="text-sm text-gray-500 font-medium mt-1">{stat.label}</p>
                                    </div>
                                ))}
                            </div>

                            {/* 🌟 Content Tabs */}
                            <div className="min-h-125">
                                <Tabs defaultValue="articles" className="w-full">
                                    <div className="flex items-center justify-between mb-6">
                                        <TabsList className="bg-white p-1 rounded-full border border-gray-200 shadow-sm">
                                            <TabsTrigger value="articles" className="rounded-full px-6 data-[state=active]:bg-black data-[state=active]:text-white transition-all">Latest Stories</TabsTrigger>
                                            <TabsTrigger value="about" className="rounded-full px-6 data-[state=active]:bg-black data-[state=active]:text-white transition-all">About Me</TabsTrigger>
                                        </TabsList>
                                    </div>

                                    {/* 🔥 Articles Tab with Dummy Data */}
                                    <TabsContent value="articles" className="space-y-6">
                                        {/* Featured Card */}
                                        <div className="bg-white rounded-3xl p-1 shadow-sm border border-gray-100 group cursor-pointer hover:shadow-xl transition-all duration-300">
                                            <div className="grid md:grid-cols-2 gap-6 p-4">
                                                <div className="h-48 md:h-full rounded-2xl overflow-hidden relative">
                                                    <img
                                                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                        alt="Featured"
                                                    />
                                                    <span className="absolute top-2 right-2 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">🔥 Featured</span>
                                                </div>
                                                <div className="flex flex-col justify-center space-y-3 pr-2">
                                                    <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wide">
                                                        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                                                        Development
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                                                        Why I moved from Redux to Zustand in 2026?
                                                    </h3>
                                                    <p className="text-gray-500 text-sm line-clamp-2">
                                                        State management has evolved. Here is a deep dive into why simplicity wins over complexity in modern React apps.
                                                    </p>
                                                    <div className="flex items-center gap-4 text-xs text-gray-400 font-medium pt-2">
                                                        <span>Jan 24, 2026</span>
                                                        <span>•</span>
                                                        <span>5 min read</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Standard List (Static Dummy Data) */}
                                        {[
                                            { title: "Mastering Tailwind CSS Grid Layouts", desc: "A comprehensive guide to understanding grid template columns and responsive design patterns." },
                                            { title: "The Future of AI in Web Development", desc: "How LLMs are changing the way we write code and debug applications in real-time." }
                                        ].map((item, idx) => (
                                            <div key={idx} className="bg-white rounded-3xl p-6 border border-gray-100 hover:border-blue-200 transition-all group cursor-pointer flex gap-4 items-start">
                                                <div className="w-12 h-12 rounded-full bg-gray-50 shrink-0 flex items-center justify-center text-xl">✍️</div>
                                                <div>
                                                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </TabsContent>

                                    {/* 🔥 About Tab with Content */}
                                    <TabsContent value="about">
                                        <div className="bg-white rounded-3xl p-8 border border-gray-100 text-center">
                                            <h3 className="text-xl font-bold mb-4">More About {fullName}</h3>
                                            <p className="text-gray-600 leading-relaxed mb-6">
                                                {bio}
                                            </p>
                                            <p className="text-gray-500 text-sm">
                                                (This is a placeholder section. In the future, this will show your detailed Markdown bio, skill sets, and career timeline.)
                                            </p>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Profile;