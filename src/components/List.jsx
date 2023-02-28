import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
const List = ({ items, horizontal, variant, numbered }) => {
    // items = [
    //     {
    //         name: 'Han',
    //         color: 'primary',
    //         disabled: true,
    //     },
    //     {
    //         name: 'bao',
    //         color: 'dark',
    //         disabled: false,
    //     },
    //     {
    //         name: 'na',
    //         color: 'danger',
    //         disabled: false,
    //     },
    // ];
    const [isActive, setIsActive] = useState(null);
    const numberedBoolean = numbered != true ? '' : 'numbered';
    const activeClicked = (key) => {
        if (key == isActive) setIsActive(null);
        else setIsActive(key);
    };
    return (
        <ListGroup
            horizontal={horizontal}
            variant={variant.toLowerCase()}
            numbered={numberedBoolean}
        >
            {items.map((item, index) => (
                <ListGroup.Item
                    key={index}
                    variant={item.color.toLowerCase()}
                    disabled={item.disabled == true ? 'disabled' : ''}
                    action
                    onClick={() => activeClicked(index)}
                    active={index == isActive ? 'active' : ''}
                >
                    {item.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default List;
