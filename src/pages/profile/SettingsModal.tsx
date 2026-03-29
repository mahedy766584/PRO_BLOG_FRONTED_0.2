/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { User, Lock, Bell, Palette, Settings } from "lucide-react";
import { toast } from "sonner";
import { useGetSingleUserQuery, useUpdateProfileImageMutation, useUpdateUserMutation } from "@/redux/features/userManagement.api";
import ModalSidebarItems from "./ModalSidebarItems";
import SettingsContent from "./SettingsContent";

const SettingsModal = ({ userData }: { userData: any }) => {
    const [activeTab, setActiveTab] = useState("account");
    const [open, setOpen] = useState(false);

    const [updateProfileImage, { isLoading: isImageLoading }] = useUpdateProfileImageMutation();
    const [updateUser, { isLoading: isUpdateLoading }] = useUpdateUserMutation();
    const { refetch } = useGetSingleUserQuery(userData?._id, { skip: !userData?._id });

    const handleImageSubmit = async (data: any) => {
        const toastId = toast.loading("Updating profile photo...");
        try {
            const formData = new FormData();
            if (data.profileImage) formData.append("file", data.profileImage);
            const res = await updateProfileImage({ userId: userData?._id, data: formData }).unwrap();
            if (res.success) {
                refetch();
                toast.success("Photo updated successfully!", { id: toastId });
            }
        } catch (error: any) {
            toast.error(error?.data?.message || "Image update failed", { id: toastId });
        }
    };

    const handleDetailSubmit = async (data: any) => {
        const toastId = toast.loading("Updating your details...");
        try {
            const userUpdateData = {
                name: { firstName: data.firstName, lastName: data.lastName },
                userName: data.userName,
                bio: data.bio,
            };
            const res = await updateUser({ userId: userData?._id, data: userUpdateData }).unwrap();
            if (res.success) {
                refetch();
                toast.success("Profile updated!", { id: toastId });
                setOpen(false);
            }
        } catch (error: any) {
            toast.error(error?.data?.message || "Update failed", { id: toastId });
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" className="w-full rounded-xl h-11 border-slate-200 text-slate-600 gap-2 hover:bg-slate-50 cursor-pointer transition-all">
                    <Settings size={16} className="group-hover:rotate-45 transition-transform" />
                    <span>Settings</span>
                </Button>
            </DialogTrigger>

            <DialogContent className="max-w-2xl! p-0 overflow-hidden bg-[#FAFAFA] rounded-[1.5rem] border-0 shadow-2xl">
                <div className="flex h-150">
                    {/* SIDEBAR */}
                    <ModalSidebarItems
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        User={User}
                        Lock={Lock}
                        Bell={Bell}
                        Palette={Palette}
                    />

                    {/* CONTENT */}
                    <SettingsContent
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        setOpen={setOpen}
                        userData={userData}
                        handleImageSubmit={handleImageSubmit}
                        handleDetailSubmit={handleDetailSubmit}
                        isImageLoading={isImageLoading}
                        isUpdateLoading={isUpdateLoading}
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default SettingsModal;