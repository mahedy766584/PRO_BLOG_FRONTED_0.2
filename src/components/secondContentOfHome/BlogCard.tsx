import type { BlogCardProps } from "@/types";
import BlogCardSkeleton from "@/utils/BlogCardSkeleton";
import moment from "moment";
import ProfileAvatarContent from "../common/profile/ProfileAvatarContent";

const BlogCard = ({ blog, loading = false }: BlogCardProps) => {
    
    if (loading) {
        return (
            <div className="w-full">
                <BlogCardSkeleton
                    avatar={false}
                    rows={2} 
                    rowHeight={10}
                    width="100%"
                />
            </div>
        )
    };

    if (!blog) return null;

    const postedDate = blog.createdAt ? moment(blog.createdAt).format("MMM DD, YYYY") : "No date";

    return (
        <article className="group relative flex flex-col lg:flex-row bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out h-full">
            
            <div className="relative w-full lg:w-56 shrink-0 overflow-hidden h-40 lg:h-auto">
                <img 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    src={blog.coverImage} 
                    alt={blog.title}
                    loading="lazy"
                />
                
                <span className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-[#00AAA1] px-2 py-0.5 rounded-full text-[10px] font-bold shadow-sm lg:hidden uppercase tracking-wider">
                    {blog.category?.name}
                </span>
            </div>

            <div className="flex-1 flex flex-col justify-between p-4 gap-2">
                
                <div className="space-y-1.5">
                    <div className="hidden lg:flex items-center justify-between">
                        <span className="text-[#009688] text-[11px] font-bold tracking-wider uppercase">
                            {blog.category?.name}
                        </span>
                    </div>

                    <h2 className="text-lg font-bold text-gray-800 leading-tight group-hover:text-[#00AAA1] transition-colors duration-200 line-clamp-2">
                        {blog.title}
                    </h2>

                    <p className="text-gray-500 text-sm leading-snug line-clamp-2">
                        {blog.excerpt ? blog.excerpt : "Click to read the full story..."}
                    </p>
                </div>

                <div className="pt-2 mt-auto border-t border-gray-50">
                    <ProfileAvatarContent
                        profileImage={blog.author?.profileImage ?? ""}
                        firstName={blog.author?.name?.firstName ?? "Unknown"}
                        postedDate={postedDate}
                        readTime={blog?.readTime ?? "5 min"}
                    />
                </div>
            </div>
        </article>
    );
};

export default BlogCard;