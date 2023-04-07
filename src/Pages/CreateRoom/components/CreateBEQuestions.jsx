import React, { useRef } from 'react';

import ButtonStyled from '../../../components/Button';
import PreviewImages from '../../../components/PreviewImages';
import localFilesAPI from '../../../utils/api/localFilesAPI';
import * as St from '../styles';
import Testcase from './Testcase';

const CreateBEQuestions = ({ questions, setQuestions }) => {
    console.log(questions);
    const inputRef = useRef(null);

    // Functions
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

    const uploadImages = async (files, questionIdx) => {
        await localFilesAPI.uploadQuestionFile(files[0]).then((res) => {
            setQuestions((prev) => {
                let copy = [...prev];
                copy[questionIdx].images = files;
                copy[questionIdx].questionImage = res.data.data[0].id;
                return copy;
            });
        });
    };

    // Components
    const MaxSumbitTimes = ({ question, questionIdx }) => {
        return (
            <div>
                <label htmlFor="maxSubmitTimes">Maximum Submit Time:</label>
                <St.NumberInput>
                    <div onClick={() => handleDecrease(questionIdx)}>-</div>
                    <p>{question.maxSubmitTimes}</p>
                    <div onClick={() => handleIncrease(questionIdx)}>+</div>
                </St.NumberInput>
            </div>
        );
    };

    const UploadImages = ({ question, questionIdx }) => {
        return (
            <div className="my-4">
                <label>Image</label>
                <input
                    id="questionImage"
                    type="file"
                    hidden
                    ref={inputRef}
                    onChange={(e) => uploadImages(e.target.files, questionIdx)}
                />
                {question.questionImage ? (
                    <PreviewImages FileList={question.images} />
                ) : (
                    <St.UploadImage onClick={() => inputRef.current.click()}>
                        + <span>Upload your image here...</span>
                    </St.UploadImage>
                )}
            </div>
        );
    };

    return (
        <>
            {questions.map((question, questionIdx) => (
                <St.Questions key={questionIdx}>
                    <St.QuestionTitle>Question {questionIdx + 1}</St.QuestionTitle>

                    <div className="row">
                        <div className="col-md-6">
                            <MaxSumbitTimes question={question} questionIdx={questionIdx} />
                            <UploadImages question={question} questionIdx={questionIdx} />
                        </div>

                        <div className="col-md-6">
                            {question.testcases?.map((testcase, testcaseIdx) => (
                                <Testcase
                                    key={testcaseIdx}
                                    item={testcase}
                                    testcaseIdx={testcaseIdx}
                                    questionIdx={questionIdx}
                                    handleInput={editInputTestcase}
                                    handleOutput={editOutputTestcase}
                                />
                            ))}
                            <div className="d-grid gap-2 ">
                                <ButtonStyled
                                    buttonType="outline"
                                    onClick={() => createTestcase(questionIdx)}
                                >
                                    + Add testcase
                                </ButtonStyled>
                            </div>
                        </div>
                    </div>
                    <hr />
                </St.Questions>
            ))}

            <div className="d-grid gap-2 my-2">
                <ButtonStyled buttonType="dashed" onClick={createQuestion}>
                    + Add questions
                </ButtonStyled>
            </div>
        </>
    );
};

export default CreateBEQuestions;
