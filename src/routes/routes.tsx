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
import Profile from "@/pages/profile/Profile";

// ⚡ Lazy Loading Pages (Performance Optimization)
const BlogDetails = lazy(() => import("@/pages/blog/BlogDetails"));
const WriteBlog = lazy(() => import("@/pages/blog/WriteBlog"));
const About = lazy(() => import("@/pages/about/About"));
const ContactUs = lazy(() => import("@/pages/contactUs/ContactUs"));
const FAQ = lazy(() => import("@/pages/faQuestion/FaQuestion"));

const DashboardHome = lazy(() => import('@/pages/dashboard/views/dashboardHome/DashboardHome'));
const AllPosts = lazy(() => import('@/pages/dashboard/views/posts/AllPosts'));
const MediaLibrary = lazy(() => import('@/pages/dashboard/views/mediaLibray/MediaLibrary'));
const UserManagement = lazy(() => import('@/pages/dashboard/views/users/UserManagement'));
const Comments = lazy(() => import('@/pages/dashboard/views/comments/Comments'));
const SeoManager = lazy(() => import('@/pages/dashboard/views/seoManager/SeoManager'));
const Appearance = lazy(() => import('@/pages/dashboard/views/appearance/Appearance'));
const Settings = lazy(() => import('@/pages/dashboard/views/setting/Settings'));

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
                element: <ProtectedRoute role={"author"}>
                    <WriteBlog />
                </ProtectedRoute>
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
                <DashboardLayout />
            </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
        children: [
            {
                index: true, // Path: /dashboard
                element: <Suspense fallback={<LoadingSpinner />}><DashboardHome /></Suspense>
            },
            {
                path: "posts", // Path: /dashboard/posts
                element: <Suspense fallback={<LoadingSpinner />}><AllPosts /></Suspense>
            },
            {
                path: "media", // Path: /dashboard/media
                element: <Suspense fallback={<LoadingSpinner />}><MediaLibrary /></Suspense>
            },
            {
                path: "users", // Path: /dashboard/users
                element: <Suspense fallback={<LoadingSpinner />}><UserManagement /></Suspense>
            },
            {
                path: "comments", // Path: /dashboard/comments
                element: <Suspense fallback={<LoadingSpinner />}><Comments /></Suspense>
            },
            {
                path: "seo", // Path: /dashboard/seo
                element: <Suspense fallback={<LoadingSpinner />}><SeoManager /></Suspense>
            },
            {
                path: "appearance", // Path: /dashboard/appearance
                element: <Suspense fallback={<LoadingSpinner />}><Appearance /></Suspense>
            },
            {
                path: "settings", // Path: /dashboard/settings
                element: <Suspense fallback={<LoadingSpinner />}><Settings /></Suspense>
            },
            {
                path: "profile", // Path: /dashboard/settings
                element: <Suspense fallback={<LoadingSpinner />}><Profile /></Suspense>
            }
        ]
    }
]);
