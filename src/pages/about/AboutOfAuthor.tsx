import { useGetSingleAuthorQuery } from "@/redux/features/authorsManagement.api";
import { useParams } from "react-router-dom";

const AboutOfAuthor = () => {

    const { authorId } = useParams();

    const { data: author } = useGetSingleAuthorQuery(authorId);

    console.log(author)

    return (
        <div>
            <h1>This is AboutOfAuthor component</h1>
        </div>
    );
};

export default AboutOfAuthor;