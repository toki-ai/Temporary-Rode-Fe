import React, { useState } from 'react';
import { useEffect } from 'react';

import { Col, Form, Row } from 'react-bootstrap';

import localFileApi from '../../../../utils/api/localFileApi';
import roomApi from '../../../../utils/api/roomApi';
import ButtonCustom from './Button';
import ButtonUpDown from './ButtonUpDown';
import CreateTestCase from './CreateTestCase';

const CreateQuestion = ({ maxSubmitTime, questionImages, question, i }) => {
    console.log(question[i]);
    const defaultTestCases = { input: '', output: '' };
    const [testCasesResult, setTestCaseResult] = useState([...question[i].testCases]);
    const [showQues, setShowQues] = useState(false);
    const [questionId, setQuestionId] = useState(questionImages);
    const [newClassName, setNewClassName] = useState('d-none');
    const [fileName, setFileName] = useState();
    const [numOfTestCase, setNumOfTestCase] = useState(testCasesResult.length);
    function increaseTestCase() {
        testCasesResult.push(defaultTestCases);
        setNumOfTestCase(numOfTestCase + 1);
        setShowQues(false);
    }
    function decreaseTestCase() {
        testCasesResult.pop(defaultTestCases);
        setNumOfTestCase(numOfTestCase - 1);
        setShowQues(true);
    }
    const handleShow = (e) => {
        setShowQues(!showQues);
        showQues ? setNewClassName('d-none') : setNewClassName('d-flex');
    };
    console.log(questionImages);
    const handleImageChange = (e) => {
        setQuestionId('');
        setFileName('');
    };
    const handleChangeImage = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];
        if (file) reader.readAsDataURL(file);
        console.log(file);
        reader.onload = (e) => {
            console.log(e.target.result);
            setQuestionId('');
            setFileName(e.target.result);
            console.log(fileName);
        };
    };

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
                        <Form.Group controlId="formFile">
                            <Form.Label className="fw-bold">Upload question</Form.Label>
                            <Form.Control
                                type="file"
                                name="fileUpload"
                                onChange={handleChangeImage}
                            />
                        </Form.Group>

                        <div className="position-relative">
                            {/* {(questionId != '' || fileName != null) && (
                                <ButtonCustom
                                    className={`bi bi-x-circle-fill justify-content-center color-red fs-4 d-flex`}
                                    variant="outline border-0 position-absolute end-0 my-2 mx-3"
                                    onClick={handleImageChange}
                                />
                            )} */}

                            {questionId != '' ? (
                                <img
                                    src={localFileApi.getImg(questionImages)}
                                    alt="Question Image"
                                    className="rounded cover img-fluid img-thumbnail border-dashed-green"
                                />
                            ) : (
                                fileName != null && <img src={fileName} alt="" />
                            )}
                        </div>
                    </Row>
                </Col>
                <Col>
                    <div className="mb-3">
                        {testCasesResult.map((item, i) => (
                            <CreateTestCase
                                numOfTestCase={i + 1}
                                input={item.input}
                                output={item.output}
                                show={showQues}
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
        </div>
    );
};

export default CreateQuestion;
