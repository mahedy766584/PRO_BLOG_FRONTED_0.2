import { ArrowUpRight, FileText, LayoutDashboard, PenLine, Sparkles, TrendingUp, Users } from "lucide-react";
import StatCard from "./StatCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import MyBlogsTab from "./MyBlogsTab";

const RightContent = ({isOwnProfile, bio, fullName, _id}: any) => {
    return (
        <div className="lg:col-span-8 space-y-8 lg:mt-8">

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
                {isOwnProfile ? (
                    <>
                        <StatCard label="Total Views" value="84.2k" icon={TrendingUp} color="text-emerald-600" bg="bg-emerald-50" />
                        <StatCard label="Earnings" value="$1,240" icon={ArrowUpRight} color="text-blue-600" bg="bg-blue-50" />
                        <StatCard label="Followers" value="2.1k" icon={Users} color="text-violet-600" bg="bg-violet-50" />
                    </>
                ) : (
                    <>
                        <StatCard label="Articles" value="34" icon={FileText} color="text-slate-700" bg="bg-slate-100" />
                        <StatCard label="Followers" value="2.1k" icon={Users} color="text-blue-600" bg="bg-blue-50" />
                        <StatCard label="Appreciations" value="5.4k" icon={Sparkles} color="text-amber-500" bg="bg-amber-50" />
                    </>
                )}
            </div>

            {/* Tabs */}
            <div className="min-h-125">
                <Tabs defaultValue="articles" className="w-full">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4 sticky top-17.5 lg:top-0 z-30 bg-[#FAFAFA]/80 backdrop-blur-lg py-2">
                        <TabsList className="bg-white p-1.5 rounded-full border border-slate-200 shadow-sm w-full sm:w-auto h-auto">
                            <TabsTrigger value="articles" className="rounded-full px-4 md:px-6 py-2 text-xs md:text-sm font-medium data-[state=active]:bg-slate-900 data-[state=active]:text-white transition-all">
                                Latest Stories
                            </TabsTrigger>

                            {isOwnProfile && (
                                <TabsTrigger value="my-blogs" className="rounded-full px-4 md:px-6 py-2 text-xs md:text-sm font-medium data-[state=active]:bg-slate-900 data-[state=active]:text-white transition-all">
                                    Manage Blogs
                                </TabsTrigger>
                            )}

                            <TabsTrigger value="about" className="rounded-full px-4 md:px-6 py-2 text-xs md:text-sm font-medium data-[state=active]:bg-slate-900 data-[state=active]:text-white transition-all">
                                About
                            </TabsTrigger>
                        </TabsList>

                        {isOwnProfile && (
                            <Link to="/write-blog" className="hidden sm:block">
                                <Button className="rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-lg hover:shadow-slate-900/20 transition-all flex items-center gap-2 px-5 h-11">
                                    <PenLine size={16} /> <span className="font-medium">Write a Story</span>
                                </Button>
                            </Link>
                        )}
                    </div>

                    {/* Tab Contents */}
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
                            <h3 className="text-xl font-bold mb-6 text-slate-900">About {fullName}</h3>
                            <div className="max-w-2xl mx-auto space-y-6 text-slate-600 leading-relaxed font-light">
                                <p>{bio || "This user hasn't written a bio yet."}</p>
                            </div>
                        </div>
                    </TabsContent>

                    {isOwnProfile && (
                        <TabsContent value="my-blogs">
                            <div className="bg-white rounded-[2rem] p-6 border border-slate-100 relative overflow-hidden">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="font-bold text-lg flex items-center gap-2">
                                        <LayoutDashboard size={18} /> Manage Posts
                                    </h3>
                                </div>
                                <MyBlogsTab userId={_id} />
                            </div>
                        </TabsContent>
                    )}
                </Tabs>
            </div>
        </div>
    );
};

export default RightContent;