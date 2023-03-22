import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import ErrorPage from '../Pages/404Page';
import AllAccounts from '../Pages/Accounts/AllAccounts';
import AdminRoom from '../Pages/AdminManagement/AdminRoom';
import AdminRoomView from '../Pages/AdminManagement/AdminRoomView';
import TestCodeMirror from '../Pages/CssBattle';
import Home from '../Pages/Home';
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
        {
            exact: true,
            path: '/login',
            loader: Loading,
            element: (
                <UserLayoutComponent>
                    <Login />
                </UserLayoutComponent>
            ),
        },
        {
            exact: true,
            path: '/register',
            loader: loaderInfoGG,
            element: (
                <UserLayoutComponent>
                    <Register />
                </UserLayoutComponent>
            ),
        },

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
                            path: 'admin_room/:id',
                            loader: Loading,
                            element: <AdminRoomView />,
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
