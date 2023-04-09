import React, { useState } from 'react';
import { useEffect } from 'react';

import { Col, Form, Row } from 'react-bootstrap';
import * as yup from 'yup';

import localFileApi from '../../../../utils/api/localFileApi';
import roomApi from '../../../../utils/api/roomApi';
import ButtonCustom from './Button';
import ButtonColor from './ButtonIncreaseColor';
import ButtonUpDown from './ButtonUpDown';
import CreateTestCase from './CreateTestCase';

const CreateQuestion = ({
    maxSubmitTime,
    questionImages,
    question,
    i,
    setNewQuestions: setNewQues,
    done,
    isValid,
    isInvalid,
    errorFile,
    handleRemoveQuestion,
    inputValid,
    inputInvalid,
    outputValid,
    outputInvalid,
    inputError,
    outputError,
    codeTValid,
    codeTInvalid,
    codeTError,
    colorPValid,
    colorPInvalid,
    colorPError,
    questionColors,
    codeTemp,
}) => {
    const defaultTestCases = { input: '', output: '' };
    const [testCasesResult, setTestCaseResult] = useState([...question[i].testCases]);
    const [showQues, setShowQues] = useState(false);
    const [questionId, setQuestionId] = useState(questionImages);
    const [newClassName, setNewClassName] = useState('d-none');
    const [fileName, setFileName] = useState('');
    const [numOfTestCase, setNumOfTestCase] = useState(testCasesResult.length);
    const [testCaseResultFinal, setTestCaseResultFinal] = useState([]);
    const [newMaxSubmitTimes, setNewMaxSubmitTimes] = useState();
    const [file, setFile] = useState(null);
    const [codeTemplate, setCodeTemplate] = useState(codeTemp);
    const [color, setColor] = useState('');
    const [colors, setColors] = useState(questionColors.split(','));
    const [numOfColors, setNumOfColors] = useState(colors.length);
    console.log(questionColors.split(','));
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
        setFile(file);
    };
    useEffect(() => {
        let newQuestions = question.slice();
        let newQuestion = newQuestions[i];
        console.log(newMaxSubmitTimes);
        parseInt(newMaxSubmitTimes) != parseInt(newQuestion.maxSubmitTimes)
            ? (newQuestion.maxSubmitTimes = parseInt(newMaxSubmitTimes))
            : parseInt(newQuestion.maxSubmitTimes);
        newQuestion.testCases = testCaseResultFinal.slice();
        console.log(colors);
        newQuestion.colors = colors.toString();
        newQuestions[i] = newQuestion;
        setNewQues(newQuestions);
        console.log(newQuestions);
    }, [newMaxSubmitTimes, question, testCaseResultFinal, colors, color]);
    useEffect(() => {
        // localFileApi.postImg(file);
        color != '' && (colorPInvalid = true);
    }, [done, color]);
    useEffect(() => {}, [numOfColors]);
    console.log(numOfColors);
    console.log(colors);
    useEffect(() => {
        const handleColorChange = (e) => {
            setColor(e.target.value);
            colors.push(color);
        };
    });
    const handleColorChange = (e) => {
        setColor(e.target.value);
        colors[i] = e.target.value;
    };

    // console.log(document.getElementById('colors-value').childNodes[0].value);
    return (
        <div>
            <Row>
                <Col className="col-6 position-relative">
                    <ButtonCustom
                        variant="text-secondary fw-bold outline w-75 border-secondary fs-5 mb-3"
                        onClick={handleShow}
                        className="bi bi-chevron-down"
                        className2="d-flex flex-row-reverse justify-content-between"
                        name={`Question ${i + 1}:`}
                    ></ButtonCustom>
                    <ButtonCustom
                        className={`bi bi-x-circle-fill justify-content-center color-red fs-4 d-flex`}
                        variant="outline border-0 position-absolute end-0 my-2"
                        onClick={handleRemoveQuestion}
                    />
                </Col>
            </Row>
            <Row className={newClassName}>
                <Col>
                    <Row className={`d-flex align-items-center mb-4 `}>
                        <Col className="col-6 col-lg-5">
                            <div className="text-secondary fw-bold rfs">Max Submit Time:</div>
                        </Col>
                        <Col className="col-3 col-lg-4 ">
                            <ButtonUpDown
                                variant="green"
                                maxSubmitTime={maxSubmitTime}
                                setNewMaxSubmitTimes={setNewMaxSubmitTimes}
                                done={done}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group controlId="codeTemplate">
                            <Form.Label className="text-secondary fw-bold rfs">
                                Code Template
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="codeTemplate"
                                defaultValue={codeTemplate}
                                onChange={(e) => {
                                    setCodeTemplate(e.target.value);
                                }}
                            ></Form.Control>
                            <Form.Control.Feedback type="invalid">
                                {codeTError}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="d-flex d-flex align-items-center">
                        <Form.Group
                            className="my-3 d-flex d-flex align-items-center col-5 justify-content-between"
                            controlId="color"
                        >
                            <Form.Label className="text-secondary fw-bold rfs">
                                Color Picker:
                            </Form.Label>
                            <ButtonColor
                                variant="green"
                                setNumOfColors={setNumOfColors}
                                numOfColors={numOfColors}
                                colors={colors}
                                setColors={setColors}
                                color={color}
                            />
                            <Form.Control.Feedback type="invalid">
                                {colorPError}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="col-7 d-flex" id="colors-value">
                            {colors.map((_, i) => (
                                <Form.Control
                                    key={i}
                                    type="color"
                                    name="color"
                                    defaultValue={colors[i]}
                                    onChange={(e) => {
                                        colors[i] = e.target.value;
                                        setColor(color);
                                    }}
                                ></Form.Control>
                            ))}
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group controlId="formFile">
                            <Form.Label className="fw-bold">Upload question</Form.Label>
                            {questionId != '' || fileName != '' ? (
                                <Form.Control
                                    type="file"
                                    name="fileUpload"
                                    onChange={handleChangeImage}
                                />
                            ) : (
                                <Form.Control
                                    type="file"
                                    name="fileUpload"
                                    onChange={handleChangeImage}
                                    isValid={isValid}
                                    isInvalid={isInvalid}
                                />
                            )}
                            <Form.Control.Feedback type="invalid">
                                {errorFile}
                            </Form.Control.Feedback>
                        </Form.Group>
                        {questionId != '' || fileName != '' ? (
                            <div className="d-flex justify-content-center mt-3">
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
                                        className="rounded cover img-fluid img-thumbnail border-dashed-green preview-image"
                                    />
                                ) : (
                                    fileName != null && (
                                        <img
                                            src={fileName}
                                            alt=""
                                            className="rounded cover img-fluid img-thumbnail border-dashed-green preview-image"
                                        />
                                    )
                                )}
                            </div>
                        ) : (
                            <>
                                <div className="d-flex justify-content-center mt-3 ">
                                    <div className="rounded cover img-fluid img-thumbnail border-dashed-green preview-image w-50"></div>
                                </div>
                            </>
                        )}
                    </Row>
                </Col>
                <Col>
                    <div className="mb-3">
                        {testCasesResult.map((item, i) => (
                            <CreateTestCase
                                i={i}
                                numOfTestCase={i + 1}
                                input={item.input}
                                output={item.output}
                                show={showQues}
                                key={item.id}
                                testCase={testCasesResult.at(i)}
                                handleTestCaseDecrease={decreaseTestCase}
                                setNewTestCase={setTestCaseResultFinal}
                                allTestCase={testCasesResult}
                                inputValid={inputValid}
                                inputInvalid={inputInvalid}
                                outputValid={outputValid}
                                outputInvalid={outputInvalid}
                                inputError={inputError}
                                outputError={outputError}
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
