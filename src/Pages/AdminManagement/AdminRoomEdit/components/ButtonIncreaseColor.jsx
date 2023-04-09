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
    console.log(color);
    const increase = (e) => {
        setQuantity(quantity + 1);
        newColors.push(newColors[quantity - 1]);
        setNewColors(newColors);
        console.log(colors);
        console.log(color);
    };
    const decrease = (e) => {
        if (quantity <= 0) return;
        setQuantity(quantity - 1);
        newColors.pop();
        setNewColors(newColors);
    };
    useEffect(() => {
        setNumOfColors(parseInt(quantity));
        console.log(quantity);
    }, [quantity]);
    useEffect(() => {
        console.log(colors);
        setColors(newColors);
    }, [color, colors, numOfColors, newColor, newColors, quantity]);
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
            />
            <Button variant={variant} className="rounded-r-0 btn-sm-sm" onClick={increase}>
                <i className="bi bi-plus"></i>
            </Button>
        </div>
    );
};

export default ButtonColor;
