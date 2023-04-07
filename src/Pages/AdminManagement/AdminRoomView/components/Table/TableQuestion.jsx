import { useState, useEffect } from 'react';

import { Table } from 'react-bootstrap';

import roomApi from '../../../../../utils/api/roomApi';
import { RoomDetailData } from '../RoomDetailData';

const titles = [
    { id: 1, name: 'Rank' },
    { id: 2, name: 'Name' },
    { id: 3, name: 'Score' },
    { id: 4, name: 'Execution Time' },
    { id: 5, name: 'Finish at' },
];
const data = [];
function TableQues({ quesId }) {
    const [accounts, setAccounts] = useState([]);
    useEffect(() => {
        roomApi
            .getSubmitHistoryByQuestion(quesId)
            .then((res) => {
                console.log(res.data.data);
                setAccounts(res.data.data);
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
                <RoomDetailData data={data} quesId={quesId} />
            </tbody>
        </Table>
    );
}
export default TableQues;
