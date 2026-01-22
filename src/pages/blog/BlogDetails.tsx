/* eslint-disable @typescript-eslint/no-unused-vars */
import Container from "@/components/Container";
import BlogContent from "@/components/leftContent/BlogContent";
import ProfileAvatarContent from "@/components/common/profile/ProfileAvatarContent";
import TopAuthors from "@/components/topAuthors/TopAuthors";
import { useGetAllBlogQuery, useGetSingleBlogQuery } from "@/redux/features/blogManagement.api";
import moment from "moment";
import { useParams } from "react-router-dom";
import SocialProfile from "@/components/common/profile/SocialProfile";
import SectionTitle from "@/components/common/SectionTitle";
import { Share2Icon } from "lucide-react";
import BlogCard from "@/components/leftContent/BlogCard";
import type { TBlog } from "@/types";
import BlogActions from "@/components/leftContent/BlogActions";
const BlogDetails = () => {

    const { blogId, slug } = useParams<{
        blogId: string;
        slug: string;
    }>();

    const { data: blogs, isLoading } = useGetAllBlogQuery(undefined);

    const { data: blogResponse } = useGetSingleBlogQuery(blogId!, {
        skip: !blogId,
    });


    const { title, coverImage, author, readTime, createdAt, category } = blogResponse?.data || {};

    const postedDate = createdAt ? moment(createdAt).format("DD MMM YYYY") : "No date";

    const skeletonCount = 2;

    return (
        <div className="mt-12">
            <Container>
                <div className="flex items-start justify-between gap-12">
                    <div className="space-y-4">
                        <button className="bg-[#DFF1F0] text-[#666666] px-3 py-0.5 rounded-[3px] text-sm font-normal w-fit text-start">{category?.name}</button>
                        <h1 className="text-3xl font-medium">{title}</h1>
                        <ProfileAvatarContent
                            profileImage={author?.profileImage}
                            firstName={author?.name?.firstName}
                            readTime={readTime}
                            postedDate={postedDate}
                        />
                        <img src={coverImage} />

                        <BlogContent blog={blogResponse?.data} />

                        <div className="flex items-center justify-center mt-16">
                            <SocialProfile />
                        </div>

                        <div className="">
                            <div>
                                <Share2Icon className="text-third cursor-pointer" size={30} />
                            </div>
                            <SectionTitle
                                firstText="See related"
                                secondText="post"
                                className="text-start mt-10 justify-start items-start absolute"
                            />

                            <div className="w-full mt-28 overflow-auto grid grid-cols-2 gap-3">
                                {isLoading
                                    ? Array.from({ length: skeletonCount }).map((_, idx) => <BlogCard showActions={false} key={idx} loading />)
                                    : blogs?.data?.result
                                    ?.slice(0, 2)
                                    ?.map((blog: TBlog) => (
                                        <BlogCard showActions={false} key={blog._id} blog={blog} />
                                    ))}
                            </div>

                            <div className="mt-10 bg-second px-2 py-2 rounded-full">
                                <BlogActions blogId={blogId} />
                            </div>
                        </div>
                    </div>

                    <div className="-mt-10">
                        <TopAuthors />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BlogDetails;