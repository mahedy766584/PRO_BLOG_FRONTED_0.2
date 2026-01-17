import type { BlogCardProps } from "@/types";
import BlogCardSkeleton from "@/utils/BlogCardSkeleton";
import moment from "moment";
import ProfileAvatarContent from "../shared/ProfileAvatarContent";

const RightCard = ({ blog, loading = false }: BlogCardProps) => {

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
        <div key={blog?._id} className="flex  justify-start mb-10 py-3 w-80">

            <div className="space-y-3">
                <button className="bg-[#DFF1F0] text-[#666666] px-3 py-0.5 rounded-[3px] text-sm font-normal">{blog.category?.name}</button>
                <h1 className="text-[16px] cursor-pointer font-bold text-[#222222]">{blog?.title}</h1>

                <ProfileAvatarContent
                    profileImage={blog.author?.profileImage ?? ""}
                    firstName={blog.author?.name?.firstName ?? ""}
                    postedDate={postedDate}
                    readTime={blog?.readTime ?? ""}
                />

                <p className="text-[#555555] text-[18px] font-normal">{blog?.excerpt?.slice(0, 60)}...</p>

            </div>
        </div>
    );
};

export default RightCard;