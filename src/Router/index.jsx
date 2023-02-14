import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../Pages/Home';
import Loading from '../components/Loading';
import HomeChild from '../Pages/HomeChild/HomeChild';
import PublicRoute from './PublicRoute';
import ErrorPage from '../Pages/404Page';
import Login from '../Pages/Login';
import { Navigate } from 'react-router-dom';
import AdminRoute from './AdminRoute';
import Admin from '../Pages/Admin';
const RouterComponent = () => {
    const router = createBrowserRouter([
        { exact: true, path: '/', element: <Navigate to="home" /> },
        { exact: true, path: '/login', loader: Loading, element: <Login /> },
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
                    children: [{ path: 'team', loader: Loading, element: <HomeChild /> }],
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

    return <RouterProvider router={router} />;
};

export default RouterComponent;
