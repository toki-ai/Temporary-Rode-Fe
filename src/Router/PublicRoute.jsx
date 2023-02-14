import { Outlet, Navigate } from 'react-router-dom';
import { NODE_ENV } from '../config';

const PublicRoute = () => {
    return <Outlet />;
};

export default PublicRoute;
// true ? <Navigate to="/login" replace />
