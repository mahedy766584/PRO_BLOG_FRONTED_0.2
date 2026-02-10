import { useGetAllAuthorQuery } from "@/redux/features/authorsManagement.api";
import type { TAuthor } from "@/types";
import TopAuthorCard from "./TopAuthorCard";
import { instImages, tagCategories } from "./instImage";
import { Instagram } from "lucide-react";

const TopAuthors = () => {

    const { data: authors } = useGetAllAuthorQuery(undefined);
    // console.log(authors)

    return (
        <div>
            <h1 className="text-xl font-medium mt-10 pb-10">
                <span className="bg-[#00AAA1] text-[#E8F3F3]">Top</span> Authors
            </h1>
            <div className="space-y-7">
                {
                    authors?.data?.map((author: TAuthor) => (
                        <TopAuthorCard key={author._id} author={author} />
                    ))
                }
            </div>
            <div className="w-full h-75 bg-[#00AAA1] mt-16 rounded flex flex-col justify-center px-6 text-[#E8F3F3] space-y-4">
                <h1 className="text-xl font-medium">want to travel sikkim by car?</h1>
                <p className="w-62.5 text-lg tracking-wider">Did you come here for something in particular or just general Riker-bashing? And blowing into</p>
                <button className="text-start px-8 py-2 w-fit cursor-pointer rounded bg-[#FFFFFF] text-[#00AAA1]">Visit Us</button>
            </div>
            <div className="mt-16">
                <h1 className="bg-[#00AAA1] text-xl font-medium w-fit text-[#FFFFFF] ">Categories</h1>

                <div className="mt-12 text-[#1C1C1C] space-y-4">
                    <span className="flex justify-between items-center text-md font-medium">
                        <h3>Lifestyle</h3>
                        <h3>09</h3>
                    </span>
                    <span className="flex justify-between items-center text-md font-medium">
                        <h3>Travel</h3>
                        <h3>05</h3>
                    </span>
                    <span className="flex justify-between items-center text-md font-medium">
                        <h3>Food</h3>
                        <h3>03</h3>
                    </span>
                    <span className="flex justify-between items-center text-md font-medium">
                        <h3>Healthcare</h3>
                        <h3>04</h3>
                    </span>
                    <span className="flex justify-between items-center text-md font-medium">
                        <h3>Lifestyle</h3>
                        <h3>09</h3>
                    </span>
                    <span className="flex justify-between items-center text-md font-medium">
                        <h3>technology</h3>
                        <h3>02</h3>
                    </span>
                    <span className="flex justify-between items-center text-md font-medium">
                        <h3>Programming</h3>
                        <h3>07</h3>
                    </span>
                </div>
            </div>

            <div className="mt-16">
                <h1 className="text-xl font-medium mt-10 pb-10">
                    <span className="bg-[#00AAA1] text-[#E8F3F3]">Today’s</span> Updates
                </h1>
                <div className="grid grid-cols-2 gap-5">
                    <div className="bg-[#F2F8F7] flex items-center justify-center flex-col rounded px-5 py-5">
                        <h1 className="text-[#00AAA1] text-2xl font-medium">14</h1>
                        <p className="text-[#222222] text-lg font-normal">New Posts</p>
                    </div>
                    <div className="bg-[#F2F8F7] flex items-center justify-center flex-col rounded px-5 py-5">
                        <h1 className="text-[#00AAA1] text-2xl font-medium">480</h1>
                        <p className="text-[#222222] text-lg font-normal">total visitors</p>
                    </div>
                    <div className="bg-[#F2F8F7] flex items-center justify-center flex-col rounded px-5 py-5">
                        <h1 className="text-[#00AAA1] text-2xl font-medium">53</h1>
                        <p className="text-[#222222] text-lg font-normal">New subscribers</p>
                    </div>
                    <div className="bg-[#F2F8F7] flex items-center justify-center flex-col rounded px-5 py-5">
                        <h1 className="text-[#00AAA1] text-2xl font-medium">145</h1>
                        <p className="text-[#222222] text-lg font-normal">blog read</p>
                    </div>
                </div>
            </div>

            <div className="mt-16">
                <h1 className="text-xl font-medium mt-10 pb-10">
                    <span className="bg-[#00AAA1] text-[#E8F3F3]">Instagram</span> Posts
                </h1>
                <div className="grid grid-cols-3 gap-4">
                    {
                        instImages?.map((image) => (
                            <div
                                key={image.id}
                                className="relative w-24 h-24 object-cover rounded overflow-hidden group"
                            >
                                <div
                                    className="
                                        absolute inset-0
                                        bg-black
                                        opacity-0
                                        group-hover:opacity-60
                                        transition-opacity
                                        duration-300
                                        flex
                                        justify-center
                                        items-center
                                        text-white
                                    "
                                >
                                    <Instagram className="text-xl"/>
                                </div>
                                <img
                                    src={image.img}
                                    alt=""
                                    className="w-full h-full object-cover rounded"
                                />
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="mt-16 ">
                <h1 className="text-xl font-medium mt-10 pb-10">
                    <span className="bg-[#00AAA1] text-[#E8F3F3]">search</span> with tags
                </h1>
                <div className="lg:w-87.5 lg:flex lg:flex-wrap lg:space-y-0 space-y-2.5  gap-3">
                    {
                        tagCategories?.map((category) => (
                            <button key={category.id} className="px-6 flex items-center justify-center text-[#666666] py-1 border rounded border-solid border-[#666666] hover:bg-[#00AAA1] duration-300 hover:text-white hover:border-white font-normal cursor-pointer">{category.title}</button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default TopAuthors;