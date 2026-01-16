import BlogCard from "@/components/leftCard/BlogCard";
import Container from "@/components/Container";
import { useGetAllBlogQuery } from "@/redux/features/blogManagement.api";
import type { TBlog } from "@/types";

const Home = () => {

    const { data: blogs, isLoading } = useGetAllBlogQuery(undefined);

    console.log(blogs)

    const skeletonCount = blogs?.data?.result?.length || 5;


    return (
        <div className="bg-[#f2f8f7]">
            <Container>
                <div className="w-full h-[calc(100vh-30px)]">
                    {/* Left side */}
                    <div className="mx-auto max-w-6xl flex items-start justify-between gap-6 mb-6">
                        <div>
                            <h1 className="text-xl font-medium mt-5 mb-10">
                                <span className="bg-[#00AAA1] text-[#E8F3F3]">Featured</span> This month
                            </h1>
                            <div className="h-[74vh] overflow-auto scrollbar-custom grid grid-cols-2 gap-3">
                                {isLoading
                                    ? Array.from({ length: skeletonCount }).map((_, idx) => <BlogCard key={idx} loading />)
                                    : blogs?.data?.result?.map((blog: TBlog) => (
                                        <BlogCard key={blog._id} blog={blog} />
                                    ))}
                            </div>
                        </div>
                        {/* Right side */}
                        <div className="pb-5">
                            {/* <RightCart /> */}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Home;