/* eslint-disable @typescript-eslint/no-explicit-any */
import ProBlogForm from "@/form/ProBlogForm";
import ProBlogInput from "@/form/ProBlogInput";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/redux/hooks";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { verifyToken } from "@/utils/verifyToken";
import { setUser } from "@/redux/features/auth/authSlice";


type LoginViewProps = {
    switchToSignup: () => void;
    closeModal: () => void;
};

const LoginView = ({ switchToSignup, closeModal }: LoginViewProps) => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [login] = useLoginMutation();

    const loginHandler: SubmitHandler<FieldValues> = async (data) => {
        console.log(data);
        const toastId = toast.loading('Loading in..');
        const userInfo = {
            userName: data.username,
            password: data.password,
        };

        try {
            const res = await login(userInfo).unwrap();
            const user = verifyToken(res.data.accessToken);
            dispatch(setUser({ user: user, token: res.data?.accessToken }))
            toast.success(res?.message, { id: toastId, duration: 2000 })
            console.log(res)
            if (res.success) {
                closeModal();    
                navigate("/home"); 
            }

        } catch (err: any) {
            const errorMessage =
                err?.data?.errorSources?.[0]?.message ||
                err?.data?.message ||
                "Something went wrong!";
            toast.error(`${errorMessage}`, { id: toastId, duration: 2000 });
        }

    };

    const defaultValues = {
        username: "user04",
        password: "User04"
    };

    return (
        <>
            <h2 className="text-3xl text-center font-semibold mb-6">
                Welcome back
            </h2>

            <div className="grid gap-4">
                <ProBlogForm onSubmit={loginHandler} defaultValues={defaultValues}>
                    <div className="space-y-6">
                        <div>
                            <ProBlogInput
                                type="text"
                                name="username"
                                label="Username"
                                rules={{ required: "Username is required" }}
                            />
                        </div>
                        <div>
                            <ProBlogInput
                                type="text"
                                name="password"
                                label="Password"
                                rules={{ required: "Password is required" }}
                            />
                        </div>
                    </div>
                    <Button className="text-center mt-6 w-full cursor-pointer" type="submit">Sign Now</Button>
                </ProBlogForm>
            </div>

            <p className="text-center mt-6">
                No account?{" "}
                <button
                    onClick={switchToSignup}
                    className="text-main cursor-pointer font-medium hover:underline"
                >
                    Sign up
                </button>
            </p>
        </>
    );
};

export default LoginView;
