import { Outlet } from 'react-router-dom';
import GoogleSignInButton from '../../components/GoogleBtn';
const Home = () => {
    return (
        <>
            {' '}
            this is home page
            <br />
            <Outlet />
        </>
    );
};

export default Home;
