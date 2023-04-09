import React, { useEffect, useState } from 'react';

import { Col, Form, Row } from 'react-bootstrap';

import ButtonCustom from './Button';

const CreateTestCase = ({
    i,
    numOfTestCase,
    input,
    output,
    showQues,
    testCase,
    handleTestCaseDecrease,
    setNewTestCase: setNewTestCase,
    allTestCase,
    inputValid,
    inputInvalid,
    outputValid,
    outputInvalid,
    inputError,
    outputError,
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
    useEffect(() => {
        let newTestCases = allTestCase.slice();
        let newTestCase = newTestCases[i];
        console.log(newTestCases);
        newTestCase.input = value;
        newTestCase.output = valueOutput;
        console.log(newTestCase);
        newTestCases[i] = newTestCase;
        setNewTestCase(newTestCases);
    }, [value, valueOutput]);
    console.log(testCase);
    const isOutputValid = () => {
        if (valueOutput != '') return true;
        else return false;
    };
    const isInputValid = () => {
        if (value != '') {
            return true;
        } else return false;
    };

    return (
        <div>
            <div className="position-relative d-flex align-items-center">
                <ButtonCustom
                    variant="text-secondary fw-bold outline col-lg-5 border-secondary mb-2 w-75"
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
                        <Form.Group as={Col} controlId="input">
                            <Form.Label id="label">Input</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="input"
                                rows={7}
                                cols={22}
                                defaultValue={value}
                                onChange={handleInput}
                                isValid={isInputValid()}
                                isInvalid={!isInputValid()}
                            ></Form.Control>
                            <Form.Control.Feedback type="invalid" className="mb-3">
                                Please enter input
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col className="col-lg-6 col-12">
                        <Form.Group as={Col} controlId="output">
                            <Form.Label>Output</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="output"
                                rows={7}
                                cols={22}
                                defaultValue={valueOutput}
                                onChange={handleOutput}
                                isValid={isOutputValid()}
                                isInvalid={!isOutputValid()}
                            ></Form.Control>
                            <Form.Control.Feedback type="invalid" className="mb-3">
                                Please enter output
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <hr></hr>
            </div>
        </div>
    );
};

export default CreateTestCase;
