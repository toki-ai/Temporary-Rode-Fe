import React from 'react';
import { useState } from 'react';

import { Button } from 'react-bootstrap';

function Btn({ name, handleOnClick }) {
    return (
        <>
            <Button
                variant="outline"
                className="color_primary border_color_primary btn_primary col-2 mw_fit"
                onClick={(e) => handleOnClick(e, 'value')}
                value={name}
            >
                {name}
            </Button>
        </>
    );
}

export default Btn;
