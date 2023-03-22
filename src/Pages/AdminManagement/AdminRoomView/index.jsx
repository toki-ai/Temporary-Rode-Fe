import React from 'react';

import { TiArrowLeft } from 'react-icons/ti';
import { Link, useParams } from 'react-router-dom';

import FilterQues from './components/FilterQues';
import RoomInfo from './components/RoomInfo';
import { ARViewStyle } from './style';

const AdminRoomView = () => {
    const { id } = useParams();
    return (
        <ARViewStyle>
            <div className="p-3 box-style">
                <div className="d-flex align-items-center">
                    <Link
                        to="/admin/admin_room"
                        className="fs-1 d-flex justify-items-center color_primary"
                    >
                        <TiArrowLeft />
                    </Link>

                    <div className="color_primary fw-bold fs-2">Room Detail</div>
                </div>
                <hr />
                <div className="p-3">
                    <RoomInfo room_code={id} />
                    <div className="w-sm-75 w-md-50 w-lg-50">
                        <FilterQues />
                    </div>
                </div>
            </div>
        </ARViewStyle>
    );
};

export default AdminRoomView;
