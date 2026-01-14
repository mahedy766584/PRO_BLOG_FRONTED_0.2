import BlankLayout from "@/layout/BlankLayout";
import MainLayout from "@/layout/MainLayout";
import Home from "@/pages/home/Home";
import SmartHome from "@/pages/home/SmartHome";
import LandingPage from "@/pages/landing/LandingPage";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

export const proBlogRoute = createBrowserRouter([
    {
        path: "/",
        element: <SmartHome />
    },
    {
        path: "/landing",
        element: <BlankLayout />,
        children: [
            {
                index: true,
                element: <LandingPage />
            }
        ]
    },
    {
        path: "/",
        element: <ProtectedRoute role={["user", "author", "admin"]}>
            <MainLayout />
        </ProtectedRoute>,
        children: [
            {
                path: "home",
                element: <Home />
            }
        ]
    }
]);
