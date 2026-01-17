import { Skeleton } from "@/components/ui/skeleton";

type TBlogCardSkeletonProps = {
    active?: boolean;
    avatar?: boolean;
    avatarSize?: number; 
    rows?: number;
    rowHeight?: number;
    rowGap?: number; 
    rowWidths?: (string | number)[];
    width?: string | number;
    height?: string | number;
    className?: string;
};

const BlogCardSkeleton = ({
    active = true,
    avatar = true,
    avatarSize = 48,
    rows = 4,
    rowHeight = 16,
    rowGap = 12,
    rowWidths,
    width = "100%",
    height,
    className = "",
}: TBlogCardSkeletonProps) => {
    if (!active) return null;

    return (
        <div
            className={`flex gap-4 ${className} bg-gray-50`}
            style={{ width, height }}
        >

            {avatar && (
                <Skeleton
                    className="shrink-0 rounded-full"
                    style={{
                        width: avatarSize,
                        height: avatarSize,
                    }}
                />
            )}

            <div className="flex-1" style={{ width }}>
                <div className="flex flex-col" style={{ gap: rowGap }}>
                    {Array.from({ length: rows }).map((_, index) => (
                        <Skeleton
                            key={index}
                            style={{
                                height: rowHeight,
                                width:
                                    rowWidths?.[index] ??
                                    (index === rows - 1
                                        ? "60%"
                                        : `${90 - index * 8}%`),
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogCardSkeleton;
