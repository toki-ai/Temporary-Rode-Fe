import React from 'react';
import { useState } from 'react';

import DateFormatS from './DateFormartS';

const Table = ({ i, id, name, score, time, datas, finished, titles }) => {
    const [title, setTitle] = useState([]);
    const [data, setData] = useState([]);
    if (datas != null) setData(datas);
    if (titles != null) setTitle(titles);
    const body = (
        <tr key={id}>
            <td>{i + 1}</td>
            <td>{name}</td>
            <td>{score}</td>
            <td>{time}</td>
            <td>{DateFormatS(finished)}</td>
        </tr>
    );
    return (
        <Table striped className="w-98 border-top">
            <thead>
                <tr>
                    {title.map((title) => {
                        return <th key={title.id}>{title.name}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map((item, i) => {
                    <div key={i}>{body}</div>;
                })}
            </tbody>
        </Table>
    );
};

export default Table;
