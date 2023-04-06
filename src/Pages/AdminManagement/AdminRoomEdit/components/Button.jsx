import React from 'react';

import { Button } from 'react-bootstrap';

const ButtonCustom = (props) => {
    var className2 = `d-flex justify-content-center align-items-center ${props.className2}`;
    return (
        <Button variant={props.variant} href={props.href} onClick={props.onClick}>
            <div className={className2}>
                <i className={props.className}></i>
                <span>{props.name}</span>
            </div>
        </Button>
    );
};

export default ButtonCustom;
