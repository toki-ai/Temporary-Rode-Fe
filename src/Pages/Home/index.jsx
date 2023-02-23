import { useContext } from 'react';

import { Outlet } from 'react-router-dom';

import { UserContext } from '../../Context/User.context';
import AlertComponent from '../../components/Alert';

const Home = () => {
    const { credential } = useContext(UserContext);
    console.log('line 10:', credential);
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
