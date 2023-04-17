import React, { useEffect } from 'react';
import { useState } from 'react';

import { Button, Form } from 'react-bootstrap';

const ButtonColor = ({
    variant,
    done,
    numOfColors,
    setNumOfColors: setNumOfColors,
    setColors: setColors,
    colors,
    color,
}) => {
    const [quantity, setQuantity] = useState(numOfColors);
    const [newColor, setNewColor] = useState(color);
    const [newColors, setNewColors] = useState(colors);

    const increase = (e) => {
        setQuantity(quantity + 1);
        newColors.push(newColors[quantity - 1]);
        setNewColors(newColors);
    };
    const decrease = (e) => {
        if (quantity <= 0) return;
        setQuantity(quantity - 1);
        newColors.pop();
        setNewColors(newColors);
    };
    useEffect(() => {
        setNumOfColors(parseInt(quantity));
    }, [quantity]);
    useEffect(() => {
        setColors(newColors);
    }, [color, colors, numOfColors, newColor, newColors, quantity]);
    return (
        <div className="d-flex">
            <Button
                variant={variant}
                className="rounded-l-0 btn-sm-sm cursor-pointer"
                onClick={decrease}
                role="button"
            >
                <i className="bi bi-dash"></i>
            </Button>
            <Form.Control
                type="number"
                pattern="[0-9]*"
                className="rounded-0 mw-fit text-center bg-light border-green color-primary input-num"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                disabled
            />
            <Button
                variant={variant}
                className="rounded-r-0 btn-sm-sm cursor-pointer"
                onClick={increase}
                role="button"
            >
                <i className="bi bi-plus"></i>
            </Button>
        </div>
    );
};

export default ButtonColor;
