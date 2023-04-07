import React from 'react';
import { useState } from 'react';

import { Button, Form } from 'react-bootstrap';

const ButtonUpDown = ({ variant }) => {
    const [quantity, setQuantity] = useState(1);
    const increase = (e) => {
        setQuantity(quantity + 1);
    };
    const decrease = (e) => {
        if (quantity <= 1) return;
        setQuantity(quantity - 1);
    };
    return (
        <div className="d-flex">
            <Button variant={variant} className="rounded-l-0" onClick={decrease}>
                <i className="bi bi-dash"></i>
            </Button>
            <Form.Control
                type="text"
                pattern="[0-9]*"
                className="rounded-0 mw-fit text-center bg-light border-green color-primary"
                value={quantity}
                disabled
            />
            <Button variant={variant} className="rounded-r-0" onClick={increase}>
                <i className="bi bi-plus"></i>
            </Button>
        </div>
    );
};

export default ButtonUpDown;
