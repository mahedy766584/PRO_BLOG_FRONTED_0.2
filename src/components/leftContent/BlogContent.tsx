import HTMLRenderer from "./HTMLRenderer";
import MarkdownRenderer from "./MarkdownRenderer";

type Blog = {
  contentType: "html" | "markdown";
  content: string;
};

type BlogContentProps = {
  blog: Blog;
};

const BlogContent = ({ blog }: BlogContentProps) => {
  if (!blog?.content) return null;

  return blog.contentType === "html" ? (
    <HTMLRenderer html={blog.content} />
  ) : (
    <MarkdownRenderer content={blog.content} />
  );
};

export default BlogContent;
