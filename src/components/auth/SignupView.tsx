import { useState } from "react";
import ProBlogForm from "@/form/ProBlogForm";
import ProBlogInput from "@/form/ProBlogInput";
import ProBlogProfileInput from "@/form/ProBlogProfileInput";
import ProBlogTextarea from "@/form/ProBlogTextarea";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useAddNewUserMutation } from "@/redux/features/userManagement.api";

type SignupViewProps = {
    switchToLogin: () => void;
};

const SignupView = ({ switchToLogin }: SignupViewProps) => {
    const [addNewUser] = useAddNewUserMutation();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const signupHandler: SubmitHandler<FieldValues> = async (data) => {
        setIsSubmitting(true);
        const toastId = toast.loading("Creating your account...");

        const formData = new FormData();

        const userData = {
            name: {
                firstName: data.name.firstName,
                lastName: data.name.lastName,
            },
            email: data.email,
            password: data.password,
            userName: data.userName,
            bio: data.bio,
        };

        formData.append("data", JSON.stringify(userData));
        
        if (data.profileImage?.[0]) {
            formData.append("file", data.profileImage[0]);
        }

        try {
            await addNewUser(formData).unwrap();
            toast.success("Welcome aboard! Please login.", { id: toastId });
            switchToLogin();
        } catch (err: any) {
            const errorMessage = err?.data?.message || "Signup failed. Please try again.";
            toast.error(errorMessage, { id: toastId });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col scrollbar-custom h-[85vh] max-h-200">
            <div className="text-center pb-6 pt-2 px-6 bg-background z-10">
                <h2 className="text-3xl font-bold tracking-tight">
                    Join <span className="text-[#00AAA1]">Pro</span>Blog<span className="text-[#00AAA1]">.</span>
                </h2>
                <p className="text-sm text-muted-foreground mt-2">
                    Create an account to start sharing your stories.
                </p>
            </div>

            <div className="flex-1 overflow-y-auto px-6 pb-6 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent hover:scrollbar-thumb-gray-300">
                <ProBlogForm onSubmit={signupHandler}>
                    <div className="space-y-5">
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ProBlogInput
                                type="text"
                                name="name.firstName"
                                label="First Name"
                                placeholder="e.g. John"
                            />
                            <ProBlogInput
                                type="text"
                                name="name.lastName"
                                label="Last Name"
                                placeholder="e.g. Doe"
                            />
                        </div>

                        <div className="space-y-4">
                            <ProBlogInput
                                type="email"
                                name="email"
                                label="Email Address"
                                placeholder="john@example.com"
                            />
                            <ProBlogInput
                                type="text"
                                name="userName"
                                label="Username"
                                placeholder="Choose a unique handle"
                            />
                            <ProBlogInput
                                type="password"
                                name="password"
                                label="Password"
                                placeholder="••••••••"
                            />
                        </div>

                        <ProBlogTextarea
                            name="bio"
                            label="Bio"
                            placeholder="Tell us a little bit about yourself..."
                            rules={{ required: "Bio is required" }}
                            rows={3}
                            className="resize-none"
                        />

                        <div className="p-4 border border-dashed border-gray-300 rounded-lg bg-gray-50/50 hover:bg-gray-50 transition-colors">
                            <p className="text-sm font-medium mb-2 text-gray-700">Profile Picture</p>
                            <ProBlogProfileInput
                                name="profileImage"
                                label="Upload Avatar"
                            />
                        </div>
                    </div>

                    <div className="mt-8">
                        <Button 
                            className="w-full h-11 text-base font-semibold shadow-md transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer" 
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Creating Account..." : "Sign Up"}
                        </Button>
                    </div>
                </ProBlogForm>

                <div className="mt-8">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-gray-200" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                Or
                            </span>
                        </div>
                    </div>

                    <p className="text-center mt-6 text-sm text-gray-600">
                        Already have an account?{" "}
                        <button
                            onClick={switchToLogin}
                            className="text-[#00AAA1] cursor-pointer font-semibold hover:underline transition-all"
                        >
                            Log in here
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupView;