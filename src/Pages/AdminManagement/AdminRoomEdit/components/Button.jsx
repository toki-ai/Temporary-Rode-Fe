import React from 'react';

import { Button } from 'react-bootstrap';

const ButtonCustom = (props) => {
    return (
        <Button variant={props.variant} href={props.href} onClick={props.onClick}>
            <div className="d-flex justify-content-center align-items-center">
                <i className={props.className}></i>
                <span>{props.name}</span>
            </div>
        </Button>
    );
};

export default ButtonCustom;
