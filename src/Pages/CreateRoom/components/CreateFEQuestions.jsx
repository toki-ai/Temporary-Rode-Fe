import React, { useRef } from 'react';

import ButtonStyled from '../../../components/Button';
import PreviewImages from '../../../components/PreviewImages';
import localFilesAPI from '../../../utils/api/localFilesAPI';
import * as St from '../styles';

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
                colors: '#45ce7b',
                codeTemplate: '',
            },
        ]);
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

    const editColor = (value, questionIdx, currentColor) => {
        setQuestions((prev) => {
            let copy = [...prev];
            let colors = copy[questionIdx].colors.split(', ');
            const idx = colors.indexOf(currentColor);
            colors[idx] = value;
            copy[questionIdx].colors = colors.join(', ');
            return copy;
        });
    };

    const addColor = (questionIdx) => {
        setQuestions((prev) => {
            let copy = [...prev];
            copy[questionIdx].colors += ', #ffffff';
            return copy;
        });
    };

    const addCodeTemplate = (value, questionIdx) => {
        setQuestions((prev) => {
            let copy = [...prev];
            copy[questionIdx].codeTemplate = value;
            return copy;
        });
    };

    // Components
    const MaxSumbitTimes = ({ question }) => {
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

    const Colors = ({ question, questionIdx }) => {
        return (
            <div>
                <label htmlFor="color">Color</label>
                <div>
                    {question.colors?.split(', ').map((color, idx) => (
                        <St.ColorWrapper key={idx}>
                            <St.Color color={color}></St.Color>
                            <input
                                value={color}
                                onChange={(e) => editColor(e.target.value, questionIdx, color)}
                            />
                        </St.ColorWrapper>
                    ))}
                </div>
                <ButtonStyled buttonType="dashed" onClick={() => addColor(questionIdx)}>
                    Add color
                </ButtonStyled>
            </div>
        );
    };

    const CodeTemplate = ({ question, questionIdx }) => {
        return (
            <St.CodeTemplate>
                <label htmlFor="codeTemplate">Code</label>
                <div>
                    <textarea
                        name="codeTemplate"
                        id="codeTemplate"
                        cols="40"
                        rows="20"
                        onChange={(e) => addCodeTemplate(e.target.value, questionIdx)}
                    ></textarea>
                </div>
            </St.CodeTemplate>
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
                            <Colors question={question} questionIdx={questionIdx} />
                        </div>

                        <div className="col-md-6">
                            <CodeTemplate question={question} questionIdx={questionIdx} />
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
