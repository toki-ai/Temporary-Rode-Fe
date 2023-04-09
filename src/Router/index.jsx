import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import ErrorPage from '../Pages/404Page';
import AllAccounts from '../Pages/Accounts/AllAccounts';
import AdminAttendance from '../Pages/AdminManagement/AdminAttendance';
import AdminRoom from '../Pages/AdminManagement/AdminRoom';
import AdminRoomEdit from '../Pages/AdminManagement/AdminRoomEdit';
import AdminRoomView from '../Pages/AdminManagement/AdminRoomView';
// import CreateRoom from '../Pages/AdminManagement/CreateRoom';
import Algorithm from '../Pages/Algorithm';
import TestLayout from '../Pages/Algorithm/LayoutAlgorithm';
import CreateRoom from '../Pages/CreateRoom';
import ArenaCSS from '../Pages/CssBattle';
import TestCodeMirror from '../Pages/CssBattle';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import TestTabs from '../Pages/Test/TestTabs';
import AdminLayoutComponent from '../components/Layout/AdminLayout.component';
import Loading from '../components/Loading';
import PublicLayout from '../components/PublicLayout/UserLayout.component';
import UserHomeLayout from '../components/UserHomeLayout/UserHomeLayout.component';
import UserLayoutComponent from '../components/UserLayout/UserLayout.component';
import AdminRoute from './AdminRoute';
import Controller from './Controller';
import PublicRoute from './PublicRoute';
import { loaderInfoGG, GetInfoRoomByCode, GetInfoUser } from './RouterLoader/Loader';

const RouterComponent = () => {
    const router = createBrowserRouter([
        // { path: '/', element: <Navigate to="home" /> },
        {
            exact: true,
            path: '/',
            loader: GetInfoUser,
            element: <Controller />,
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
            path: '/home',
            exact: true,
            element: <PublicRoute />,
            children: [
                {
                    exact: true,
                    element: <UserHomeLayout />,
                    children: [
                        {
                            exact: true,
                            element: <Home />,
                        },
                    ],
                },
                {
                    exact: true,
                    path: 'user-home',
                    index: true,
                    element: <UserLayoutComponent />,
                    children: [
                        {
                            exact: true,
                            path: 'testMirror',
                            loader: Loading,
                            element: <TestCodeMirror />,
                        },
                        {
                            exact: true,
                            path: 'arena_css/:id',
                            loader: GetInfoRoomByCode,
                            element: <ArenaCSS />,
                        },
                        {
                            exact: true,
                            path: 'algorithm/:id',
                            loader: GetInfoRoomByCode,
                            element: <Algorithm />,
                        },
                        {
                            path: 'TestLayout',

                            element: <TestLayout />,
                        },
                        {
                            exact: true,
                            path: 'testTabs',
                            loader: Loading,
                            element: <TestTabs />,
                        },
                    ],
                },
            ],
        },
        {
            path: '/admin',
            exact: true,
            element: <AdminRoute />,
            children: [
                {
                    exact: true,
                    // index: true,
                    element: <AdminLayoutComponent />,
                    children: [
                        {
                            exact: true,
                            path: 'room',
                            // index: true,
                            loader: Loading,
                            element: <AdminRoom />,
                        },
                        {
                            exact: true,
                            path: 'room/:id',
                            loader: Loading,
                            element: <AdminRoomView />,
                        },
                        {
                            exact: true,
                            path: 'room/edit/:id',
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
                            path: 'contestant',
                            loader: Loading,
                            element: <AllAccounts />,
                        },
                        {
                            exact: true,
                            path: 'create',
                            loader: Loading,
                            element: <CreateRoom />,
                        },
                        {
                            exact: true,
                            path: 'attendance/:id',
                            loader: Loading,
                            element: <AdminAttendance />,
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
