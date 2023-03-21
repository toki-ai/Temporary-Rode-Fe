import React, { useEffect, useRef, useState } from 'react';

import { Stack } from 'react-bootstrap';

import ButtonStyled from '../../../components/Button';
import localFilesAPI from '../../../utils/api/localFilesAPI';
import * as St from '../styles';
import PreviewImages from './PreviewImages';
import Testcase from './Testcase';

import Button from 'react-bootstrap/Button';

const CreateQuestions = ({ setQuestions: setOuterQuestions }) => {
    const [questions, setQuestions] = useState([
        {
            maxSubmitTimes: 0,
            questionImage: '',
            testcases: [{ input: '', output: '' }],
        },
    ]);
    const inputRef = useRef(null);

    console.log(questions);

    const createQuestion = () => {
        setQuestions((prev) => [
            ...prev,
            {
                maxSubmitTimes: 0,
                questionImage: '',
                testcases: [{ input: '', output: '' }],
            },
        ]);
    };

    const createTestcase = (questionIdx) => {
        setQuestions((prev) => {
            const { testcases, ...rest } = prev[questionIdx]; // destructure testcases array and the rest of the question object
            const newTestcases = [...testcases, { input: '', output: '' }]; // add a new testcase to the testcases array
            const updatedQuestion = { ...rest, testcases: newTestcases }; // create a new object with updated testcases array
            const updatedQuestions = [
                ...prev.slice(0, questionIdx),
                updatedQuestion,
                ...prev.slice(questionIdx + 1),
            ]; // replace the old question object with the updated one
            return updatedQuestions;
        });
    };

    const editInputTestcase = (value, questionIdx, testcaseIdx) => {
        setQuestions((prev) => {
            let copy = [...prev];
            copy[questionIdx].testcases[testcaseIdx].input = value;
            return copy;
        });
    };

    const editOutputTestcase = (value, questionIdx, testcaseIdx) => {
        setQuestions((prev) => {
            let copy = [...prev];
            copy[questionIdx].testcases[testcaseIdx].output = value;
            return copy;
        });
    };

    const handleDone = () => {
        setOuterQuestions(questions);
    };

    const handleIncrease = (questionIdx) => {
        console.log('hello');
        setQuestions((prev) => {
            let copy = [...prev];
            copy[questionIdx].maxSubmitTimes += 1;
            return copy;
        });
    };
    const handleDecrease = (questionIdx) => {
        setQuestions((prev) => {
            let copy = [...prev];
            copy[questionIdx].maxSubmitTimes -= 1;
            return copy;
        });
    };

    const uploadImages = (files, questionIdx) => {
        console.log(questionIdx);
        setQuestions((prev) => {
            let copy = [...prev];
            copy[questionIdx].questionImage = files;
            return copy;
        });
    };

    return (
        <>
            {questions.map((question, id) => (
                <St.Questions key={id}>
                    <St.QuestionTitle>Question {id + 1}</St.QuestionTitle>

                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <label htmlFor="maxSubmitTimes">Maximum Submit Time:</label>
                                <St.NumberInput>
                                    <button onClick={() => handleDecrease(id)}>-</button>
                                    <p>{question.maxSubmitTimes}</p>
                                    <button onClick={() => handleIncrease(id)}>+</button>
                                </St.NumberInput>
                            </div>

                            <div className="my-4">
                                <p>Image</p>
                                <input
                                    id="questionImage"
                                    type="file"
                                    hidden
                                    ref={inputRef}
                                    onChange={(e) => uploadImages(e.target.files, id)}
                                />
                                {question.questionImage ? (
                                    <PreviewImages FileList={question.questionImage} />
                                ) : (
                                    <St.UploadImage onClick={() => inputRef.current.click()}>
                                        + <span>Upload your image here...</span>
                                    </St.UploadImage>
                                )}
                            </div>
                        </div>

                        <div className="col-md-6">
                            {question.testcases.map((testcase, testcaseIdx) => (
                                <Testcase
                                    key={testcaseIdx}
                                    item={testcase}
                                    testcaseIdx={testcaseIdx}
                                    questionIdx={id}
                                    handleInput={editInputTestcase}
                                    handleOutput={editOutputTestcase}
                                />
                            ))}
                            <div className="d-grid gap-2 ">
                                <ButtonStyled
                                    buttonType="outline"
                                    onClick={() => createTestcase(id)}
                                >
                                    Add testcase
                                </ButtonStyled>
                            </div>
                        </div>
                    </div>
                    <hr />
                </St.Questions>
            ))}

            <div className="d-grid gap-2 my-2">
                <ButtonStyled buttonType="dashed" onClick={createQuestion}>
                    Add questions
                </ButtonStyled>
            </div>
            <Stack direction="horizontal" gap={3} className="justify-content-end mb-4">
                <ButtonStyled buttonType="secondary">Cancel</ButtonStyled>{' '}
                <ButtonStyled buttonType="solid" onClick={handleDone}>
                    Create
                </ButtonStyled>
            </Stack>
        </>
    );
};

export default CreateQuestions;
