import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { TiArrowLeft } from 'react-icons/ti';
import { Link, useParams } from 'react-router-dom';

import roomApi from '../../../utils/api/roomApi';
import FormEdit from './components/FormEdit';
import { RoomEditStyle } from './style';

const AdminRoomEdit = () => {
    const { id } = useParams();
    const [roomInfo, setRoomInfo] = useState({});
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        roomApi.updateRoomById(id, roomInfo);
    });
    console.log(roomInfo);
    return (
        <div className="w-100">
            <RoomEditStyle>
                <div className="box-style p-4">
                    <div className="d-flex align-items-center mb-3">
                        <Link
                            to="/admin/room"
                            className="fs-1 d-flex justify-items-center color-primary"
                        >
                            <TiArrowLeft />
                        </Link>
                        <h3 className="color-primary">Edit Room</h3>
                    </div>
                    <FormEdit setRoom={setRoomInfo} />
                </div>
            </RoomEditStyle>
        </div>
    );
};

export default AdminRoomEdit;
