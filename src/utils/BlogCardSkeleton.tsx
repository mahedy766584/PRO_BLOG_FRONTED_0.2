import { Skeleton } from "@/components/ui/skeleton";

type TBlogCardSkeletonProps = {
    active?: boolean;
    avatar?: boolean;
    rows?: number;
    width?: number | string;
    marginBottom?: number;
};

const BlogCardSkeleton = ({
    active = true,
    avatar = true,
    rows = 4,
    width = "100%",
    marginBottom = 16,
}: TBlogCardSkeletonProps) => {
    if (!active) return null;

    return (
        <div
            className="flex gap-4 bg-gray-300"
        >
            {/* Avatar */}
            {avatar && (
                <Skeleton className="h-12 w-12 rounded-full shrink-0" />
            )}

            {/* Content */}
            <div className="flex-1 space-y-3" style={{ width }}>
                {Array.from({ length: rows }).map((_, index) => (
                    <Skeleton
                        key={index}
                        className="h-4"
                        style={{
                            width:
                                index === rows - 1
                                    ? "60%"
                                    : `${90 - index * 10}%`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default BlogCardSkeleton;
