import { useState, useEffect } from 'react';

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
const data = [
    {
        id: 1,
        rank: 1,
        name: 'Lee Thành Long',
        score: '100',
        execution: '120ms',
        time: '2023-03-19T13:46:36.673Z',
    },
    {
        id: 2,
        rank: 2,
        name: 'Lee Thành Long',
        score: '100',
        execution: '120ms',
        time: '2023-03-19T13:46:36.673Z',
    },
];
function TableAll({ roomID }) {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        roomApi
            .getSubmitHistoryByRoom(roomID)
            .then((res) => {
                setQuestions(res.data.data.items);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
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
                <RoomDetailData data={questions} quesId="All" />
            </tbody>
        </Table>
    );
}
export default TableAll;
