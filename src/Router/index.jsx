import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import ErrorPage from '../Pages/404Page';
import AllAccounts from '../Pages/Accounts/AllAccounts';
import Admin from '../Pages/Admin';
import AdminRoom from '../Pages/AdminManagement/AdminRoom';
import ArenaCSS from '../Pages/CssBattle';
import TestCodeMirror from '../Pages/CssBattle';
import Home from '../Pages/Home';
import HomeChild from '../Pages/HomeChild/HomeChild';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AdminLayoutComponent from '../components/Layout/AdminLayout.component';
import Loading from '../components/Loading';
import TestAlert from '../components/TestAlert';
import TestModal from '../components/TestModal';
import UserLayoutComponent from '../components/UserLayout/UserLayout.component';
import AdminRoute from './AdminRoute';
import PublicRoute from './PublicRoute';
import { loaderInfoGG } from './RouterLoader/Loader';

const RouterComponent = () => {
    const router = createBrowserRouter([
        { exact: true, path: '/', element: <Navigate to="home" /> },
        { exact: true, path: '/login', loader: Loading, element: <Login /> },
        { exact: true, path: '/register', element: <Register /> },
        { exact: true, path: '/modal', loader: Loading, element: <TestModal /> },
        { exact: true, path: '/alert', loader: Loading, element: <TestAlert /> },
        { exact: true, path: '/arena_css', loader: Loading, element: <ArenaCSS /> },
        { exact: true, path: '/admin_room', loader: Loading, element: <AdminRoom /> },
        {
            path: '/',
            exact: true,
            element: <PublicRoute />,
            children: [
                {
                    exact: true,
                    path: 'home',
                    loader: Loading,
                    element: <UserLayoutComponent />,
                    children: [
                        { path: 'homeChild', element: <Home /> },
                        { exact: true, path: 'modal', loader: Loading, element: <TestModal /> },
                        { exact: true, path: 'alert', loader: Loading, element: <TestAlert /> },
                        {
                            exact: true,
                            path: 'testMirror',
                            loader: Loading,
                            element: <TestCodeMirror />,
                        },
                    ],
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
                    element: <AdminLayoutComponent />,
                    children: [
                        {
                            exact: true,
                            path: 'admin_room',
                            loader: Loading,
                            element: <AdminRoom />,
                        },
                        {
                            exact: true,
                            path: 'allAccounts',
                            loader: Loading,
                            element: <AllAccounts />,
                        },
                    ],
                },
            ],
        },
        { path: '*', element: <ErrorPage /> },
    ]);

    return <RouterProvider fallbackElement={<Loading />} router={router} />;
};

export default RouterComponent;
