import React from 'react';

import { InputGroup } from 'react-bootstrap';

const items = [
    { id: 1, listName: 'Public' },
    { id: 2, listName: 'Private' },
    { id: 3, listName: 'Algorithms' },
    { id: 4, listName: 'CSS Battle' },
    { id: 5, listName: 'Room Code' },
    { id: 6, listName: 'Student ID' },
];
const SelectCustom = ({ props }) => {
    return (
        <div className="d-flex">
            <div className="p-2">{props.name}</div>
            <InputGroup>
                <select className="">
                    <option selected>{props.title}</option>
                    {items.map((item, id) => (
                        <option key={id}>{item.listName}</option>
                    ))}
                </select>
            </InputGroup>
        </div>
    );
};
export default SelectCustom;
