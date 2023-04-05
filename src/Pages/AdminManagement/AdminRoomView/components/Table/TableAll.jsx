import { useEffect, useState } from 'react';

import { Table } from 'react-bootstrap';

import roomApi from '../../../../../utils/api/roomApi';
import { RoomDetailData } from '../RoomDetailData';

const titles = [
    { id: 1, name: 'Rank' },
    { id: 2, name: 'Name' },
    { id: 3, name: 'Total Score' },
    { id: 4, name: 'Total Execution Time' },
    { id: 5, name: 'Finish at' },
];
function TableAll({ roomID }) {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        roomApi
            .getSubmitHistoryByRoom(roomID)
            .then((res) => {
                console.log(res.data.data);
                setQuestions(res.data.data.items);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    console.log(questions);
    return (
        <Table striped className="w-98 border-top">
            <thead>
                <tr>
                    {titles.map((titles) => {
                        return <th key={titles.id}>{titles.name}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                <RoomDetailData data={questions} question="All" />
            </tbody>
        </Table>
    );
}
export default TableAll;
