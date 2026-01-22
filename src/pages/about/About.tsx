import Container from "@/components/Container";
import { FeaturedCard } from "@/components/features/FeaturedCard";
import SectionDescription from "@/components/common/SectionDescription";
import SectionTitle from "@/components/common/SectionTitle";
import { useGetAllAuthorQuery } from "@/redux/features/authorsManagement.api";
import { MoveRight, SquarePen } from "lucide-react";
import { Link } from "react-router-dom";

type TAuthor = {
    user: {
        profileImage: string;
        name: {
            firstName: string;
            lastName: string;
        };
        _id: string;
    }
    _id: string;
};

const About = () => {

    const { data: authors } = useGetAllAuthorQuery(undefined);

    return (
        <div>
            <div className="bg-second py-14">
                <Container>
                    <div className="flex flex-col justify-center items-center text-center space-y-5">
                        <SectionTitle
                            firstText="Notebook is a place"
                            secondText="where you can find your perfect blogs"
                        />
                        <SectionDescription
                            text="Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives without 24/365 catalysts for change. Completely streamline functionalized models and out-of-the-box functionalities. Authoritatively target proactive vortals vis-a-vis exceptional results. Compellingly brand emerging sources and compelling materials. Globally iterate parallel content"
                            color="forth"
                            width="md"
                        />

                        <h1 className="text-lg text-third font-medium">The best ideas can change who we are.</h1>
                        <SectionDescription
                            text="Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives without 24/365 catalysts for"
                            color="forth"
                            width="md"
                        />
                    </div>

                    <div className="flex space-y-7 flex-col justify-center items-center mt-20">
                        <SectionTitle
                            firstText="We are"
                            secondText="featured on"
                            size="md"
                            width="lg"
                        />

                        <FeaturedCard />
                    </div>
                </Container>
            </div>

            <Container>
                <div className="mt-20 flex justify-center space-y-7 items-center flex-col">
                    <SectionTitle
                        firstText="Meet"
                        secondText="out authors"
                        size="md"
                        width="full"
                    />

                    <div className="grid grid-cols-2 gap-6">
                        {
                            authors?.data?.map((author: TAuthor) => {
                                console.log(author?.user._id)
                                return (
                                    <div key={author?._id} className="flex gap-4 justify-center items-center">
                                        <img src={author?.user?.profileImage} className="w-24 h-24 object-cover" />
                                        <div className="space-y-4 px-2">
                                            <span className="flex items-center text-third text-lg font-medium gap-2">
                                                <h3>{author?.user?.name?.firstName}</h3>
                                                <h3>{author?.user?.name?.lastName}</h3>
                                            </span>

                                            <Link to={`/about/${author?.user?._id}`}>
                                                <button className="flex cursor-pointer items-center gap-2 font-medium text-main">See details about author <MoveRight /></button>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>

            </Container >

            <div className="mx-auto bg-second w-3/4 mt-20 h-67 flex justify-center items-center">
                <div className="space-y-7 flex justify-center items-center flex-col">
                    <SectionTitle
                        firstText="Want to"
                        secondText="write on notebook?"
                        width="full"
                    />
                    <SectionDescription
                        text="there have some simple steps, by following these steps you can be a regular author in notebook"
                        color="forth"
                        width="lg"
                    />
                    <button className="border-main border font-normal flex items-center gap-1.5 text-main rounded-md px-4 py-2 cursor-pointer"><SquarePen />Write on notebook</button>
                </div>
            </div>

        </div >
    );
};

export default About;