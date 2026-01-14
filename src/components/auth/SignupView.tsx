/* eslint-disable @typescript-eslint/no-explicit-any */
import ProBlogForm from "@/form/ProBlogForm";
import ProBlogInput from "@/form/ProBlogInput";
import ProBlogProfileInput from "@/form/ProBlogProfileInput";
import ProBlogTextarea from "@/form/ProBlogTextarea";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { Button } from "../ui/button";
import { useAddNewUserMutation } from "@/redux/userManagement.api";
import { toast } from "sonner";

type SignupViewProps = {
    switchToLogin: () => void;
};

const SignupView = ({ switchToLogin }: SignupViewProps) => {

    const [addNewUser] = useAddNewUserMutation();

    const signupHandler: SubmitHandler<FieldValues> = async (data) => {

        const toastId = toast.loading("Creating account...");

        const formData = new FormData();

        const userData = {
            name: data.name,
            email: data.email,
            password: data.password,
            userName: data.userName,
            bio: data.bio,
        };

        formData.append("data", JSON.stringify(userData));
        formData.append("file", data.profileImage);

        try {
            await addNewUser(formData).unwrap();

            toast.success("Account created! Please login.", {
                id: toastId,
            });

            switchToLogin();
        } catch (err: any) {
            toast.error(
                err?.data?.message || "Signup failed",
                { id: toastId }
            );
        }

    };


    return (
        <div className="h-[80vh] overflow-auto custom-scroll">
            <h2 className="text-3xl text-center font-semibold mb-6">
                Join ProBlog
            </h2>

            <div className="px-6">
                <ProBlogForm onSubmit={signupHandler}>

                    <div className="space-y-4">
                        <ProBlogInput
                            type="text"
                            name="name.firstName"
                            label="First Name"
                        />

                        <ProBlogInput
                            type="text"
                            name="name.lastName"
                            label="Last Name"
                        />

                        <ProBlogInput
                            type="text"
                            name="email"
                            label="Email"
                        />

                        <ProBlogInput
                            type="password"
                            name="password"
                            label="Password"
                        />

                        <ProBlogInput
                            type="text"
                            name="userName"
                            label="User Name"
                        />

                        <ProBlogTextarea
                            name="bio"
                            label="Bio"
                            placeholder="Write something about yourself..."
                            rules={{ required: "Bio is required" }}
                            rows={3}
                        />

                        <div className="relative">
                            <ProBlogProfileInput
                                name="profileImage"
                                label="Profile Picture"
                            />
                        </div>
                    </div>

                    <Button className="w-full mt-4">Sign up</Button>

                </ProBlogForm>
            </div>

            <p className="text-center mt-6">
                Already have an account?{" "}
                <button
                    onClick={switchToLogin}
                    className="text-main cursor-pointer font-medium hover:underline"
                >
                    Login
                </button>
            </p>
        </div>
    );
};

export default SignupView;
