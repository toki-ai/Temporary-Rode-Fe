import React from 'react';
import { useState } from 'react';

import { Button, Form } from 'react-bootstrap';

const ButtonUpDown = ({
    variant,
    maxSubmitTime,
    question,
    done,
    setMaxSubmitTimes: setNewMaxSubmitTimes,
}) => {
    const [quantity, setQuantity] = useState(maxSubmitTime);
    const increase = (e) => {
        setQuantity(quantity + 1);
    };
    const decrease = (e) => {
        if (quantity <= 1) return;
        setQuantity(quantity - 1);
    };
    if (done) {
        setNewMaxSubmitTimes(quantity);
    }
    return (
        <div className="d-flex">
            <Button variant={variant} className="rounded-l-0 btn-sm-sm" onClick={decrease}>
                <i className="bi bi-dash"></i>
            </Button>
            <Form.Control
                type="text"
                pattern="[0-9]*"
                className="rounded-0 mw-fit text-center bg-light border-green color-primary input-num"
                value={quantity}
                disabled
                onChange={(e) => {
                    setQuantity(e.target.value);
                    question.maxSubmitTime = e.target.value;
                }}
            />
            <Button variant={variant} className="rounded-r-0 btn-sm-sm" onClick={increase}>
                <i className="bi bi-plus"></i>
            </Button>
        </div>
    );
};

export default ButtonUpDown;
