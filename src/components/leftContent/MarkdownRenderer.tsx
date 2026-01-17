import DOMPurify from "dompurify";
import Markdown from 'react-markdown'
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

type MarkdownRendererProps = {
    content: string;
};

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {

    const sanitized = DOMPurify.sanitize(content);

    return (
        <div className="prose prose-lg max-w-none">
            <Markdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
            >
                {sanitized}
            </Markdown>
        </div>
    );
};

export default MarkdownRenderer;