import React, { useState } from 'react';

import { Button, Col, Row } from 'react-bootstrap';

import ButtonCustom from './Button';

const CreateTestCase = ({ numOfTestCase, input, output, showQues }) => {
    const [show, setShow] = useState(showQues);
    const [newClassName, setNewClassName] = useState('d-none');
    const handleShow = (e) => {
        setShow(!show);
        show ? setNewClassName('d-none') : setNewClassName('d-flex');
    };

    return (
        <div>
            <ButtonCustom
                variant="text-secondary fw-bold outline col-lg-5 border-secondary mb-2"
                onClick={handleShow}
                className="bi bi-chevron-down"
                className2="d-flex flex-row-reverse justify-content-between"
                name={`Test Case ${numOfTestCase}:`}
            ></ButtonCustom>
            <div className={newClassName}>
                <Row className="d-flex">
                    <Col className="col-lg-6 col-12">
                        <label htmlFor="input">Input</label>
                        <textarea
                            name="input"
                            id="input"
                            rows="7"
                            cols="22"
                            defaultValue={input}
                            onChange={(e) => setInputValue(e.target.value)}
                        ></textarea>
                    </Col>
                    <Col className="col-lg-6 col-12">
                        <label htmlFor="output">Output</label>
                        <textarea
                            name="output"
                            id="output"
                            rows="7"
                            cols="22"
                            defaultValue={output}
                            onChange={(e) => setOutputValue(e.target.value)}
                        ></textarea>
                    </Col>
                </Row>
                <hr></hr>
            </div>
        </div>
    );
};

export default CreateTestCase;
