import { Outlet } from 'react-router-dom';

// import AlertComponent from '../../components/Alert';
// import SubmitEx from '../Algorithm/components/SubmitExample';

// // <SubmitEx />

const Home = () => {
    return (
        <>
            <h1 className="text-white"> this is home page</h1>
            <h1 className="text-white"> this is home page</h1>
            <Outlet />
        </>
    );
};

export default Home;
