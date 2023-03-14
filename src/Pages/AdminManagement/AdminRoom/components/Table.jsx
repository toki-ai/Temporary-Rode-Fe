import { Table } from 'react-bootstrap';

import { RoomData } from './FilterRoom/RoomData';

function TableRoom() {
    return (
        <Table striped className="w-98 border-top">
            <thead>
                <tr>
                    <th>Room Code</th>
                    <th>Room Type</th>
                    <th>Open Time</th>
                    <th>Close Time</th>
                    <th>Duration</th>
                    <th>Visibility</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <RoomData />
            </tbody>
        </Table>
    );
}
export default TableRoom;
