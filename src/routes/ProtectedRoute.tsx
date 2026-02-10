import { logout } from "@/redux/features/auth/authSlice";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import type { ReactNode } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

type TProtectedRoute = {
    role?: string | string[];
    children?: ReactNode;
};

const ProtectedRoute = ({ role, children }: TProtectedRoute) => {
    const { user, token } = useAppSelector((state) => state.auth);
    const location = useLocation();
    const dispatch = useAppDispatch();

    if (!token) {
        return <Navigate to="/landing" state={{ from: location }} replace />;
    }


    if (token && !user) {
        dispatch(logout());
        return <Navigate to="/landing" state={{ from: location }} replace />;
    }

    if (role && user?.role) {
        const userRole = user.role; 

        if (typeof role === "string") {
            if (userRole !== role) {
                return <Navigate to="/landing" replace />;
            }
        }

        if (Array.isArray(role)) {
            if (!role.includes(userRole)) {
                return <Navigate to="/landing" replace />;
            }
        }
    }

    return children ? children : <Outlet />;
};

export default ProtectedRoute;