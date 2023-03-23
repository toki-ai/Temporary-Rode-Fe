import React from 'react';

import { Button } from 'react-bootstrap';

function Btn({ name, handleOnClick, className }) {
    return (
        <>
            <Button
                variant="outline"
                className={className}
                onClick={(e) => handleOnClick(e, 'value')}
                value={name}
            >
                {name}
            </Button>
        </>
    );
}

export default Btn;
