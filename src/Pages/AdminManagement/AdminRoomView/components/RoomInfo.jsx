import { useState, useEffect } from 'react';

import { TfiInfinite } from 'react-icons/tfi';

import roomApi from '../../../../utils/api/roomApi';
import DateFormat from '../../AdminRoom/components/FilterRoom/DateFormat';

const RoomFormat = ({ name, value }) => {
    return (
        <div className="inline-block w-50">
            <span className="fw-bold">{name}: </span>
            <span>{value}</span>
        </div>
    );
};
function RoomInfo({ room_code }) {
    const [room, setRoom] = useState({});
    useEffect(() => {
        roomApi
            .getRoomByCode(room_code)
            .then((res) => {
                setRoom(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    console.log(room);
    const result = (
        <div>
            <div className="d-flex">
                <RoomFormat name="Room Code" value={room.code} />
                <RoomFormat name="Room Type" value={room.type} />
            </div>
            <div className="d-flex">
                <RoomFormat name="Open Time" value={DateFormat(room.openTime)} />
                <RoomFormat
                    name="Close Time"
                    value={room?.isPrivate ? DateFormat(room.closeTime) : <TfiInfinite />}
                />
            </div>
            <RoomFormat name="Duration" value={room?.isPrivate ? room.duration : <TfiInfinite />} />
            <RoomFormat name="Visibility" value={room?.isPrivate ? 'Private' : 'Public'} />
        </div>
    );
    return <>{result}</>;
}
export default RoomInfo;
