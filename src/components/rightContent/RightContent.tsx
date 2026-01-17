import { useGetAllBlogQuery } from "@/redux/features/blogManagement.api";
import ScrollWithIndicator from "./ScrollWithIndicator";
import RightCard from "./RightCard";
import type { TBlog } from "@/types";
import BlogCardSkeleton from "@/utils/BlogCardSkeleton";


const RightCart = () => {

    const { data: blogResponse, isLoading } = useGetAllBlogQuery(undefined);

    if (isLoading) {
        return (
            <BlogCardSkeleton
                avatar={false}
                rows={3}
                rowHeight={12}
                width="100%"
            />
        )
    };

    const blogResponseCount = blogResponse?.data?.result?.length || 5;
    return (
        <div className="px-4">
            <h1 className="text-xl font-medium mt-10 mb-10">
                <span className="bg-[#00AAA1] text-[#E8F3F3]">Popular</span> Posted
            </h1>
            <ScrollWithIndicator>
                <div className="h-[70vh]">
                    {isLoading
                        ? Array.from({ length: blogResponseCount }).map((_, idx) => <RightCard key={idx} loading />)
                        : blogResponse?.data?.result?.map((blog: TBlog) => (
                            <RightCard key={blog._id} blog={blog} />
                        ))}
                </div>
            </ScrollWithIndicator>
        </div>
    );
};

export default RightCart;