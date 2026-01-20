import Container from "@/components/Container";
import ProfileAvatarContent from "@/components/shared/ProfileAvatarContent";
import { useGetSingleBlogQuery } from "@/redux/features/blogManagement.api";
import moment from "moment";
import { useParams } from "react-router-dom";

const BlogDetails = () => {

    const { blogId, slug } = useParams<{
        blogId: string;
        slug: string;
    }>();

    const { data: blogResponse } = useGetSingleBlogQuery(blogId!, {
        skip: !blogId,
    });

    console.log(blogResponse)

    const { title, coverImage, author, readTime, createdAt,category } = blogResponse?.data || {};

    const postedDate = createdAt ? moment(createdAt).format("DD MMM YYYY") : "No date";

    return (
        <div>
            <Container>
                <div>
                    <button className="bg-[#DFF1F0] text-[#666666] px-3 py-0.5 rounded-[3px] text-sm font-normal w-fit text-start">{category?.name}</button>
                    <h1>{title}</h1>
                    <ProfileAvatarContent
                        profileImage={author?.profileImage}
                        firstName={author?.name?.firstName}
                        readTime={readTime}
                        postedDate={postedDate}
                    />
                    <img src={coverImage} />
                </div>
            </Container>
        </div>
    );
};

export default BlogDetails;