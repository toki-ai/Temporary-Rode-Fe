import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { TiArrowLeft } from 'react-icons/ti';
import { Link, useParams } from 'react-router-dom';

import ButtonStyled from '../../../components/Button';
import { toastError, toastSuccess } from '../../../components/Toast';
import roomApi from '../../../utils/api/roomApi';
import FormEdit from './components/FormEdit';
import { RoomEditStyle } from './style';

const AdminRoomEdit = () => {
    const { id } = useParams();
    const [roomInfo, setRoomInfo] = useState({});
    const handleSubmit = async () => {
        const payload = { ...roomInfo };
        console.log('Payload', payload);
        await roomApi
            .updateRoomById(id, payload)
            .then((res) => {
                console.warn('Response', res.data);
                if (res.data.status === 200) {
                    toastSuccess(res.data.message);
                } else {
                    toastError(`${res.data.message}`);
                }
            })
            .catch((err) => {
                console.error(err);
                toastError(err);
            });
    };
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
                    <div className="d-flex justify-content-end mt-4">
                        <ButtonStyled
                            variant="grey mx-4 width"
                            className="d-flex justify-content-center align-items-center fs-5"
                            href="/admin/room"
                        >
                            Cancel
                        </ButtonStyled>
                        <ButtonStyled
                            variant="green width"
                            className="d-flex justify-content-center align-items-center fs-5"
                            onClick={handleSubmit}
                        >
                            Save
                        </ButtonStyled>
                    </div>
                </div>
            </RoomEditStyle>
        </div>
    );
};

export default AdminRoomEdit;
