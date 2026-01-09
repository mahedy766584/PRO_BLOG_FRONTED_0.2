import MainLayout from "@/layout/MainLayout";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";

export const proBlogRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
]);
