import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import { Loader2 } from "lucide-react";
import ProBlogForm from "@/form/ProBlogForm";
import ProBlogInput from "@/form/ProBlogInput";
import ProBlogProfileInput from "@/form/ProBlogProfileInput";
import { type FieldValues,type SubmitHandler } from "react-hook-form";

type AccountTabProps = {
    userData: any;
    onImageSubmit: SubmitHandler<FieldValues>;
    onDetailSubmit: SubmitHandler<FieldValues>;
    imageLoading: boolean;
    updateLoading: boolean;
    onClose: () => void;
};

export const AccountTab = ({ userData, onImageSubmit, onDetailSubmit, imageLoading, updateLoading, onClose }: AccountTabProps) => {
    return (
        <TabsContent value="account" className="space-y-6 animate-in fade-in-50 slide-in-from-right-5 duration-300 outline-none">
            <div>
                <h3 className="text-xl font-bold text-slate-900">Account Information</h3>
                <p className="text-sm text-slate-500">Update your profile details and public info.</p>
            </div>

            {/* Avatar Upload Form */}
            <ProBlogForm onSubmit={onImageSubmit}>
                <div className="flex items-center gap-6 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="h-16 w-16 rounded-full bg-slate-100 border-2 border-white shadow-md overflow-hidden shrink-0">
                        <ProBlogProfileInput
                            name="profileImage"
                            defaultImage={userData?.profileImage}
                            label=""
                            size="sm"
                            allowRemove={false}
                        />
                    </div>
                    <div className="space-y-1">
                        <h4 className="font-medium text-slate-900">Profile Photo</h4>
                        <Button type="submit" disabled={imageLoading} size="sm" variant="outline" className="h-8 cursor-pointer text-xs">
                            {imageLoading ? <Loader2 className="animate-spin" size={14} /> : "Change Photo"}
                        </Button>
                    </div>
                </div>
            </ProBlogForm>

            {/* Profile Details Form */}
            <ProBlogForm onSubmit={onDetailSubmit} defaultValues={{
                firstName: userData?.name?.firstName,
                lastName: userData?.name?.lastName,
                userName: userData?.userName,
                bio: userData?.bio
            }}>
                <div className="grid gap-5 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="grid md:grid-cols-2 gap-4">
                        <ProBlogInput labelClassName="text-slate-500" name="firstName" label="First Name" />
                        <ProBlogInput labelClassName="text-slate-500" name="lastName" label="Last Name" />
                    </div>
                    <ProBlogInput labelClassName="text-slate-500" name="userName" label="Username" />
                    <ProBlogInput labelClassName="text-slate-500" name="bio" label="Bio" />
                </div>

                <div className="flex justify-end gap-3 pt-6">
                    <Button type="button" variant="outline" onClick={onClose} className="rounded-xl cursor-pointer">
                        Cancel
                    </Button>
                    <Button type="submit" disabled={updateLoading} className="bg-[#00AAA1] hover:bg-[#008f87] text-white rounded-xl px-8 shadow-lg shadow-[#00AAA1]/20">
                        {updateLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Save Changes"}
                    </Button>
                </div>
            </ProBlogForm>
        </TabsContent>
    );
};