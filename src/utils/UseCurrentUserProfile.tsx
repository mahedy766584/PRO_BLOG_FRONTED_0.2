import { useGetSingleUserQuery } from "@/redux/features/userManagement.api";
import { useAppSelector } from "@/redux/hooks";


const useCurrentUserProfile = () => {
    const { user } = useAppSelector((state) => state.auth);
    const result = useGetSingleUserQuery(user?.userId, {
        skip: !user?.userId,
    });
    return result;
};

export default useCurrentUserProfile;