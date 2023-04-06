import React, { useState } from 'react';

import { Col, Form, Row } from 'react-bootstrap';

import ButtonCustom from './Button';
import ButtonUpDown from './ButtonUpDown';
import CreateTestCase from './CreateTestCase';

const CreateQuestion = ({ maxSubmitTime, questionImages, question, i }) => {
    console.log(question[i]);
    const defaultTestCases = { input: '', output: '' };
    const [testCasesResult, setTestCaseResult] = useState([...question[i].testCases]);
    const [showQues, setShowQues] = useState(true);
    const [show, setShow] = useState(true);
    const [newClassName, setNewClassName] = useState('d-none');
    const [fileName, setFileName] = useState(questionImages);
    const [numOfTestCase, setNumOfTestCase] = useState(testCasesResult.length);
    function increaseTestCase() {
        testCasesResult.push(defaultTestCases);
        setNumOfTestCase(numOfTestCase + 1);
        setShow(false);
    }
    function decreaseTestCase() {
        setNumOfTestCase(numOfTestCase - 1);
        testCasesResult.pop(defaultTestCases);
        setShow(true);
    }
    const handleShow = (e) => {
        setShowQues(!showQues);
        showQues ? setNewClassName('d-none') : setNewClassName('d-flex');
    };
    console.log(testCasesResult);
    return (
        <div>
            <ButtonCustom
                variant="text-secondary fw-bold outline col-lg-6 border-secondary fs-5 mb-3"
                onClick={handleShow}
                className="bi bi-chevron-down"
                className2="d-flex flex-row-reverse justify-content-between"
                name={`Question ${i + 1}:`}
            ></ButtonCustom>

            <Row className={newClassName}>
                <Col>
                    <Row className={`d-flex align-items-center mb-4 `}>
                        <Col className="col-6 col-lg-5">
                            <div className="text-secondary fw-bold rfs">Max Submit Time:</div>
                        </Col>
                        <Col className="col-3 col-lg-4 ">
                            <ButtonUpDown variant="green" maxSubmitTime={maxSubmitTime} />
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group controlId="formFile" className="">
                            <Form.Label className="fw-bold">Upload question</Form.Label>
                            <Form.Control
                                type="file"
                                name={fileName}
                                onChange={(e) => setFileName(e.target.files[0].name)}
                            />
                        </Form.Group>
                    </Row>
                </Col>
                <Col>
                    <div className="mb-3">
                        {testCasesResult.map((item, i) => (
                            <CreateTestCase
                                numOfTestCase={i + 1}
                                input={item.input}
                                output={item.output}
                                show={show}
                            />
                        ))}
                    </div>
                    <ButtonCustom
                        variant="light border-dashed w-100"
                        name="Add test case"
                        className="bi bi-plus d-flex align-items-center fs-4"
                        onClick={increaseTestCase}
                    />
                </Col>
                <hr className="mt-3"></hr>
            </Row>
            {/* ) : null} */}
        </div>
    );
};

export default CreateQuestion;
