import { Outlet, Navigate, useLoaderData } from 'react-router-dom';

import useAuth from '../utils/useAuth';

const Controller = () => {
    // const { isLoading, userRole } = useAuth();
    const infoUser = useLoaderData();
    // const { isLoading, userRole } = useLoaderData();
    // if (userRole === undefined) {
    //     return <Navigate to="/login" replace />;
    // } else if (userRole === null) {
    //     return <Outlet />;
    // }
    console.log('line 14: ', infoUser);
    return infoUser.role == 'user' ? (
        <Navigate to="/home" />
    ) : infoUser?.role == 'admin' ? (
        <Navigate to="/admin" />
    ) : (
        <Navigate to="/login" />
    );
};

export default Controller;
