import React from 'react';

import { Dropdown, DropdownButton, InputGroup } from 'react-bootstrap';
import ReactDOM from 'react-dom';

const items = [
    { id: 1, listName: 'Public' },
    { id: 2, listName: 'Private' },
    { id: 3, listName: 'Algorithms' },
    { id: 4, listName: 'CSS Battle' },
    { id: 5, listName: 'Room Code' },
    { id: 6, listName: 'Student ID' },
];
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href=""
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
        className="btn-hover"
    >
        <div className="d-flex align-items-center color-secondary">
            {children}
            <div className="d-flex flex-column justify-content-center">
                <i className="bi bi-caret-down-fill"></i>
            </div>
        </div>
    </a>
));
function DropDownCustom({ props }) {
    return (
        <div className="d-flex align-items-center">
            <div className="p-2">{props.name}</div>
            <Dropdown className="dropdown-style rounded">
                <Dropdown.Toggle variant="outline-secondary rounded dropdown-style">
                    {props.title}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {items.map((item, id) => (
                        <div key={id}>
                            <Dropdown.Item href="#" className="item-style">
                                {item.listName}
                            </Dropdown.Item>
                        </div>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}
export default DropDownCustom;
