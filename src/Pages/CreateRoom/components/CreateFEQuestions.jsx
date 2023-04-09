import React, { useRef, useState } from 'react';

import { extractColors } from 'extract-colors';

import ButtonStyled from '../../../components/Button';
import { themes } from '../../../themes';
import localFilesAPI from '../../../utils/api/localFilesAPI';
import * as St from '../styles';

const CreateBEQuestions = ({ questions, setQuestions }) => {
    const inputRef = useRef(null);
    const [imageUrls, setImageUrls] = useState([]);

    // Functions
    const createQuestion = () => {
        setQuestions((prev) => [
            ...prev,
            {
                maxSubmitTimes: 0,
                questionImage: '',
                colors: themes.colors.primary,
                codeTemplate: '',
            },
        ]);
    };

    const handleIncrease = (questionIdx) => {
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
        try {
            const file = files[0];
            const res = await localFilesAPI.uploadQuestionFile(file);
            const reader = new FileReader();

            reader.onload = (event) => {
                const imageUrl = event.target.result;

                extractColors(imageUrl)
                    .then((colors) => {
                        setQuestions((prev) => {
                            let copy = [...prev];
                            copy[questionIdx].colors = colors.map((color) => color.hex).join();
                            copy[questionIdx].questionImage = res.data.data[0].id;
                            return copy;
                        });
                    })
                    .catch(console.error);
                setImageUrls((prev) => {
                    let copy = [...prev];
                    copy[questionIdx] = imageUrl;
                    return copy;
                });
            };

            reader.readAsDataURL(file);
        } catch (error) {
            console.log('Error: ', error);
        }
    };

    const editColor = (value, questionIdx, currentColor) => {
        setQuestions((prev) =>
            prev.map((question, idx) => {
                if (idx !== questionIdx) return question;
                const colors = question.colors.split(',').filter(Boolean);
                const colorIdx = colors.indexOf(currentColor);
                colors[colorIdx] = value;
                return { ...question, colors: colors.filter(Boolean).join(',') };
            })
        );
    };

    const addColor = (questionIdx) => {
        setQuestions((prev) => {
            let copy = [...prev];
            copy[questionIdx].colors += ',#ffffff';
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
                    <St.PreviewImage src={imageUrls[questionIdx]} alt="Image" />
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
                            <div>
                                <label htmlFor="color">Color</label>
                                <div>
                                    {question.colors?.split(',').map((color, idx) => {
                                        if (color) {
                                            return (
                                                <St.ColorWrapper key={idx}>
                                                    <St.Color color={color}></St.Color>
                                                    <input
                                                        value={color}
                                                        onChange={(e) =>
                                                            editColor(
                                                                e.target.value,
                                                                questionIdx,
                                                                color
                                                            )
                                                        }
                                                    />
                                                </St.ColorWrapper>
                                            );
                                        }
                                    })}
                                </div>
                                <ButtonStyled
                                    buttonType="dashed"
                                    onClick={() => addColor(questionIdx)}
                                >
                                    Add color
                                </ButtonStyled>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <St.CodeTemplate>
                                <label htmlFor="codeTemplate">Code</label>
                                <div>
                                    <textarea
                                        name="codeTemplate"
                                        id="codeTemplate"
                                        cols="40"
                                        rows="80"
                                        onChange={(e) =>
                                            addCodeTemplate(e.target.value, questionIdx)
                                        }
                                        placeholder={`<div></div>\n<style>\n    div {\n\twidth: 100px;\n\theight: 100px;\n\tbackground: #dd6b4d;\n    }\n</style>`}
                                    />
                                </div>
                            </St.CodeTemplate>
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
