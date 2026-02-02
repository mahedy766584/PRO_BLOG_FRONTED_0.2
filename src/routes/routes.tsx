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
import DashboardLayout from "@/layout/DashboardLayout";
import Analytics from "@/pages/dashboard/Analytics/Analytics";
import Profile from "@/pages/profile/Profile";

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
            <ProtectedRoute role={["user", "author", "admin", "superAdmin"]}>
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
                path: "write-blog",
                element: <WriteBlog />
            },
            {
                path: "about",
                element: <Suspense fallback={<LoadingSpinner />}><About /></Suspense>
            },
            {
                path: "about/:userId",
                element: <Suspense fallback={<LoadingSpinner />}><AboutOfAuthor /></Suspense>
            },
            {
                path: "contact",
                element:  <Suspense fallback={<LoadingSpinner />}><ContactUs /></Suspense>
            },
            {
                path: "blog-detail/:blogId/:slug",
                element: <Suspense fallback={<LoadingSpinner fullScreen={true} />}>
                    <BlogDetails />
                </Suspense>
            },
            {
                path: "faq",
                element: <Suspense fallback={<LoadingSpinner />}><FAQ /></Suspense>
            },
            {
                path: "profile",
                element: <Suspense fallback={<LoadingSpinner />}><Profile /></Suspense>
            },
        ]
    },

    {
        path: "/dashboard",
        element: (
            <ProtectedRoute role={["author", "admin", "superAdmin"]}>
                <DashboardLayout/>
            </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: <Suspense fallback={<LoadingSpinner />}><Analytics /></Suspense>
            }
        ]
    }
]);
