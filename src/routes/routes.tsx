import MainLayout from "@/layout/MainLayout";
import SmartHome from "@/pages/home/SmartHome";
import { createBrowserRouter } from "react-router-dom";

export const proBlogRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <SmartHome/>
            }
        ]
    }
]);
