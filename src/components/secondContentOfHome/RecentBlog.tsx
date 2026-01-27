import { useGetAllBlogQuery } from "@/redux/features/blogManagement.api";
import BlogCard from "./BlogCard";
import type { TBlog } from "@/types";
import { MoveLeft, MoveRight } from "lucide-react";

const RecentBlog = () => {

    const { data: blogs, isLoading } = useGetAllBlogQuery(undefined);

    const skeletonCount = blogs?.data?.result?.length || 5;

    return (
        <div className="mx-auto max-w-6xl">
            <h1 className="text-xl font-medium mt-10 pb-10">
                <span className="bg-[#00AAA1] text-[#E8F3F3]">Recently</span> Posted
            </h1>

            <div className="grid grid-cols-1 lg:space-y-0 space-y-5 gap-4">
                {isLoading
                    ? Array.from({ length: skeletonCount }).map((_, idx) => <BlogCard key={idx} loading />)
                    : blogs?.data?.result?.map((blog: TBlog) => (
                        <BlogCard key={blog._id} blog={blog} />
                    ))}
            </div>

            <div className="mt-16 lg:flex hidden items-center gap-3 justify-center">
                <div>
                    <button className="px-4 gap-1.5 flex items-center justify-center text-[#666666] py-1 border rounded border-solid border-[#666666] hover:bg-[#00AAA1] duration-300 hover:text-white hover:border-white font-normal cursor-pointer "><MoveLeft /> Prev</button>
                </div>
                <div>
                    <button className="px-4 gap-1.5 flex items-center justify-center  py-1 border rounded border-solid border-[#666666] bg-[#00AAA1] duration-300 text-white hover:border-white font-normal cursor-pointer ">1</button>
                </div>
                <div>
                    <button className="px-4 gap-1.5 flex items-center justify-center text-[#666666] py-1 border rounded border-solid border-[#666666] hover:bg-[#00AAA1] duration-300 hover:text-white hover:border-white font-normal cursor-pointer ">2</button>
                </div>
                <div>
                    <button className="px-4 gap-1.5 flex items-center justify-center text-[#666666] py-1 border rounded border-solid border-[#666666] hover:bg-[#00AAA1] duration-300 hover:text-white hover:border-white font-normal cursor-pointer ">3</button>
                </div>
                <div>
                    <button className="px-4 gap-1.5 flex items-center justify-center text-[#666666] py-1 border rounded border-solid border-[#666666] hover:bg-[#00AAA1] duration-300 hover:text-white hover:border-white font-normal cursor-pointer "><MoveRight /> Next</button>
                </div>
            </div>
        </div>
    );
};

export default RecentBlog;