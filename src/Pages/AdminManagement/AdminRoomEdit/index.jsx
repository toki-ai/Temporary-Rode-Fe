import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import roomApi from '../../../utils/api/roomApi';
import FormEdit from './components/FormEdit';
import { RoomEditStyle } from './style';

const AdminRoomEdit = () => {
    const [roomInfo, setRoomInfo] = useState({});
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        roomApi.updateRoomById({ ...roomInfo, questions });
    }, [questions]);
    return (
        <RoomEditStyle>
            <div className="box-style p-4">
                <h3 className="color-primary mb-3">Edit Room</h3>
                <FormEdit setRoomInfo={setRoomInfo} />
            </div>
        </RoomEditStyle>
    );
};

export default AdminRoomEdit;
