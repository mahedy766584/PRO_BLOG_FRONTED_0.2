import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
// import { useUpdateProfileMutation } from "@/redux/features/userManagement.api";
import { Camera, Loader2, PenLine, User, UploadCloud } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const EditProfileModal = ({ userData }: { userData: any }) => {
    const [open, setOpen] = useState(false);
    const [updateProfile, { isLoading }] = useUpdateProfileMutation();
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    // React Hook Form Setup
    const { register, handleSubmit, setValue, watch, reset } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            bio: "",
            profileImage: null
        }
    });

    // Set default values when modal opens or userData changes
    useEffect(() => {
        if (userData) {
            reset({
                firstName: userData?.name?.firstName || "",
                lastName: userData?.name?.lastName || "",
                bio: userData?.bio || "",
                profileImage: null // Reset file input
            });
            setImagePreview(userData?.profileImage || null);
        }
    }, [userData, reset, open]);

    // Handle Image Selection for Preview
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
            setValue("profileImage", file as any);
        }
    };

    const onSubmit = async (data: any) => {
        const toastId = toast.loading("Updating your profile...");

        try {
            const formData = new FormData();
            
            const updatedData = {
                name: {
                    firstName: data.firstName,
                    lastName: data.lastName,
                },
                bio: data.bio,
            };

            formData.append("data", JSON.stringify(updatedData));

            // Only append file if a new one was selected
            if (data.profileImage) {
                formData.append("file", data.profileImage);
            }

            const res = await updateProfile(formData).unwrap();

            if (res.success) {
                toast.success("Profile updated successfully!", { id: toastId });
                setOpen(false);
            }
        } catch (error: any) {
            console.error(error);
            toast.error(error?.data?.message || "Failed to update profile", { id: toastId });
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-xl h-11 md:h-12 shadow-lg hover:shadow-slate-900/20 transition-all flex items-center justify-center gap-2 group">
                    <PenLine size={16} className="group-hover:scale-110 transition-transform" /> 
                    <span className="font-medium">Edit Profile</span>
                </Button>
            </DialogTrigger>
            
            <DialogContent className="sm:max-w-[500px] bg-white p-0 overflow-hidden border-0 rounded-2xl shadow-2xl">
                
                {/* Header Decoration */}
                <div className="h-24 bg-gradient-to-r from-slate-900 to-slate-800 relative">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                </div>

                <div className="px-6 pb-6 -mt-12">
                    <DialogHeader className="mb-4">
                        <div className="flex justify-between items-end">
                            {/* Title Section (Pushed Right slightly due to avatar) */}
                            <div className="ml-36 space-y-1 mt-14">
                                <DialogTitle className="text-xl font-bold text-slate-900">Edit Profile</DialogTitle>
                                <DialogDescription className="text-slate-500 text-xs">
                                    Update your photo and details.
                                </DialogDescription>
                            </div>
                        </div>
                    </DialogHeader>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        
                        {/* 🌟 Avatar Upload Section (Floating) */}
                        <div className="absolute top-12 left-6">
                            <div className="relative group">
                                <div className="w-32 h-32 rounded-2xl border-4 border-white shadow-lg overflow-hidden bg-slate-100 relative">
                                    {imagePreview ? (
                                        <img 
                                            src={imagePreview} 
                                            alt="Preview" 
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-300">
                                            <User size={40} />
                                        </div>
                                    )}
                                    
                                    {/* Overlay for Click */}
                                    <label htmlFor="profileImageInput" className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center cursor-pointer text-white">
                                        <Camera size={24} className="mb-1" />
                                        <span className="text-[10px] font-medium uppercase tracking-wider">Change</span>
                                    </label>
                                </div>
                                
                                {/* Hidden Input */}
                                <input 
                                    id="profileImageInput"
                                    type="file" 
                                    accept="image/*" 
                                    className="hidden" 
                                    onChange={handleImageChange}
                                />
                                
                                {/* Tiny Edit Icon Badge */}
                                <div className="absolute -bottom-2 -right-2 bg-white p-1.5 rounded-full shadow-md border border-slate-100 text-slate-900 pointer-events-none">
                                    <PenLine size={14} />
                                </div>
                            </div>
                        </div>

                        {/* Form Fields */}
                        <div className="space-y-4 pt-4">
                            {/* Name Fields */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName" className="text-slate-600 text-xs uppercase font-bold tracking-wider">First Name</Label>
                                    <Input 
                                        id="firstName" 
                                        {...register("firstName")} 
                                        className="bg-slate-50 border-slate-200 focus:bg-white focus:ring-2 focus:ring-slate-900/20 transition-all h-10"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName" className="text-slate-600 text-xs uppercase font-bold tracking-wider">Last Name</Label>
                                    <Input 
                                        id="lastName" 
                                        {...register("lastName")} 
                                        className="bg-slate-50 border-slate-200 focus:bg-white focus:ring-2 focus:ring-slate-900/20 transition-all h-10"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                            
                            {/* Bio Field */}
                            <div className="space-y-2">
                                <Label htmlFor="bio" className="text-slate-600 text-xs uppercase font-bold tracking-wider">Bio</Label>
                                <Textarea 
                                    id="bio" 
                                    {...register("bio")} 
                                    className="bg-slate-50 border-slate-200 focus:bg-white focus:ring-2 focus:ring-slate-900/20 transition-all min-h-[100px] resize-none"
                                    placeholder="Tell us a little bit about yourself..."
                                />
                                <p className="text-[10px] text-right text-slate-400">
                                    {watch("bio")?.length || 0} / 500 characters
                                </p>
                            </div>
                        </div>

                        <DialogFooter className="pt-2">
                            <Button 
                                type="button" 
                                variant="outline" 
                                onClick={() => setOpen(false)}
                                className="rounded-xl border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                            >
                                Cancel
                            </Button>
                            <Button 
                                type="submit" 
                                disabled={isLoading} 
                                className="bg-[#00AAA1] hover:bg-[#008f87] text-white rounded-xl px-6 shadow-lg shadow-[#00AAA1]/20 transition-all"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...
                                    </>
                                ) : (
                                    "Save Changes"
                                )}
                            </Button>
                        </DialogFooter>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default EditProfileModal;