import React, { useEffect, useState } from 'react';

import { Col, Form, InputGroup, Row } from 'react-bootstrap';

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
    roomType,
}) => {
    const [show, setShow] = useState(showQues);
    const [newClassName, setNewClassName] = useState('d-none');
    const [value, setInputValue] = useState(input == null ? '' : input);
    const [valueOutput, setOutputValue] = useState(output == null ? '' : output);
    // useEffect(() => {
    // if (!input) setInputValue('');
    // else setInputValue(input);
    // if (!output) setInputValue('');
    // else setOutputValue(output);
    // }, [testCase, input, output, numOfTestCase, i, allTestCase]);

    const handleShow = (e) => {
        e.preventDefault();
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
        newTestCase.input = value;
        newTestCase.output = valueOutput;
        newTestCases[i] = newTestCase;
        setNewTestCase(newTestCases);
    }, [value, valueOutput]);

    return (
        <div>
            <div className="position-relative d-flex align-items-center">
                <ButtonCustom
                    variant="text-secondary fw-bold outline col-lg-5 border-secondary mb-2 w-75 cursor-pointer"
                    onClick={(e) => handleShow(e)}
                    className="bi bi-chevron-down"
                    className2="d-flex flex-row-reverse justify-content-between"
                    name={`Test Case ${numOfTestCase}:`}
                    role="button"
                ></ButtonCustom>
                <ButtonCustom
                    className={`bi bi-trash-fill justify-content-center color-red fs-4 d-flex`}
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
                            ></Form.Control>
                            <Form.Control.Feedback type="invalid" className="mb-3">
                                Please enter input
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col className="col-lg-6 col-12">
                        <Form.Group as={Col} controlId="output">
                            <Form.Label id="label">Output</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="output"
                                rows={7}
                                cols={22}
                                defaultValue={valueOutput}
                                onChange={handleOutput}
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
