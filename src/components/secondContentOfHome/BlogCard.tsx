import type { BlogCardProps } from "@/types";
import BlogCardSkeleton from "@/utils/BlogCardSkeleton";
import moment from "moment";
import ProfileAvatarContent from "../common/profile/ProfileAvatarContent";

const BlogCard = ({ blog, loading = false }: BlogCardProps) => {
    
    if (loading) {
        return (
            <BlogCardSkeleton
                avatar={false}
                rows={3}
                rowHeight={12}
                width="100%"
            />
        )
    };
    if (!blog) return null;

    const postedDate = blog.createdAt ? moment(blog.createdAt).format("DD MMM YYYY") : "No date";

    return (
        <div className="w-full rounded lg:flex gap-2 lg:space-y-0 space-y-2">
            <img className="rounded-l lg:w-52 lg:h-48" src={blog.coverImage} />
            <div className="space-y-3 px-3 mt-3">
                <button className="bg-[#DFF1F0] text-[#666666] px-3 py-0.5 rounded-[3px] text-sm font-normal">{blog.category?.name}</button>
                <h1 className="text-xl text-[#222222] font-bold">{blog.title}</h1>

                <ProfileAvatarContent
                    profileImage={blog.author?.profileImage ?? ""}
                    firstName={blog.author?.name?.firstName ?? ""}
                    postedDate={postedDate}
                    readTime={blog?.readTime ?? ""}
                />
                <p className="text-[#555555] text-[16px]">{blog?.excerpt?.slice(0, 60)}...</p>

            </div>
        </div>
    );
};

export default BlogCard;