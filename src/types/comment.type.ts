import type { TBlog, TUser } from "./blog.types"

export type TRootComment = {
    _id?: string;
    success: boolean
    message: string
    data: TComment[]
    blogPost?: TBlog
    content?: string;
    contentType?: string;
}

export type TComment = {
    _id?: string
    blogPost: TBlog
    user: TUser
    content?: string
    contentType?: string
    renderedHtml?: string
    isFlagged?: boolean
    createdAt?: string
    updatedAt?: string
    __v: number
}

export type Name = {
    firstName: string
    lastName: string
}
