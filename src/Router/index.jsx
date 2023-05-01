import { lazy } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import ErrorPage from '../Pages/404Page';
// import AllAccounts from '../Pages/Accounts/AllAccounts';
// import AdminAttendance from '../Pages/AdminManagement/AdminAttendance';
// import AdminRoom from '../Pages/AdminManagement/AdminRoom';
// import AdminRoomEdit from '../Pages/AdminManagement/AdminRoomEdit';
// import AdminRoomView from '../Pages/AdminManagement/AdminRoomView';
// import CreateRoom from '../Pages/AdminManagement/CreateRoom';
// import Algorithm from '../Pages/Algorithm';
import TestLayout from '../Pages/Algorithm/LayoutAlgorithm';
// import ArenaCSS from '../Pages/CssBattle';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
// import Register from '../Pages/Register';
import AdminLayoutComponent from '../components/Layout/AdminLayout.component';
// import Loading from '../components/Loading';
import PublicLayout from '../components/PublicLayout/UserLayout.component';
import { Resize, useWindowDimensions } from '../components/Resize';
import UserHomeLayout from '../components/UserHomeLayout/UserHomeLayout.component';
import UserLayoutComponent from '../components/UserLayout/UserLayout.component';
import AdminRoute from './AdminRoute';
// import Controller from './Controller';
import PublicRoute from './PublicRoute';
import { loaderInfoGG, GetInfoRoomByCode, GetInfoUser } from './RouterLoader/Loader';

// const ErrorPage = lazy(() => import('../Pages/404Page'));
// const Home = lazy(() => import('../Pages/Home'));
// const Login = lazy(() => import('../Pages/Login'));
const Register = lazy(() => import('../Pages/Register'));
// const AdminLayoutComponent = lazy(() => import('../components/Layout/AdminLayout.component'));
const Loading = lazy(() => import('../components/Loading'));
// const PublicLayout = lazy(() => import('../components/PublicLayout/UserLayout.component'));
// const UserHomeLayout = lazy(() => import('../components/UserHomeLayout/UserHomeLayout.component'));
// const UserLayoutComponent = lazy(() => import('../components/UserLayout/UserLayout.component'));
const ArenaCSS = lazy(() => import('../Pages/CssBattle'));
const Algorithm = lazy(() => import('../Pages/Algorithm'));
const CreateRoom = lazy(() => import('../Pages/AdminManagement/CreateRoom'));
const AdminRoomView = lazy(() => import('../Pages/AdminManagement/AdminRoomView'));
const AdminRoomEdit = lazy(() => import('../Pages/AdminManagement/AdminRoomEdit'));
const AdminRoom = lazy(() => import('../Pages/AdminManagement/AdminRoom'));
const AdminAttendance = lazy(() => import('../Pages/AdminManagement/AdminAttendance'));
const AllAccounts = lazy(() => import('../Pages/Accounts/AllAccounts'));

const RouterComponent = () => {
    const { width } = useWindowDimensions();
    if (width <= 900) {
        return <Resize />;
    }
    const router = createBrowserRouter([
        { path: '/', element: <Navigate to="home" /> },
        // {
        //     exact: true,
        //     path: '/',
        //     loader: GetInfoUser,
        //     element: <Controller />,
        // },
        {
            exact: true,
            element: <AdminRoute />,
            children: [
                {
                    exact: true,
                    element: <AdminLayoutComponent />,
                    children: [
                        {
                            exact: true,
                            path: '/admin/room',

                            loader: Loading,
                            element: <AdminRoom />,
                        },
                        {
                            exact: true,
                            path: '/admin/room/:id',
                            loader: Loading,
                            element: <AdminRoomView />,
                        },
                        {
                            exact: true,
                            path: '/admin/room/edit/:id',
                            loader: Loading,
                            element: <AdminRoomEdit />,
                        },
                        // {
                        //     exact: true,
                        //     path: 'room/create-room',
                        //     loader: Loading,
                        //     element: <CreateRoom />,
                        // },
                        {
                            exact: true,
                            path: '/admin/contestant',
                            loader: Loading,
                            element: <AllAccounts />,
                        },
                        {
                            exact: true,
                            path: '/admin/create',
                            loader: Loading,
                            element: <CreateRoom />,
                        },
                        {
                            exact: true,
                            path: '/admin/attendance/:id',
                            loader: Loading,
                            element: <AdminAttendance />,
                        },
                    ],
                },
            ],
        },
        {
            exact: true,
            path: '/login',
            element: (
                <PublicLayout>
                    <Login />
                </PublicLayout>
            ),
        },
        {
            exact: true,
            path: '/register',
            loader: loaderInfoGG,
            element: (
                <PublicLayout>
                    <Register />
                </PublicLayout>
            ),
        },
        {
            exact: true,
            path: '/',
            element: <PublicRoute />,
            children: [
                {
                    exact: true,
                    path: 'home',
                    element: (
                        <UserHomeLayout>
                            <Home />
                        </UserHomeLayout>
                    ),
                },
                {
                    exact: true,

                    element: <UserLayoutComponent />,
                    children: [
                        {
                            exact: true,
                            path: '/arena_css/:id',
                            loader: GetInfoRoomByCode,
                            element: <ArenaCSS />,
                        },
                        {
                            exact: true,
                            path: '/algorithm/:id',
                            loader: GetInfoRoomByCode,
                            element: <Algorithm />,
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
