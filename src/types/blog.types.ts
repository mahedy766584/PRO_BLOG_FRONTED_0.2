export type TUser = {
    name: {
        firstName: string;
        lastName: string;
    };
    profileImage: string;
    _id: string;
};

export type TCategory = {
    name: string;
};

export type TBlog = {
    _id: string;
    title: string;
    coverImage: string;
    excerpt: string;
    user?: TUser | undefined;
    author?: TUser | undefined;
    createdAt?: Date | undefined;
    profileImage?: string;
    readTime?: string;
    slug?: string;
    category?: TCategory;
    status?: string;
};

export type BlogCardProps = {
    blog?: TBlog;
    loading?: boolean;
    showActions?: boolean;
};