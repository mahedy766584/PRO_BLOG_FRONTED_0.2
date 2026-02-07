import React from "react";
import { Link } from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BlogBreadcrumbProps {
    title: string;
    category?: string;
}

const BlogBreadcrumb: React.FC<BlogBreadcrumbProps> = ({ title, category }) => {
    return (
        <Breadcrumb className="mb-8">
            <BreadcrumbList className="flex-nowrap overflow-x-auto whitespace-nowrap scrollbar-hide text-xs md:text-sm">

                {/* Step 1: Home */}
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link to="/" className="hover:text-primary transition-colors">
                            Home
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator />

                {/* Step 2: Blogs */}
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link to="/blogs" className="hover:text-primary transition-colors">
                            Blogs
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {/* Optional: Step 3 - Category (যদি থাকে) */}
                {category && (
                    <>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link to={`/blogs/${category.toLowerCase()}`} className="capitalize hover:text-primary transition-colors">
                                    {category}
                                </Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </>
                )}

                <BreadcrumbSeparator />

                {/* Step 4: Current Page Title */}
                <BreadcrumbItem>
                    {/* Truncate Logic: মোবাইলে ছোট দেখাবে, ডেস্কটপে একটু বড় */}
                    <BreadcrumbPage className="font-medium truncate max-w-37.5 md:max-w-xs text-foreground">
                        {title}
                    </BreadcrumbPage>
                </BreadcrumbItem>

            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default BlogBreadcrumb;