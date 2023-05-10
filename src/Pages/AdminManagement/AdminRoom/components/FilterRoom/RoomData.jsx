import { useState } from 'react';

import { TfiInfinite } from 'react-icons/tfi';

import DateFormat from './DateFormat';
import More from './More';

export function functionCheckFilter({ state }) {
    if (state == 'Private') return true;
    else if (state == 'Public') return false;
    console.log(state);
}

export function RoomData({ state, listRoom }) {
    const results = listRoom
        .filter((room) => {
            if (state == 'All') return room.isPrivate == true || room.isPrivate == false;
            else if (state == 'Private') return room.isPrivate == true;
            else if (state == 'Public') return room.isPrivate == false;
        })
        .map((room) => (
            <tr key={room.code}>
                <td>{room.code}</td>
                <td>{room.type}</td>
                <td>{DateFormat(room.openTime)}</td>
                <td>{room?.isPrivate ? DateFormat(room.closeTime) : <TfiInfinite />}</td>
                <td>{room?.isPrivate ? room.duration : <TfiInfinite />}</td>
                <td>{room?.isPrivate ? 'Private' : 'Public'}</td>
                <td>
                    <More link={room.code} roomId={room.id} openTime={room.openTime} />
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
