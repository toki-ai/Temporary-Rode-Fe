import React, { useState } from 'react';
import { useEffect } from 'react';

import { extractColors } from 'extract-colors';
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
    roomType,
}) => {
    const colorSplit = questionColors?.length ? questionColors.split(',') : ['#000000'];
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
    const [colors, setColors] = useState(colorSplit);
    const [nColors, setNColors] = useState([]);
    const [numOfColors, setNumOfColors] = useState(colors.length);
    const [newNumOfColors, setNewNumOfColors] = useState(colors.length);
    const schema = yup.object().shape({});
    function increaseTestCase() {
        testCasesResult.push(defaultTestCases);
        setNumOfTestCase(numOfTestCase + 1);
        setShowQues(false);
    }
    function decreaseTestCase() {
        testCasesResult.pop(defaultTestCases);
        testCaseResultFinal.pop(defaultTestCases);
        setNumOfTestCase(numOfTestCase - 1);
        setShowQues(true);
    }
    const handleShow = (e) => {
        e.preventDefault();
        setShowQues(!showQues);
        showQues ? setNewClassName('d-none') : setNewClassName('d-flex');
    };

    const handleImageChange = (e) => {
        setQuestionId('');
        setFileName('');
    };
    const handleChangeImage = async (e) => {
        try {
            const reader = new FileReader();
            const file = e.target.files[0];
            const data = await localFileApi.postImg(file);
            if (file) reader.readAsDataURL(file);
            reader.onload = (e) => {
                const imageUrl = e.target.result;
                setQuestionId(data.data.data[0].id);

                setFileName(e.target.result);

                extractColors(imageUrl)
                    .then((newColors) => {
                        setNumOfColors(newColors.length);
                        setNewNumOfColors(newColors.length);
                        setNColors(newColors.map((color) => color.hex));
                        setColors(newColors.map((color) => color.hex));

                        console.warn(newColors);
                        console.log(nColors);
                        console.warn(colors);
                    })
                    .catch(console.error);
            };
            setFile(file);
        } catch (err) {
            console.log(err);
        }
    };
    console.log(colors);
    useEffect(() => {
        let newQuestions = question.slice();
        let newQuestion = newQuestions[i];
        parseInt(newMaxSubmitTimes) != parseInt(newQuestion.maxSubmitTimes)
            ? (newQuestion.maxSubmitTimes = parseInt(newMaxSubmitTimes))
            : parseInt(newQuestion.maxSubmitTimes);
        newQuestion.testCases = testCaseResultFinal.slice();
        newQuestion.colors = colors.toString();
        newQuestion.codeTemplate = codeTemplate;
        newQuestion.questionImage = questionId;
        newQuestions[i].id != ''
            ? (newQuestion.id = newQuestions[i].id)
            : (newQuestion.id = i.toString());
        newQuestions[i] = newQuestion;
        setNewQues(newQuestions);
    }, [
        newMaxSubmitTimes,
        question,
        testCaseResultFinal,
        colors,
        color,
        codeTemplate,
        numOfColors,
        questionId,
        numOfTestCase,
        testCasesResult,
    ]);

    useEffect(() => {
        color != '' && (colorPInvalid = true);
    }, [color]);
    useEffect(() => {}, [numOfColors]);
    useEffect(() => {
        const handleColorChange = (e) => {
            setColor(e.target.value);
        };
    }, [colors, color]);
    const handleColorChange = (e) => {
        setColor(e.target.value);
        colors[i] = e.target.value;
    };
    useEffect(() => {
        setNewNumOfColors(colors.length);
        setNColors(colors);
        console.log(nColors);
        console.log(newNumOfColors);
    }, [file]);
    // useEffect(() => {
    //     setNumOfColors(newNumOfColors);
    //     setColors(nColors);
    // }, [newNumOfColors, nColors]);
    return (
        <div>
            <Row>
                <Col className="col-6 position-relative">
                    <ButtonCustom
                        variant="text-secondary fw-bold outline w-75 border-secondary fs-5 mb-3"
                        onClick={(e) => handleShow(e)}
                        className="bi bi-chevron-down"
                        className2="d-flex flex-row-reverse justify-content-between"
                        name={`Question ${i + 1}:`}
                        role="button"
                    ></ButtonCustom>
                    <ButtonCustom
                        className={`bi bi-trash-fill justify-content-center color-red fs-4 d-flex`}
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
                                maxSubmitTime={maxSubmitTime ? maxSubmitTime : 1}
                                setNewMaxSubmitTimes={setNewMaxSubmitTimes}
                            />
                        </Col>
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
                                {/* {questionId != '' ? ( */}
                                <img
                                    src={
                                        localFileApi.getImg(questionImages) != null
                                            ? localFileApi.getImg(questionImages)
                                            : fileName
                                    }
                                    alt=""
                                    className="rounded cover img-fluid img-thumbnail border-dashed-green preview-image"
                                />
                                {/* ) : (
                                    fileName != null && (
                                        <img
                                            src={fileName}
                                            alt=""
                                            className="rounded cover img-fluid img-thumbnail border-dashed-green preview-image"
                                        />
                                    )
                                )} */}
                            </div>
                        ) : (
                            <>
                                <div className="d-flex justify-content-center mt-3 ">
                                    <div className="rounded cover img-fluid img-thumbnail border-dashed-green preview-image w-50"></div>
                                </div>
                            </>
                        )}
                    </Row>
                    {roomType == 'FE' ? (
                        <Row className="d-flex d-flex flex-column justify-content-center" as={Col}>
                            <Form.Group
                                className="my-3 d-flex d-flex align-items-center col-md-9 col-lg-8 justify-content-between"
                                controlId="color"
                            >
                                <Col className="col-6 col-lg-5">
                                    <Form.Label className="text-secondary fw-bold rfs">
                                        Color Picker:
                                    </Form.Label>
                                </Col>
                                <Col className="col-3 col-lg-4 ">
                                    <ButtonColor
                                        variant="green cursor-pointer"
                                        setNumOfColors={setNewNumOfColors}
                                        numOfColors={numOfColors}
                                        colors={colors}
                                        setColors={setNColors}
                                        file={file}
                                        color={color}
                                    />
                                </Col>
                                <Form.Control.Feedback type="invalid">
                                    {colorPError}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <div className="d-flex flex-wrap mb-3" id="colors-value">
                                {nColors.map((_, i) => (
                                    <div
                                        key={i}
                                        className="d-flex flex-column align-items-center w-20"
                                    >
                                        <Form.Control
                                            type="color"
                                            name="color"
                                            value={
                                                nColors[i] !== undefined
                                                    ? nColors[i]
                                                    : nColors['ffffff']
                                            }
                                            onChange={(e) => {
                                                nColors.push();
                                                nColors[i] = e.target.value;
                                                setColor(nColors[i]);
                                            }}
                                        ></Form.Control>
                                        <div className="px-1">
                                            {nColors[i]?.length ? nColors[i] : '#ffffff'}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Row>
                    ) : (
                        <Col>
                            <Row className="mt-4">
                                <Form.Group controlId="codeTemplate">
                                    <Form.Label className="text-secondary fw-bold rfs">
                                        Code Template:
                                    </Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        type="text"
                                        name="codeTemplate"
                                        className="mt-3"
                                        rows={15}
                                        defaultValue={codeTemplate == null ? '' : codeTemplate}
                                        onChange={(e) => {
                                            setCodeTemplate(e.target.value);
                                        }}
                                    ></Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                        {codeTError}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                        </Col>
                    )}
                </Col>
                {roomType == 'FE' ? (
                    <Col>
                        <Row>
                            <Form.Group controlId="codeTemplate">
                                <Form.Label className="text-secondary fw-bold rfs">
                                    Code Template:
                                </Form.Label>
                                <Form.Control
                                    as="textarea"
                                    type="text"
                                    name="codeTemplate"
                                    className="mt-3"
                                    rows={15}
                                    defaultValue={codeTemplate == null ? '' : codeTemplate}
                                    onChange={(e) => {
                                        setCodeTemplate(e.target.value);
                                    }}
                                ></Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {codeTError}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                    </Col>
                ) : (
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
                                    roomType={roomType}
                                />
                            ))}
                        </div>
                        <ButtonCustom
                            variant="light border-dashed w-100"
                            name="Add test case"
                            className="bi bi-plus d-flex align-items-center fs-4"
                            onClick={increaseTestCase}
                            type="button"
                        />
                    </Col>
                )}
                <hr className="mt-3"></hr>
            </Row>
        </div>
    );
};

export default CreateQuestion;
