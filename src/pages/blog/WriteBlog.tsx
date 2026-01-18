import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import ProBlogEditor from "@/form/ProBlogEditor";
import ProBlogForm from "@/form/ProBlogForm";
import ProBlogInput from "@/form/ProBlogInput";
import ProBlogProfileInput from "@/form/ProBlogProfileInput";
import ProBlogSelect from "@/form/ProBlogSelect";
import { useWriteBlogMutation } from "@/redux/features/blogManagement.api";
import { useGetAllCategoryQuery } from "@/redux/features/categoryManagement.api";
import { useGetAllTagQuery } from "@/redux/features/tagManagement.api";
import { MoveRight } from "lucide-react";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

type TCategoryOptions = {
    createdAt?: string;
    updatedAt?: string;
    name: string;
    slug?: string;
    _id: string;
};

const WriteBlog = () => {

    const { data: categories, isLoading } = useGetAllCategoryQuery(undefined);
    const { data: tags } = useGetAllTagQuery(undefined);
    const [writeBlog] = useWriteBlogMutation();

    const handleWriteBlogForm: SubmitHandler<FieldValues> = async (data) => {
        console.log(data)

        const formData = new FormData();

        const blogData = {
            title: data.title || {},
            content: data.content || {},
            category: data.category || {},
            tags: Array.isArray(data.tags) ? data.tags : [data.tags],
            contentType: "html",
            status: "published",
        };

        formData.append("data", JSON.stringify(blogData));
        formData.append("file", data.coverImage);

        try {

            const res = await writeBlog(formData);
            console.log(res)

        } catch (err) {
            console.log(err)
        }

    };

    const categoryOptions = categories?.data.map(({ name, _id }: TCategoryOptions) => ({
        label: name,
        value: _id,
    })) || [];

    const tagOptions = tags?.data.map(({ name, _id }: TCategoryOptions) => ({
        label: name,
        value: _id,
    })) || [];

    console.log(categoryOptions)

    console.log(tagOptions)


    return (
        <>
            <div className="bg-[#F2F8F7] py-10 w-full h-full">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <ProBlogForm onSubmit={handleWriteBlogForm}>

                            <div className="space-y-6">
                                <ProBlogInput
                                    type="text"
                                    name="title"
                                    label="Title"
                                    rules={{ required: "Title is required" }}
                                />

                                <ProBlogEditor
                                    label="Write your story"
                                    name="content"
                                    placeholder="Tell your story..."
                                    rules={{ required: "Content is required" }}
                                    theme="snow"
                                />

                                <div className="flex flex-col items-start w-full">

                                    <ProBlogProfileInput
                                        name="Cover Image"
                                        label="coverImage"
                                        defaultImage="https://ibb.co/Wzj8mD4"
                                    />

                                    <div className="flex items-center mt-6 gap-5 w-full">
                                        <ProBlogSelect
                                            name="category"
                                            label="Category"
                                            options={categoryOptions}
                                            disabled={isLoading}
                                        />

                                        <ProBlogSelect
                                            name="tags"
                                            label="Tags"
                                            options={tagOptions}
                                            disabled={isLoading}
                                        />
                                    </div>

                                </div>
                            </div>


                            <Button className="mt-6 cursor-pointer">Write your story</Button>

                        </ProBlogForm>
                    </div>
                </Container>
            </div>

            {/* Second Button content */}
            <div className="mt-16">
                <Container>
                    <div className="space-y-10">
                        <h1 className="text-[#222222] text-center text-xl font-normal"><span className="bg-[#00AAA1] text-white">How can you earn</span>  by writing on medium</h1>

                        <div className="flex justify-between items-center text-center">
                            <div className="flex flex-col justify-center space-y-2 items-center w-125">
                                <h1 className="text-lg font-medium">By ad  revinue</h1>
                                <p>Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives without 24/365 catalysts for change. Completely streamline functionalized models and out-of-the-box functionalities. </p>
                            </div>
                            <div className="flex flex-col justify-center space-y-2 items-center w-125">
                                <h1 className="text-lg font-medium">by affiliate  programme</h1>
                                <p>Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives without 24/365 catalysts for change. Completely streamline functionalized models and out-of-the-box functionalities. </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Third Button content */}
            <div className="mt-16">
                <Container>
                    <div className="space-y-4 text-center flex justify-center items-center flex-col">
                        <h1 className="text-lg font-medium">want to know more?</h1>
                        <Link to={'#'}>
                            <button className="text-[#00AAA1] font-medium flex items-center gap-1 cursor-pointer text-center ">Go to FEQ page <MoveRight /></button>
                        </Link>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default WriteBlog;