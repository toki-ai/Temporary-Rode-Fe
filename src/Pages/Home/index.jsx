import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <>
            this is home page
            <br />
            <Outlet />
        </>
    );
};

export default Home;
