import { Outlet } from 'react-router-dom';

import AlertComponent from '../../components/Alert';

const Home = () => {
    return (
        <>
            this is home page
            <AlertComponent />
            <br />
            <Outlet />
        </>
    );
};

export default Home;
