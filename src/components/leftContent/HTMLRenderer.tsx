import DOMPurify from "dompurify";
import "./blog-prose.css";

type HTMLRendererProps = {
  html: string;
};

const HTMLRenderer = ({ html }: HTMLRendererProps) => {
  const clean = DOMPurify.sanitize(html);

  return (
    <article
      className="blog-prose prose prose-lg max-w-none dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
};

export default HTMLRenderer;
