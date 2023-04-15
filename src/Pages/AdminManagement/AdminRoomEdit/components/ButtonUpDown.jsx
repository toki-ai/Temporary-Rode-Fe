import React, { useEffect } from 'react';
import { useState } from 'react';

import { Button, Form } from 'react-bootstrap';

const ButtonUpDown = ({ variant, maxSubmitTime, setNewMaxSubmitTimes: setNewMaxSubmitTime }) => {
    const [quantity, setQuantity] = useState(maxSubmitTime);
    const increase = (e) => {
        setQuantity(quantity + 1);
    };
    const decrease = (e) => {
        if (quantity <= 1) return;
        setQuantity(quantity - 1);
    };
    useEffect(() => {
        setNewMaxSubmitTime(parseInt(quantity));
    }, [quantity]);
    return (
        <div className="d-flex">
            <Button
                variant={variant}
                className="rounded-l-0 btn-sm-sm cursor-pointer"
                onClick={decrease}
            >
                <i className="bi bi-dash"></i>
            </Button>
            <Form.Control
                type="number"
                pattern="[0-9]*"
                className="rounded-0 mw-fit text-center bg-light border-green color-primary input-num"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <Button
                variant={variant}
                className="rounded-r-0 btn-sm-sm cursor-pointer"
                onClick={increase}
            >
                <i className="bi bi-plus"></i>
            </Button>
        </div>
    );
};

export default ButtonUpDown;
