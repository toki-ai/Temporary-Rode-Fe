import { Outlet, Navigate } from 'react-router-dom';

import useAuth from '../utils/useAuth';

const AdminRoute = () => {
    const { isLoading, userRole } = useAuth();

    if (userRole === undefined) {
        return <Navigate to="/login" replace />;
    } else if (userRole === null) {
        return <Outlet />;
    }
    console.log(userRole);
    return userRole == 'admin' ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AdminRoute;
