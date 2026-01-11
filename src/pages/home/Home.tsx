/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import ProBlogForm from "@/form/ProBlogForm";
import ProBlogInput from "@/form/ProBlogInput";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { logout, setUser } from "@/redux/features/auth/authSlice";
import { useGetAllBlogQuery } from "@/redux/features/blogManagement.api";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const Home = () => {

    const dispatch = useAppDispatch();
    const [login] = useLoginMutation();

    const handleLogout = () =>{
        dispatch(logout());
    };

    const { data: blogs } = useGetAllBlogQuery(undefined);
    console.log(blogs)

    const formHandler: SubmitHandler<FieldValues> = async (data) => {
        console.log(data)
        const toastId = toast.loading('Loading...')
        const userInfo = {
            userName: data.username,
            password: data.password,
        };

        try {
            const res = await login(userInfo).unwrap();
            const user = verifyToken(res.data?.accessToken);
            dispatch(setUser({ user: user, token: res.data?.accessToken }));
            toast.success(res?.message, { id: toastId, duration: 2000 })
            console.log(res)
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
        <div>
            <h1>This is my tes form</h1>
            <ProBlogForm onSubmit={formHandler} defaultValues={defaultValues}>

                <ProBlogInput
                    type="text"
                    name="username"
                    label="Username"
                    rules={{ required: "Username is required" }}
                />
                <ProBlogInput
                    type="text"
                    name="password"
                    label="Password"
                    rules={{ required: "Password is required" }}
                />

                <Button type="submit">Submit</Button>

            </ProBlogForm>

            <div>

                <Button className="mt-10" onClick={handleLogout}>Logout</Button>
            </div>
        </div>
    );
};

export default Home;