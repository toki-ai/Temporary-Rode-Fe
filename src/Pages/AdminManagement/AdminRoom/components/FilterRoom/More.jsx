import * as React from 'react';
import { useState } from 'react';

import { Dropdown, DropdownButton } from 'react-bootstrap/esm';

import ModalComponent from '../../../../../components/Modal/Modal';

const More = ({ link, roomId }) => {
    const [show, setShow] = useState(false);
    const actions = [
        {
            id: 1,
            href: `/admin/room/${link}`,
            value: 'View',
        },
        { id: 2, href: `/admin/room/edit/${link}`, value: 'Edit' },
        { id: 3, href: `/admin/attendance/${roomId}`, value: 'Attendance' },
        { id: 4, value: 'Delete', func: () => setShow(true) },
    ];
    return (
        <>
            <DropdownButton
                align="start"
                variant="outline"
                title={<i className="bi bi-three-dots-vertical bg-secondary-1 btn-hover"></i>}
                style={{ width: '50px' }}
                bsPrefix="w-75 d-flex justify-content-center dropdown-style-2 w-50"
            >
                {actions.map((item) => {
                    return (
                        <Dropdown.Item
                            key={item.id}
                            eventKey={item.id}
                            href={item.href}
                            className="w-100"
                            onClick={item.func}
                        >
                            {item.value}
                        </Dropdown.Item>
                    );
                })}
            </DropdownButton>
            <ModalComponent
                show={show}
                close={() => setShow(false)}
                value="Close"
                value2="Delete"
                title="Delete Room"
                body="Are you sure to delete this room?"
                className="text-danger"
                variant1="grey"
                variant2="red"
            />
        </>
    );
};
export default More;
