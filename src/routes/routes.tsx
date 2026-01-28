import MainLayout from "@/layout/MainLayout";
import ErrorPage from "@/pages/error/ErrorPage";
import ProtectedRoute from "./ProtectedRoute";
import { createBrowserRouter, ScrollRestoration } from "react-router-dom";
import BlankLayout from "@/layout/BlankLayout";
import LandingPage from "@/pages/landing/LandingPage";
import { lazy, Suspense } from "react";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import AboutOfAuthor from "@/pages/about/AboutOfAuthor";
import HomeWrapper from "@/pages/home/HomeWrapper";

// ⚡ Lazy Loading Pages (Performance Optimization)
const BlogDetails = lazy(() => import("@/pages/blog/BlogDetails"));
const WriteBlog = lazy(() => import("@/pages/blog/WriteBlog"));
const About = lazy(() => import("@/pages/about/About"));
const ContactUs = lazy(() => import("@/pages/contactUs/ContactUs"));
const FAQ = lazy(() => import("@/pages/faQuestion/FaQuestion"));

export const proBlogRoute = createBrowserRouter([
    {
        path: "/landing",
        element: <>
            <ScrollRestoration />
            <BlankLayout />
        </>,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <LandingPage />
            }
        ]
    },
    {
        path: "/",
        element: <>
            <ScrollRestoration />
            <ProtectedRoute role={["user", "author", "admin"]}>
                <MainLayout />
            </ProtectedRoute>
        </>,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomeWrapper/>
            },
            {
                path: "/writeBlog",
                element: <WriteBlog />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/about/:userId",
                element: <AboutOfAuthor />
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
            {
                path: "/blogDetail/:blogId/:slug",
                element: <Suspense fallback={<LoadingSpinner fullScreen={true} />}>
                    <BlogDetails />
                </Suspense>
            },
            {
                path: "/faQuestion",
                element: <FAQ />
            },
        ]
    }
]);
