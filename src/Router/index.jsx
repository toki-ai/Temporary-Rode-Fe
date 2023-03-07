import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../Pages/Home';
import Loading from '../components/Loading';
import HomeChild from '../Pages/HomeChild/HomeChild';
import Register from '../Pages/Register';
import PublicRoute from './PublicRoute';
import ErrorPage from '../Pages/404Page';
import Login from '../Pages/Login';
import { Navigate } from 'react-router-dom';
import AdminRoute from './AdminRoute';
import Admin from '../Pages/Admin';
import ModalComponent from '../components/Modal';
import TestModal from '../components/TestModal';
import TestAlert from '../components/TestAlert';
import TestCodeMirror from '../Pages/CssBattle';
const RouterComponent = () => {
    const router = createBrowserRouter([
        { exact: true, path: '/', element: <Navigate to="home" /> },
        { exact: true, path: '/login', loader: Loading, element: <Login /> },
        { exact: true, path: '/register', loader: Loading, element: <Register /> },
        { exact: true, path: '/modal', loader: Loading, element: <TestModal /> },
        { exact: true, path: '/alert', loader: Loading, element: <TestAlert /> },
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
        { path: '*', element: <ErrorPage /> },
    ]);

    return <RouterProvider fallbackElement={<Loading />} router={router} />;
};

export default RouterComponent;
