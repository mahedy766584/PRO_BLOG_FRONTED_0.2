import BlankLayout from "@/layout/BlankLayout";
import MainLayout from "@/layout/MainLayout";
import SmartHome from "@/pages/home/SmartHome";
import LandingPage from "@/pages/landing/LandingPage";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import WriteBlog from "@/pages/blog/WriteBlog";
import About from "@/pages/about/About";
import AboutOfAuthor from "@/pages/about/AboutOfAuthor";

export const proBlogRoute = createBrowserRouter([
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
                index: true,
                element: <SmartHome />
            },
            {
                path: "/writeBlog",
                element: <WriteBlog />
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/about/:authorId",
                element: <AboutOfAuthor/>
            }
        ]
    }
]);
