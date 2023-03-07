import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import AlertComponent from '../../components/Alert';

const Home = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/allAccounts');
    };
    return (
        <>
            <button onClick={() => handleNavigate()}>Navigate</button>
            this is home page
            <AlertComponent />
            <br />
            <Outlet />
        </>
    );
};

export default Home;
