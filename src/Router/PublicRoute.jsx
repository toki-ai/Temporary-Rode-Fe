import { Outlet, Navigate, useLoaderData } from 'react-router-dom';

import useAuth from '../utils/useAuth';

const PublicRoute = () => {
    const { isLoading, userRole } = useAuth();
    // const { isLoading, userRole } = useLoaderData();
    if (userRole === undefined) {
        return <Navigate to="/login" replace />;
    } else if (userRole === null) {
        return <Outlet />;
    }
    console.log(userRole);
    return userRole !== '' ? <Outlet /> : <Navigate to="/admin" replace />;
};

export default PublicRoute;
