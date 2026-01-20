/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCreateBookmarkMutation } from "@/redux/features/bookMarkManagement.api";
import { useAddLikeMutation, useGetLikeByBlogPostQuery } from "@/redux/features/likeManagement.api";
import BlogCardSkeleton from "@/utils/BlogCardSkeleton";
import moment from "moment";
import { useState } from "react";
import { toast } from "sonner";
import { useGetCommentByBlogPostQuery } from "@/redux/features/commentManagement.api";
import { Link } from "react-router-dom";
import type { BlogCardProps } from "@/types";
import BlogActions from "./BlogActions";
import ProfileAvatarContent from "../shared/ProfileAvatarContent";


const BlogCard = ({ blog, loading = false }: BlogCardProps) => {

    const [open, setOpen] = useState(false);

    const showDrawer = () => setOpen(true);

    const blogId = blog?._id;

    const { data: likeResponse } = useGetLikeByBlogPostQuery(
        { id: blogId },
        { skip: !blogId }
    );

    const { data: commentResponse } = useGetCommentByBlogPostQuery(
        { id: blogId },
        { skip: !blogId }
    );

    const [addLike] = useAddLikeMutation();
    const [createBookmark] = useCreateBookmarkMutation();

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


    const likeCount = likeResponse?.data?.likeCount || 0;
    const commentCount = commentResponse?.data?.length || 0;

    const handleLike = async () => {
        if (!blogId) return;
        try {
            const res = await addLike({ blogPost: blogId }).unwrap();
            toast.success(res.data.message);
        } catch (err: any) {
            toast.error(err?.data?.message || "Something went wrong!");
        }
    };

    const handleBookMark = async () => {
        if (!blogId) return;
        try {
            const res = await createBookmark({ blogPost: blogId }).unwrap();
            toast.success(res.message);
        } catch (err: any) {
            toast.error(err?.data?.message || "Something went wrong!");
        }
    };
    

    return (
        <div key={blog._id} className="container mx-auto px-2 bg-[#FFFFFF] py-3 rounded-md">

            <div className="flex w-90 flex-col space-y-4">
                <Link to={`/blogDetail/${blog?._id}/${blog?.slug}`}>
                    <div className="flex flex-col lg:space-y-0 space-y-2 justify-between gap-5 cursor-pointer overflow-hidden">
                        <button className="bg-[#DFF1F0] text-[#666666] px-3 py-0.5 rounded-[3px] text-sm font-normal w-fit text-start">{blog.category?.name}</button>
                        <h1 className="text-2xl text-[#222222] font-bold">{blog.title}</h1>

                        <img
                            className="lg:w-90 lg:h-57.25 object-cover rounded"
                            alt={blog.title}
                            src={blog.coverImage}
                        />

                        <div className="relative space-y-3.5">
                            <ProfileAvatarContent
                                profileImage={blog.author?.profileImage ?? ""}
                                firstName={blog.author?.name?.firstName ?? ""}
                                postedDate={postedDate}
                                readTime={blog?.readTime ?? ""}
                            />
                            <p className="text-[#555555] text-[18px] font-normal">{blog?.excerpt?.slice(0, 90)}...</p>
                        </div>
                    </div>
                </Link>
                <BlogActions onLike={handleLike} likeCount={likeCount} onOpenComment={showDrawer} onBookmark={handleBookMark} open={open} setOpen={setOpen} blogId={blogId} commentCount={commentCount} />
            </div>

        </div >
    );
};

export default BlogCard;