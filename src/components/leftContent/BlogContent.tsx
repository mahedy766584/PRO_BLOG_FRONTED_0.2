import HTMLRenderer from "./HTMLRenderer";
import MarkdownRenderer from "./MarkdownRenderer";


type Blog = {
    contentType: string;
    content: string;
};

type BlogContentProps = {
    blog: Blog;
};

const BlogContent = ({ blog }: BlogContentProps) => {
    
    return (
        <>
            {
                blog.contentType === "html" ?
                    (<HTMLRenderer html={blog.content} />)
                    :
                    (<MarkdownRenderer content={blog.content} />)
            }
        </>
    );
};

export default BlogContent;