/* eslint-disable @typescript-eslint/no-explicit-any */
import { Bookmark, MessageCircle, ThumbsUp } from "lucide-react";
import CommentDrawer from "../comment/CommentDrawer";
import { useState } from "react";
import { useAddLikeMutation, useGetLikeByBlogPostQuery } from "@/redux/features/likeManagement.api";
import { useGetCommentByBlogPostQuery } from "@/redux/features/commentManagement.api";
import { useCreateBookmarkMutation } from "@/redux/features/bookMarkManagement.api";
import { toast } from "sonner";

type BlogActionsProps = {
    blogId?: string;
};

const BlogActions = ({ blogId }: BlogActionsProps) => {

    const [open, setOpen] = useState(false);

    const showDrawer = () => setOpen(true);

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
        <div className="mt-2 relative flex items-center justify-between text-sec">

            <div className="flex items-center gap-6">

                <span onClick={handleLike} className="flex items-center gap-2 cursor-pointer">
                    <ThumbsUp size={18} />
                    {likeCount > 0 && <p>{likeCount}</p>}
                </span>

                <span onClick={showDrawer} className="flex items-center gap-2 cursor-pointer">
                    <MessageCircle size={18} />
                    {commentCount > 0 && <p>{commentCount}</p>}
                </span>

                {blogId && (
                    <CommentDrawer
                        open={open}
                        setOpen={setOpen}
                        blogPost={blogId}
                    />
                )}

            </div>

            <span onClick={handleBookMark} className="cursor-pointer">
                <Bookmark size={18} />
            </span>
        </div>
    );
};

export default BlogActions;
