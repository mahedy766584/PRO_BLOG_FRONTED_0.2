import { Bookmark, MessageCircle, ThumbsUp } from "lucide-react";
import CommentDrawer from "../comment/CommentDrawer";

type BlogActionsProps = {
    likeCount: number;
    commentCount: number;
    onLike: () => void;
    onBookmark: () => void;
    onOpenComment: () => void;
    open: boolean;
    setOpen: (open: boolean) => void;
    blogId?: string;
};

const BlogActions = ({
    likeCount,
    commentCount,
    onLike,
    onBookmark,
    onOpenComment,
    open,
    setOpen,
    blogId,
}: BlogActionsProps) => {
    return (
        <div className="mt-2 relative flex items-center justify-between text-sec">

            <div className="flex items-center gap-6">

                <span onClick={onLike} className="flex items-center gap-2 cursor-pointer">
                    <ThumbsUp size={18} />
                    {likeCount > 0 && <p>{likeCount}</p>}
                </span>

                <span onClick={onOpenComment} className="flex items-center gap-2 cursor-pointer">
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

            <span onClick={onBookmark} className="cursor-pointer">
                <Bookmark size={18} />
            </span>
        </div>
    );
};

export default BlogActions;
