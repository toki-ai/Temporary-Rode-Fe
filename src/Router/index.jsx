import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../Pages/Home';
import Loading from '../components/Loading';
import HomeChild from '../Pages/HomeChild/HomeChild';
import PublicRoute from './PublicRoute';
import ErrorPage from '../Pages/404Page';
import Login from '../Pages/Login';
const RouterComponent = () => {
    const router = createBrowserRouter([
        {
            element: <PublicRoute />,
            children: [
                {
                    path: '/',
                    loader: Loading,
                    element: <Home />,
                    children: [{ path: 'team', loader: Loading, element: <HomeChild /> }],
                },
                {
                    path: '/login',
                    loader: Loading,
                    element: <Login />,
                },
            ],
        },
        { path: '*', element: <ErrorPage /> },
    ]);

    return <RouterProvider router={router} />;
};

export default RouterComponent;
