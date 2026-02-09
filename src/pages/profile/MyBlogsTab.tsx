import { TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Edit3, Trash2, Eye, Heart,
    Calendar, PenLine,
    ArrowUpRight, Clock
} from "lucide-react";
import { Link } from "react-router-dom";
import { useGetAllBlogQuery } from "@/redux/features/blogManagement.api";
import type { TBlog } from "@/types";
import moment from "moment";

const myBlogs = [
    {
        id: 1,
        title: "The Ultimate Guide to React Performance Optimization",
        excerpt: "Discover the hidden techniques to make your React applications lightning fast using useMemo, useCallback, and more.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop",
        date: "Feb 09, 2026",
        category: "Development",
        status: "Published",
        views: "1.2k",
        likes: 234,
        readTime: "8 min"
    },
    {
        id: 2,
        title: "Why Minimalist Design is Taking Over the World",
        excerpt: "Less is more. How clean aesthetics are shaping the future of digital products and user interfaces.",
        image: "https://images.pexels.com/photos/207636/pexels-photo-207636.jpeg",
        date: "Jan 28, 2026",
        category: "Design",
        status: "Draft",
        views: "0",
        likes: 0,
        readTime: "5 min"
    }
];

const MyBlogsTab = ({ userId }: { userId: string }) => {

    const { data: authorBlogs } = useGetAllBlogQuery(userId, {
        skip: !userId
    })

    console.log(authorBlogs?.data?.result)

    // const {} = authorBlogs?.data?.result || {};

    // যদি ব্লগ না থাকে
    if (myBlogs.length === 0) {
        return (
            <TabsContent value="my-blogs" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="bg-white rounded-[2rem] p-12 border border-slate-100 text-center relative overflow-hidden flex flex-col items-center justify-center min-h-75">
                    <div className="bg-slate-50 p-4 rounded-full mb-4">
                        <PenLine size={32} className="text-slate-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">No Stories Yet</h3>
                    <p className="text-slate-500 max-w-sm mx-auto mb-6">
                        You haven't written any blogs yet. Share your thoughts with the world today.
                    </p>
                    <Link to="/dashboard/create-blog">
                        <Button className="rounded-full bg-slate-900 text-white hover:bg-slate-800 px-6">
                            Start Writing
                        </Button>
                    </Link>
                </div>
            </TabsContent>
        );
    }

    return (
        <TabsContent value="my-blogs" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid gap-5">
                {authorBlogs?.data?.result.map((blog: TBlog) => {
                    const {coverImage, title, status, category, createdAt, _id, excerpt, readTime} = blog || {};
                    const postedDate = blog.createdAt ? moment(createdAt).format("DD MMM YYYY") : "No date";
                    return (
                        <div
                            key={_id}
                            className="group bg-white rounded-2xl p-3 md:p-4 border border-slate-100 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col md:flex-row gap-4 md:gap-6 relative overflow-hidden"
                        >

                            {/* 1. Image Thumbnail with Status Badge */}
                            <div className="w-full md:w-56 h-48 md:h-40 shrink-0 relative rounded-xl overflow-hidden">
                                <img
                                    src={coverImage}
                                    alt={title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                />
                                {/* Status Badge */}
                                <div className="absolute top-2 left-2">
                                    <Badge variant="secondary" className={`
                                    backdrop-blur-md border-0 text-xs font-semibold px-2.5 py-0.5
                                    ${status === 'Published'
                                            ? 'bg-emerald-500/90 text-white'
                                            : 'bg-amber-500/90 text-white'}
                                `}>
                                        {status}
                                    </Badge>
                                </div>
                                {/* Overlay Gradient on Mobile */}
                                <div className="md:hidden absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                            </div>

                            {/* 2. Content Section */}
                            <div className="flex-1 flex flex-col justify-between py-1">

                                {/* Top Meta */}
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
                                            <span className="text-[#00AAA1] uppercase tracking-wider">{category?.name}</span>
                                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                            <span className="flex items-center gap-1"><Calendar size={12} /> {postedDate}</span>
                                        </div>

                                        {/* Action Dropdown / Button (Desktop) */}
                                        <div className="flex items-center gap-2">
                                            {/* Edit Button */}
                                            <Link to={`/dashboard/edit-blog/${_id}`}>
                                                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors" title="Edit">
                                                    <Edit3 size={16} />
                                                </Button>
                                            </Link>
                                            {/* Delete Button */}
                                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-red-50 hover:text-red-600 transition-colors" title="Delete">
                                                <Trash2 size={16} />
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Title & Excerpt */}
                                    <div className="text-start">
                                        <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-snug group-hover:text-[#00AAA1] transition-colors cursor-pointer line-clamp-2">
                                            {title}
                                        </h3>
                                        <p className="text-slate-500 text-sm mt-2 line-clamp-2 leading-relaxed">
                                            {excerpt}
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom Stats */}
                                <div className="flex items-center justify-between mt-4 md:mt-0 pt-4 border-t md:border-t-0 border-slate-50">
                                    <div className="flex items-center gap-4 text-xs md:text-sm text-slate-400 font-medium">
                                        <div className="flex items-center gap-1.5" title="Reads">
                                            <Clock size={14} /> {readTime}
                                        </div>
                                        <div className="flex items-center gap-1.5" title="Views">
                                            <Eye size={14} className="group-hover:text-blue-500 transition-colors" /> 1.2k
                                        </div>
                                        <div className="flex items-center gap-1.5" title="Likes">
                                            <Heart size={14} className="group-hover:text-rose-500 transition-colors" /> 234
                                        </div>
                                    </div>

                                    <Link to={`/blog/${_id}`} className="md:hidden text-xs font-bold flex items-center gap-1 text-slate-900">
                                        Read More <ArrowUpRight size={12} />
                                    </Link>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
        </TabsContent>
    );
};

export default MyBlogsTab;