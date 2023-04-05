import { useState, useEffect } from 'react';

import { Infinity } from 'react-bootstrap-icons';

import roomApi from '../../../utils/api/roomApi';

export function RoomData({ rooms }) {
    const results = rooms.map((room) => (
        <tr key={room.code}>
            <td>{room.code}</td>
            <td>{room.type}</td>
            <td>{<Infinity />}</td>
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
