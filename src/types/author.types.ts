export type TAuthor = {
    _id: string;
    profileImage: string;
    bio: string;
    email: string;
    bookmarks: [];
    user: {
        profileImage: string;
        name?: {
            firstName: string;
            lastName: string;
        },
        bio?: string;
    };
};

export type TAuthorCardProps = {
    author: TAuthor;
};