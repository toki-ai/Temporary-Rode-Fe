import React from 'react';

import Form from 'react-bootstrap/Form';

const Join = () => {
    return (
        <div>
            <div className="accounts-filter">
                <label htmlFor="">Join at:</label>
                <Form.Select aria-label="Default select example">
                    <option>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                -
                <Form.Select aria-label="Default select example">
                    <option>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </div>
        </div>
    );
};

export default Join;
