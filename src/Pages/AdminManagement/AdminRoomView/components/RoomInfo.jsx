import { useState, useEffect } from 'react';

import { TfiInfinite } from 'react-icons/tfi';

import DateFormat from '../../AdminRoom/components/FilterRoom/DateFormat';
import { authApi } from '../../AdminRoom/components/SearchRoom/axios';

const RoomFormat = ({ name, value }) => {
    return (
        <div className="inline-block w-50">
            <span className="fw-bold">{name}: </span>
            <span>{value}</span>
        </div>
    );
};
function RoomInfo({ room_code }) {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        authApi
            .getAllRoom()
            .then((res) => {
                console.log(res);
                setRooms(res.data.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const result = rooms
        .filter((room) => room.code.includes(room_code))
        .map((item) => (
            <div key={item.code} className="">
                <div className="d-flex">
                    <RoomFormat name="Room Code" value={item.code} />
                    <RoomFormat name="Room Type" value={item.type} />
                </div>
                <div className="d-flex">
                    <RoomFormat name="Open Time" value={DateFormat(item.openTime)} />
                    <RoomFormat
                        name="Close Time"
                        value={item?.isPrivate ? DateFormat(item.closeTime) : <TfiInfinite />}
                    />
                </div>
                <RoomFormat
                    name="Duration"
                    value={item?.isPrivate ? item.duration : <TfiInfinite />}
                />
                <RoomFormat name="Visibility" value={item?.isPrivate ? 'Private' : 'Public'} />
            </div>
        ));
    return <>{result}</>;
}
export default RoomInfo;
