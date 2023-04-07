import React, { useState } from 'react';

import { Col, Row } from 'react-bootstrap';

import ButtonCustom from './Button';

const CreateTestCase = ({
    numOfTestCase,
    input,
    output,
    showQues,
    testCase,
    handleTestCaseDecrease,
}) => {
    const [show, setShow] = useState(showQues);
    const [newClassName, setNewClassName] = useState('d-none');
    const [value, setInputValue] = useState(input);
    const [valueOutput, setOutputValue] = useState(output);
    const handleShow = (e) => {
        setShow(!show);
        show ? setNewClassName('d-none') : setNewClassName('d-flex');
    };
    const handleInput = (e) => {
        setInputValue(e.target.value);
    };
    const handleOutput = (e) => {
        setOutputValue(e.target.value);
    };

    console.log(testCase);

    return (
        <div>
            <div className="position-relative">
                <ButtonCustom
                    variant="text-secondary fw-bold outline col-lg-5 border-secondary mb-2 "
                    onClick={handleShow}
                    className="bi bi-chevron-down"
                    className2="d-flex flex-row-reverse justify-content-between"
                    name={`Test Case ${numOfTestCase}:`}
                ></ButtonCustom>
                <ButtonCustom
                    className={`bi bi-x-circle-fill justify-content-center color-red fs-4 d-flex`}
                    variant="outline border-0 position-absolute end-0 my-2 mx-3"
                    onClick={handleTestCaseDecrease}
                />
            </div>
            <div className={newClassName}>
                <Row className="d-flex">
                    <Col className="col-lg-6 col-12">
                        <label htmlFor="input">Input</label>
                        <textarea
                            name="input"
                            id="input"
                            rows="7"
                            cols="22"
                            defaultValue={value}
                            onChange={handleInput}
                        ></textarea>
                    </Col>
                    <Col className="col-lg-6 col-12">
                        <label htmlFor="output">Output</label>
                        <textarea
                            name="output"
                            id="output"
                            rows="7"
                            cols="22"
                            defaultValue={valueOutput}
                            onChange={handleOutput}
                        ></textarea>
                    </Col>
                </Row>
                <hr></hr>
            </div>
        </div>
    );
};

export default CreateTestCase;
