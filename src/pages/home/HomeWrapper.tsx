import { useAppSelector } from "@/redux/hooks";
import Home from "./Home";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import LandingPage from "../landing/LandingPage";

const HomeWrapper = () => {

    const { user, token, isLoading } = useAppSelector((state) => state.auth);


    if (isLoading) {
        return <LoadingSpinner fullScreen={true} />;
    }

    if (user && token) {
        return <Home />;
    }

    return <LandingPage />;
};

export default HomeWrapper;