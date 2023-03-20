import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import roomApi from '../../utils/api/roomApi';
import userRoomApi from '../../utils/api/userRoomApi';

const Home = () => {
    return (
        <>
            this is home page
            {/* <AlertComponent /> */}
            <SubmitEx />
            <br />
            <Outlet />
        </>
    );
};

export default Home;
