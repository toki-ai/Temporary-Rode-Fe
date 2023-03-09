import * as React from 'react';

import { Dropdown } from 'react-bootstrap';

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
        <i className="bi bi-three-dots-vertical bg-secondary-1 btn-hover"></i>
        {children}
    </a>
));
const More = () => {
    return (
        <Dropdown drop="end">
            <Dropdown.Toggle
                as={CustomToggle}
                id="dropdown-custom-components"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            ></Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item eventKey="1" className="item-style">
                    View
                </Dropdown.Item>
                <Dropdown.Item eventKey="2" className="item-style">
                    Edit
                </Dropdown.Item>
                <Dropdown.Item eventKey="3" className="item-style">
                    Delete
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};
export default More;
