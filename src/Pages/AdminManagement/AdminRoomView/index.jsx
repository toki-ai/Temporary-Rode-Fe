import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { TiArrowLeft } from 'react-icons/ti';
import { Link, useParams } from 'react-router-dom';

import roomApi from '../../../utils/api/roomApi';
import PaginationRoom from '../AdminRoom/components/Pagination';
import FilterQues from './components/FilterQues';
import RoomInfo from './components/RoomInfo';
import { ARViewStyle } from './style';

const AdminRoomView = () => {
    const { id } = useParams();
    const [room, setRoom] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    useEffect(() => {
        roomApi
            .getRoomByCode(id)
            .then((res) => {
                setRoom(res.data.data);
                console.log(room);
                console.log(room.id);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <ARViewStyle>
            <div className="w-100 p-3 box-style">
                <div className="d-flex align-items-center">
                    <Link
                        to="/admin/room"
                        className="fs-1 d-flex justify-items-center color_primary"
                    >
                        <TiArrowLeft />
                    </Link>

                    <div className="color_primary fw-bold fs-2">Room Detail</div>
                </div>
                <hr />
                <div className="p-3">
                    <RoomInfo room={room} />
                    <div className="w-sm-75 w-md-50 w-lg-50">
                        <FilterQues roomId={room.id} />
                    </div>
                </div>
                <PaginationRoom
                    action={handlePageChange}
                    totalPages="3"
                    currentPage={currentPage}
                />
            </div>
        </ARViewStyle>
    );
};

export default AdminRoomView;
