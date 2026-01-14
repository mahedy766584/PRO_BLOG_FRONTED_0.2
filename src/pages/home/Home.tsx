import { Button } from "@/components/ui/button";
import { logout } from "@/redux/features/auth/authSlice";
import { useGetAllBlogQuery } from "@/redux/features/blogManagement.api";
import { useAppDispatch } from "@/redux/hooks";

const Home = () => {

    const dispatch = useAppDispatch();

    const { data: blogs, isLoading, isError } = useGetAllBlogQuery(undefined);

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Something went wrong</p>;

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <>
            <Button onClick={handleLogout}>Logout</Button>

            <div className="space-y-4">
                {blogs?.map((blog: any) => (
                    <div key={blog._id} className="border p-4 rounded">
                        <h2 className="font-semibold">{blog.title}</h2>
                        <p className="text-sm text-gray-500">{blog.author}</p>
                    </div>
                ))}
            </div>

        </>
    );
};

export default Home;