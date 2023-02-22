import { Outlet, Navigate } from 'react-router-dom';

import useAuth from '../utils/useAuth';

const PublicRoute = () => {
    // const { isLoading, userRole } = useAuth();
    let isLoading = true;
    // if (userRole === undefined) {
    //     return <Navigate to="/login" replace />;
    // } else if (userRole === null) {
    //     return <Outlet />;
    // }

    return isLoading ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PublicRoute;
