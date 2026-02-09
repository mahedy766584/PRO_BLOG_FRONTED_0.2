/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { ArrowRight, BookOpen, DollarSign, ImagePlus, Sparkles, Users } from "lucide-react";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

type TCategoryOptions = {
    createdAt?: string;
    updatedAt?: string;
    name: string;
    slug?: string;
    _id: string;
};

const WriteBlog = () => {
    const navigate = useNavigate();
    const { data: categories, isLoading: isCategoryLoading } = useGetAllCategoryQuery(undefined);
    const { data: tags, isLoading: isTagLoading } = useGetAllTagQuery(undefined);
    const [writeBlog, { isLoading: isSubmitting }] = useWriteBlogMutation();

    const handleWriteBlogForm: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Publishing your story...");

        try {
            const formData = new FormData();

            const blogData = {
                title: data.title,
                content: data.content,
                category: data.category,
                tags: Array.isArray(data.tags) ? data.tags : [data.tags],
                contentType: "html",
                status: "published",
            };

            formData.append("data", JSON.stringify(blogData));

            if (data.coverImage && data.coverImage[0]) {
                formData.append("file", data.coverImage[0]);
            } else if (data.coverImage) {
                formData.append("file", data.coverImage);
            }

            const res = await writeBlog(formData).unwrap();

            if (res.success) {
                toast.success("Blog published successfully!", { id: toastId });
                navigate("/blogs");
            } else {
                toast.error("Something went wrong", { id: toastId });
            }

        } catch (err: any) {
            console.error(err);
            toast.error(err?.data?.message || "Failed to publish blog", { id: toastId });
        }
    };

    const categoryOptions = categories?.data?.map(({ name, _id }: TCategoryOptions) => ({
        label: name,
        value: _id,
    })) || [];

    const tagOptions = tags?.data?.map(({ name, _id }: TCategoryOptions) => ({
        label: name,
        value: _id,
    })) || [];

    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            {/* --- Header / Hero Section --- */}
            <div className="bg-white border-b sticky top-0 z-20 shadow-sm transition-all">
                <Container>
                    <div className="py-3 md:py-4 flex justify-between items-center">
                        <div className="flex items-center gap-2 text-gray-700">
                            <BookOpen className="w-5 h-5 text-[#00AAA1]" />
                            <span className="font-semibold text-sm md:text-base">Drafting Mode</span>
                        </div>
                        {/* Hides on mobile, shows on tablet+ */}
                        <div className="text-xs md:text-sm text-gray-400 hidden sm:block">
                            Saved automatically
                        </div>
                        {/* Mobile only status indicator */}
                        <div className="w-2 h-2 rounded-full bg-green-500 sm:hidden" title="Saved"></div>
                    </div>
                </Container>
            </div>

            {/* --- Main Form Section --- */}
            <div className="py-6 md:py-10 pb-20 w-full h-full">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        {/* Main Card */}
                        <div className="bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-8 md:p-12 transition-all">
                            
                            <div className="mb-6 md:mb-8 text-center md:text-left">
                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                                    Create your next masterpiece
                                </h1>
                                <p className="text-sm md:text-base text-gray-500 mt-2">
                                    Share your knowledge with the world.
                                </p>
                            </div>

                            <ProBlogForm onSubmit={handleWriteBlogForm}>
                                <div className="space-y-6 md:space-y-8">
                                    
                                    {/* Cover Image Upload */}
                                    <div className="bg-gray-50 p-4 md:p-6 rounded-xl border-2 border-dashed border-gray-200 hover:border-[#00AAA1]/50 transition-colors duration-300">
                                        <div className="flex flex-col items-center justify-center space-y-3">
                                            <div className="p-2 md:p-3 bg-white rounded-full shadow-sm">
                                                <ImagePlus className="w-5 h-5 md:w-6 md:h-6 text-[#00AAA1]" />
                                            </div>
                                            <div className="w-full max-w-xs mx-auto text-center">
                                                <ProBlogProfileInput
                                                    name="coverImage"
                                                    label="Upload Cover Image"
                                                />
                                            </div>
                                            <p className="text-[10px] md:text-xs text-gray-400 text-center">
                                                Recommended: 1200x600px, JPG/PNG
                                            </p>
                                        </div>
                                    </div>

                                    {/* Title Input */}
                                    <div className="space-y-1">
                                        <ProBlogInput
                                            type="text"
                                            name="title"
                                            label="Blog Title"
                                            rules={{ required: "Title is required" }}
                                            // Ensure input component handles full width internally
                                        />
                                    </div>

                                    {/* Editor Section */}
                                    <div className="prose prose-sm md:prose-base max-w-none w-full overflow-hidden">
                                        <ProBlogEditor
                                            label=""
                                            name="content"
                                            placeholder="Start telling your story..."
                                            rules={{ required: "Content is required" }}
                                            theme="snow"
                                        />
                                    </div>

                                    {/* Meta Data Grid: Stacks on mobile, 2 cols on md+ */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-4 md:pt-6 border-t border-gray-100">
                                        <div className="w-full">
                                            <ProBlogSelect
                                                name="category"
                                                label="Select Category"
                                                options={categoryOptions}
                                                disabled={isCategoryLoading}
                                            />
                                        </div>

                                        <div className="w-full">
                                            <ProBlogSelect
                                                name="tags"
                                                label="Add Tags"
                                                options={tagOptions}
                                                disabled={isTagLoading}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons: Stack on mobile, Row on md+ */}
                                <div className="mt-8 md:mt-10 flex flex-col-reverse sm:flex-row items-center justify-end gap-3 sm:gap-4">
                                    <Button 
                                        type="button" 
                                        variant="outline" 
                                        className="w-full sm:w-auto border-gray-300 text-gray-600 hover:bg-gray-50 h-11 md:h-12"
                                        onClick={() => navigate(-1)}
                                    >
                                        Cancel
                                    </Button>
                                    <Button 
                                        type="submit"
                                        className="w-full sm:w-auto bg-[#00AAA1] hover:bg-[#008f87] text-white px-6 md:px-8 h-11 md:h-12 text-base md:text-lg rounded-full shadow-lg shadow-[#00AAA1]/20 transition-all hover:scale-[1.02] active:scale-95"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center gap-2">Publishing...</span>
                                        ) : (
                                            <span className="flex items-center justify-center gap-2">
                                                Publish Story <Sparkles className="w-4 h-4"/>
                                            </span>
                                        )}
                                    </Button>
                                </div>
                            </ProBlogForm>
                        </div>
                    </div>
                </Container>
            </div>

            {/* --- Info Section (Earn) --- */}
            <div className="bg-white border-t py-12 md:py-20">
                <Container>
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4 px-2">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                                Unlock your potential <span className="text-[#00AAA1] block sm:inline">as a creator</span>
                            </h2>
                            <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
                                Join thousands of writers who are building their audience and earning revenue through their passion.
                            </p>
                        </div>

                        {/* Feature Cards Grid: 1 col mobile, 2 col tablet+ */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                            {/* Card 1 */}
                            <div className="group p-6 md:p-8 rounded-2xl bg-[#F8FDFC] border border-[#E0F2F1] hover:shadow-xl hover:shadow-[#00AAA1]/10 transition-all duration-300">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#E0F2F1] rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                                    <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-[#00AAA1]" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Earn via Ad Revenue</h3>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                    Get paid based on views and engagement. Our dynamic ad models ensure you get the best CPM rates without disrupting the reading experience.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="group p-6 md:p-8 rounded-2xl bg-[#FFFBF0] border border-[#FFF3E0] hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FFF3E0] rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                                    <Users className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Affiliate Program</h3>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                    Recommend products you love. Seamlessly integrate affiliate links and track your earnings through our comprehensive dashboard.
                                </p>
                            </div>
                        </div>

                        {/* FAQ Call to Action */}
                        <div className="mt-10 md:mt-16 text-center">
                            <div className="inline-flex flex-col sm:flex-row items-center justify-center p-1 bg-gray-100 rounded-xl sm:rounded-full gap-2 sm:gap-0">
                                <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm border mt-1 sm:mt-0 sm:ml-1">New</span>
                                <span className="px-3 md:px-4 py-1 text-xs md:text-sm font-medium text-gray-600 text-center">Have questions about monetization?</span>
                            </div>
                            <div className="mt-4">
                                <Link to={'#'} className="inline-flex items-center gap-2 text-[#00AAA1] font-semibold text-sm md:text-base hover:underline decoration-2 underline-offset-4 group">
                                    Visit our Creator FAQ 
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default WriteBlog;