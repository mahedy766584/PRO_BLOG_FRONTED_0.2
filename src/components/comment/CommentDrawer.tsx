/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "react-quill-new/dist/quill.snow.css";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import CommentCart from "./CommentCart";
import CommentInput from "./CommentInput";
import type { TComment } from "@/types/comment.type";
import { useCreateCommentMutation, useGetCommentByBlogPostQuery } from "@/redux/features/commentManagement.api";

type CommentDrawerProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  blogPost: string;
};

const CommentDrawer = ({ open, setOpen, blogPost }: CommentDrawerProps) => {
  const [comment, setComment] = useState("");

  const [createComment] = useCreateCommentMutation();

  const { data: commentResponse } = useGetCommentByBlogPostQuery(
    { id: blogPost },
    { skip: !blogPost }
  );

  const commentData = commentResponse?.data || [];

  const handleSubmit = async () => {
    if (!comment || comment.trim() === "" || comment === "<p><br></p>") return;

    try {
      await createComment({
        blogPost,
        content: comment,
        contentType: "html",
      });

      setComment("");
      setOpen(false);
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        side="right"
        className="w-105 sm:w-105 overflow-y-auto px-4 cursor-pointer"
      >
        <SheetHeader>
          <SheetTitle className="text-lg font-medium "> <span className="bg-[#00AAA1] text-[#E8F3F3]">Write</span> Comment</SheetTitle>
        </SheetHeader>

        <div className="space-y-4">
          <CommentInput comment={comment} setComment={setComment} />

          <Button
            onClick={handleSubmit}
            size="lg"
            className="w-full rounded-full cursor-pointer"
          >
            Comment
          </Button>
        </div>

        <Separator className="my-6" />

        <div className="space-y-3">
          {commentData.map((comment: TComment) => (
            <CommentCart key={comment._id} comment={comment} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CommentDrawer;
