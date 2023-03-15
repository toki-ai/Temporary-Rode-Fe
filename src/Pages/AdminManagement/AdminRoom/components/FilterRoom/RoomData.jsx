import { useState, useEffect } from 'react';

import { TfiInfinite } from 'react-icons/tfi';

import { authApi } from '../SearchRoom/axios';
import DateFormat from './DateFormat';
import More from './More';

export function RoomData() {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        authApi
            .getAllRoom()
            .then((res) => {
                console.log(res);
                setRooms(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const results = rooms.map((room) => (
        <tr key={room.id}>
            <td>{room.code}</td>
            <td>{room.type}</td>
            <td>{DateFormat(room.openTime)}</td>
            <td>{room?.isPrivate ? DateFormat(room.closeTime) : <TfiInfinite />}</td>
            <td>{room?.isPrivate ? room.duration : <TfiInfinite />}</td>
            <td>{room?.isPrivate ? 'Private' : 'Public'}</td>
            <td>
                <More />
            </td>
        </tr>
    ));
    const content = results?.length ? (
        results
    ) : (
        <tr>
            <td className="text-center" colSpan={1000}>
                No data available in table
            </td>
        </tr>
    );
    return <>{content}</>;
}
