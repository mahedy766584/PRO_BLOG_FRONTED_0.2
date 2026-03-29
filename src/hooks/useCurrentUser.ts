import { useGetSingleUserQuery } from "@/redux/features/userManagement.api";
import { useAppSelector } from "@/redux/hooks";

const useCurrentUser = () => {
    const { user: authUser, token } = useAppSelector((state) => state.auth);


    const { data, isLoading, isError, refetch } = useGetSingleUserQuery(authUser?.userId, {
        skip: !authUser?.userId || !token,
        refetchOnMountOrArgChange: true, 
    });


    const currentUser = data?.data;

    return {
        user: currentUser, 
        role: authUser?.role, 
        userId: authUser?.userId,
        isLoading,
        isError,
        refetch 
    };
};

export default useCurrentUser;