import { useState, useEffect } from 'react';

import { Infinity } from 'react-bootstrap-icons';

import roomApi from '../../../utils/api/roomApi';
import { DateFormatS } from '../../../utils/helper';

export function RoomData({ rooms, handleOnClickRow }) {
    const results = rooms.map((room) => (
        <tr key={room.code} onClick={handleOnClickRow} style={{ cursor: 'pointer' }}>
            <td className=" text-truncate" style={{ maxWidth: '150px' }}>
                {room.code}
            </td>
            <td>{room.type}</td>
            <td>{DateFormatS(room.openTime)}</td>
            <td>{<Infinity />}</td>
            <td>{<Infinity />}</td>
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
