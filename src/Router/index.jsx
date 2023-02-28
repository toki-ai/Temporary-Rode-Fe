import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import ErrorPage from '../Pages/404Page';
import Admin from '../Pages/Admin';
import CreateRoom from '../Pages/CreateRoom';
import TestCodeMirror from '../Pages/CssBattle';
import Home from '../Pages/Home';
import HomeChild from '../Pages/HomeChild/HomeChild';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Loading from '../components/Loading';
import AdminRoute from './AdminRoute';
import PublicRoute from './PublicRoute';

const RouterComponent = () => {
    const router = createBrowserRouter([
        { exact: true, path: '/', element: <Navigate to="home" /> },
        { exact: true, path: '/login', loader: Loading, element: <Login /> },
        { exact: true, path: '/register', loader: Loading, element: <Register /> },
        { exact: true, path: '/testMirror', loader: Loading, element: <TestCodeMirror /> },
        {
            path: '/',
            exact: true,
            element: <PublicRoute />,
            children: [
                {
                    exact: true,
                    path: 'home',
                    loader: Loading,
                    element: <Home />,
                    children: [{ path: 'homeChild', loader: Loading, element: <HomeChild /> }],
                },
            ],
        },
        {
            exact: true,
            element: <AdminRoute />,
            children: [
                {
                    exact: true,
                    path: 'admin',
                    loader: Loading,
                    element: <Admin />,
                },
            ],
        },
        {
            exact: true,
            element: <AdminRoute />,
            children: [
                {
                    exact: true,
                    path: 'create',
                    loader: Loading,
                    element: <CreateRoom />,
                },
            ],
        },
        { path: '*', element: <ErrorPage /> },
    ]);

    return <RouterProvider fallbackElement={<Loading />} router={router} />;
};

export default RouterComponent;
