import { useAppSelector } from "@/redux/hooks";
import Home from "./Home";
import LandingPage from "../landing/LandingPage";

const SmartHome = () => {

    const { user, token } = useAppSelector((state) => state.auth);

    if (user && token) {
        return <Home />
    }

    return <LandingPage />;
};

export default SmartHome;