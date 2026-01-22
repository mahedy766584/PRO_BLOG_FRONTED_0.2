import BlogCard from "@/components/leftContent/BlogCard";
import Container from "@/components/Container";
import { useGetAllBlogQuery } from "@/redux/features/blogManagement.api";
import type { TBlog } from "@/types";
import RightCart from "@/components/rightContent/RightContent";
import RecentBlog from "@/components/secondContentOfHome/RecentBlog";
import TopAuthors from "@/components/topAuthors/TopAuthors";

const Home = () => {

    const { data: blogs, isLoading } = useGetAllBlogQuery(undefined);

    const skeletonCount = blogs?.data?.result?.length || 5;


    return (
        <>
            <div className="bg-[#f2f8f7]">
                <Container>
                    <div className="w-full h-[calc(100vh-30px)]">
                        {/* Left side */}
                        <div className="flex justify-between mb-6">
                            <div>
                                <h1 className="text-xl font-medium mt-10 mb-10">
                                    <span className="bg-[#00AAA1] text-[#E8F3F3]">Featured</span> This month
                                </h1>
                                <div className="h-[74vh] w-full overflow-auto scrollbar-custom grid grid-cols-2 gap-3">
                                    {isLoading
                                        ? Array.from({ length: skeletonCount }).map((_, idx) => <BlogCard key={idx} loading />)
                                        : blogs?.data?.result?.map((blog: TBlog) => (
                                            <BlogCard key={blog._id} blog={blog} />
                                        ))}
                                </div>
                            </div>
                            {/* Right side */}
                            <div>
                                <RightCart />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <Container>
                {/* Recent blog content */}
                <div className="flex gap-6 mt-12 items-start max-w-6xl mx-auto">
                    {/* Left side */}
                    <RecentBlog />
                    {/* Right side */}
                    <div>
                        <TopAuthors />

                    </div>
                </div>
            </Container>

        </>
    );
};

export default Home;