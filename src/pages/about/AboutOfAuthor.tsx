import { useGetSingleAuthorQuery } from "@/redux/features/authorsManagement.api";
import { useParams } from "react-router-dom";

const AboutOfAuthor = () => {

    const { userId: _id } = useParams();

    const { data: author } = useGetSingleAuthorQuery(_id);

    console.log(_id)

    console.log(author)

    return (
        <div>
            <h1>This is AboutOfAuthor component</h1>
        </div>
    );
};

export default AboutOfAuthor;