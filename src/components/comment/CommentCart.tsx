import type { TComment } from "@/types/comment.type";
import { MessageCircle, ThumbsUp } from "lucide-react";
import ProfileAvatar from "../profile/ProfileAvatar";
import BlogContent from "../leftCard/BlogContent";

type SingleCommentProps = {
    comment: TComment;
};


const CommentCart = ({ comment }: SingleCommentProps) => {

    return (
        <div className="flex items-stat flex-col space-y-2.5 py-3 px-2 text-sm">
            <ProfileAvatar
                profileImage={comment.user?.profileImage}
                userFirstName={comment.user.name?.firstName}
                userLastName={comment.user.name?.lastName}
            />
            <BlogContent blog={{
                contentType: comment.contentType ?? "html",
                content: comment.content ?? ""
            }} />
            <div className="flex items-center gap-6 text-sec py-3">
                <span className="cursor-pointer flex items-center gap-1">
                    <ThumbsUp size={18} />
                    <p>3</p>
                </span>
                <span className="flex items-center gap-1 cursor-pointer hover:text-main">
                    <MessageCircle size={18} />
                    <p><span>1</span> reply</p>
                </span>
                <span className="cursor-pointer underline text-main">
                    <p>Reply</p>
                </span>
            </div>
        </div>
    );
};

export default CommentCart;