import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children, role }) => {
    const { isAuthenticated, hasRole } = useAuth();

    if (!isAuthenticated()) {
        return <Navigate to='/login' replace />;
    }

    if (!hasRole(role)) {
        return <Navigate to='/not-authorized' replace />;
    }

    return children;
};

export default PrivateRoute;
