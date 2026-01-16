export type TAuthor = {
    _id: string;
    profileImage: string;
    name: {
        firstName: string;
        lastName: string;
    };
    bio: string;
    email: string;
    bookmarks: [];
};

export type TAuthorCardProps = {
    author: TAuthor;
};