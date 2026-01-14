import { useAppSelector } from "@/redux/hooks";
import type { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";

type TProtectedRoute = {
    role?: string | string[];
    children?: ReactNode;
};

const ProtectedRoute = ({ role, children }: TProtectedRoute) => {
    const { user, token } = useAppSelector((state) => state.auth);

    if (!token) return <Navigate to="/landing" replace />;

    if (role) {
        const userRole = user?.role;

        if (typeof role === "string") {
            if (userRole !== role) {
                return <Navigate to="/landing" replace />;
            }
        }

        if (Array.isArray(role)) {
            if (!role.includes(userRole as string)) {
                return <Navigate to="/landing" replace />;
            }
        }
    }

    return children ? children : <Outlet />;
};

export default ProtectedRoute;
