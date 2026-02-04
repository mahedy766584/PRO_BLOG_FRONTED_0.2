/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
    Share2, Facebook, Twitter, Linkedin, Copy, Clock, Calendar, 
    ChevronRight, Heart, MessageCircle, Bookmark 
} from "lucide-react";

import Container from "@/components/Container";
import BlogContent from "@/components/leftContent/BlogContent";
import TopAuthors from "@/components/topAuthors/TopAuthors";
import BlogCard from "@/components/leftContent/BlogCard";
import BlogActions from "@/components/leftContent/BlogActions";
import { useGetAllBlogQuery, useGetSingleBlogQuery } from "@/redux/features/blogManagement.api";
import type { TBlog } from "@/types";
import LoadingSpinner from "@/components/common/LoadingSpinner";

const BlogDetails = () => {
    const { blogId } = useParams<{ blogId: string; slug: string }>();

    // --- 1. Premium Scroll Progress Bar ---
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const { data: blogs, isLoading: relatedLoading } = useGetAllBlogQuery(undefined);
    const { data: blogResponse, isLoading: blogLoading } = useGetSingleBlogQuery(blogId!, {
        skip: !blogId,
    });

    const { title, coverImage, author, readTime, createdAt, category } = blogResponse?.data || {};
    const postedDate = createdAt ? moment(createdAt).format("MMM DD, YYYY") : "No date";

    if (blogLoading) return <LoadingSpinner fullScreen />;

    return (
        <div className="relative bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 pb-20 lg:pb-0">
            
            {/* --- Progress Bar (Sticky Top) --- */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 origin-left z-50"
                style={{ scaleX }}
            />

            <Container className="pt-6 lg:pt-12">
                
                {/* --- Breadcrumb --- */}
                <nav className="flex items-center gap-2 text-xs md:text-sm text-gray-500 mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
                    <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <Link to="/blogs" className="hover:text-blue-600 transition-colors">Blogs</Link>
                    <ChevronRight size={14} />
                    <span className="text-gray-900 font-medium truncate max-w-[150px] md:max-w-xs">{title}</span>
                </nav>

                {/* --- Hero Section --- */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-5xl mx-auto text-center space-y-6 mb-10 md:mb-16"
                >
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-blue-600 border border-blue-100">
                        {category?.name || "Technology"}
                    </span>
                    
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
                        {title}
                    </h1>

                    {/* Author & Meta Data */}
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-gray-500 text-sm">
                        <div className="flex items-center gap-3">
                            <img src={author?.profileImage} alt={author?.name?.firstName} className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm" />
                            <div className="text-left">
                                <p className="text-gray-900 font-bold leading-none">{author?.name?.firstName} {author?.name?.lastName}</p>
                                <p className="text-xs text-gray-500 mt-0.5">@author_handle</p>
                            </div>
                        </div>
                        <div className="hidden md:block w-px h-8 bg-gray-200"></div>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <Calendar size={18} className="text-gray-400" />
                                <span>{postedDate}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={18} className="text-gray-400" />
                                <span>{readTime || "5 min read"}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* --- Hero Image (Parallax Feel) --- */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="w-full aspect-video md:aspect-[21/9] rounded-xl md:rounded-3xl overflow-hidden mb-12 md:mb-20 shadow-xl ring-1 ring-gray-900/5"
                >
                    <img src={coverImage} alt={title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000 ease-out" />
                </motion.div>

                {/* --- Main Grid Layout --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    
                    {/* Left: Sticky Share (Desktop Only) */}
                    <div className="hidden lg:block lg:col-span-1">
                        <div className="sticky top-32 flex flex-col gap-6 items-center">
                            <ShareButton icon={<Heart size={20} />} label="Like" />
                            <ShareButton icon={<MessageCircle size={20} />} label="Comment" />
                            <div className="w-8 h-px bg-gray-200 my-2"></div>
                            <ShareButton icon={<Facebook size={18} />} />
                            <ShareButton icon={<Twitter size={18} />} />
                            <ShareButton icon={<Linkedin size={18} />} />
                            <ShareButton icon={<Copy size={18} />} />
                        </div>
                    </div>

                    {/* Center: Content */}
                    <div className="col-span-1 lg:col-span-7">
                        <article className="prose prose-lg md:prose-xl prose-slate max-w-none 
                            prose-headings:font-bold prose-headings:text-gray-900 
                            prose-p:text-gray-600 prose-p:leading-loose 
                            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                            prose-img:rounded-2xl prose-img:shadow-md">
                            <BlogContent blog={blogResponse?.data} />
                        </article>

                        {/* Tags & Bottom Actions */}
                        <div className="mt-12 pt-8 border-t border-gray-100">
                             <BlogActions blogId={blogId} />
                        </div>
                    </div>

                    {/* Right: Sidebar */}
                    <div className="col-span-1 lg:col-span-4 space-y-12">
                        {/* Author Widget */}
                        <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">About Author</h3>
                            <div className="flex flex-col items-center text-center">
                                <img src={author?.profileImage} className="w-20 h-20 rounded-full object-cover mb-4 ring-4 ring-white shadow-md" alt="" />
                                <h4 className="text-xl font-bold text-gray-900">{author?.name?.firstName} {author?.name?.lastName}</h4>
                                <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                                    Software Engineer & Content Creator. I write about modern web development, UI/UX design, and productivity.
                                </p>
                                <button className="mt-6 w-full py-2.5 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-all">
                                    Follow Profile
                                </button>
                            </div>
                        </div>

                        {/* Top Authors */}
                        <TopAuthors />
                        
                        {/* Newsletter (Optional Premium Touch) */}
                        <div className="bg-blue-600 p-6 rounded-2xl text-white text-center">
                            <h3 className="font-bold text-lg mb-2">Subscribe to our newsletter</h3>
                            <p className="text-blue-100 text-sm mb-4">Get the latest posts delivered right to your inbox.</p>
                            <input type="email" placeholder="Your email address" className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none mb-3" />
                            <button className="w-full py-2 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100">Subscribe</button>
                        </div>
                    </div>
                </div>

                {/* --- Related Posts --- */}
                <div className="mt-24 lg:mt-32 border-t border-gray-100 pt-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10">Read Next</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {relatedLoading
                            ? Array.from({ length: 3 }).map((_, idx) => <BlogCard key={idx} loading />)
                            : blogs?.data?.result
                                ?.filter((b: TBlog) => b._id !== blogId)
                                .slice(0, 3)
                                ?.map((blog: TBlog) => (
                                    <BlogCard key={blog._id} blog={blog} />
                                ))}
                    </div>
                </div>

            </Container>

            {/* --- Mobile Bottom Floating Action Bar (App-like feel) --- */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-200 p-4 z-40">
                <div className="flex items-center justify-between max-w-md mx-auto px-4">
                    <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-red-500">
                        <Heart size={20} />
                        <span className="text-[10px] font-medium">124</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-blue-600">
                        <MessageCircle size={20} />
                        <span className="text-[10px] font-medium">42</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-yellow-600">
                        <Bookmark size={20} />
                        <span className="text-[10px] font-medium">Save</span>
                    </button>
                    <button className="p-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700">
                        <Share2 size={20} />
                    </button>
                </div>
            </div>

        </div>
    );
};

// Helper Component for Social Buttons (Desktop)
const ShareButton = ({ icon, label }: { icon: React.ReactNode, label?: string }) => (
    <button className="group relative flex items-center justify-center w-10 h-10 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all">
        {icon}
        {label && (
            <span className="absolute left-14 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {label}
            </span>
        )}
    </button>
);

export default BlogDetails;