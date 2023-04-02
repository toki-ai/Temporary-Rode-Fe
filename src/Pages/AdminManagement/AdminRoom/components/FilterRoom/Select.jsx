import React from 'react';

import { Form } from 'react-bootstrap/esm';

import { RoomStyle } from '../../style';

const options = [
    { label: 'All', id: 1, value: '' },
    { label: 'Public', id: 2, value: '0' },
    { label: 'Private', id: 3, value: '1' },
];

const SelectCustom = ({ props, handleChange, value }) => {
    return (
        <RoomStyle>
            <div className="d-flex">
                <label htmlFor="room" className="p-2 rfs">
                    {props.name}
                </label>
                <Form.Select
                    id="room"
                    className="rfs rs"
                    value={value}
                    onChange={(e) => handleChange(e)}
                >
                    {options.map((item) => {
                        return (
                            <option key={item.id} value={item.value}>
                                {item.label}
                            </option>
                        );
                    })}
                </Form.Select>
            </div>
        </RoomStyle>
    );
};
export default SelectCustom;
