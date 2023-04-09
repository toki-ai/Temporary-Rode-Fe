import { useState } from 'react';

import ButtonStyled from '../../../components/Button';
import * as St from '../styles';
import MaxSumbitTimes from './MaxSumbitTimes';
import UploadImage from './UploadImage';
import { addFEQuestion, editColor, addColor, addCodeTemplate } from './helper';

const CreateBEQuestions = ({ questions, setQuestions }) => {
    const [imageUrls, setImageUrls] = useState([]);

    return (
        <>
            {questions.map((question, questionIdx) => (
                <St.Questions key={questionIdx}>
                    <St.QuestionTitle>Question {questionIdx + 1}</St.QuestionTitle>

                    <div className="row">
                        <div className="col-md-6">
                            <MaxSumbitTimes
                                question={question}
                                questionIdx={questionIdx}
                                setQuestions={setQuestions}
                            />
                            <UploadImage
                                question={question}
                                questionIdx={questionIdx}
                                setQuestions={setQuestions}
                                setImageUrls={setImageUrls}
                                imageUrls={imageUrls}
                            />

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
                                                                color,
                                                                setQuestions
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
                                    onClick={() => addColor(questionIdx, setQuestions)}
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
                                            addCodeTemplate(
                                                e.target.value,
                                                questionIdx,
                                                setQuestions
                                            )
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
                <ButtonStyled buttonType="dashed" onClick={() => addFEQuestion(setQuestions)}>
                    + Add questions
                </ButtonStyled>
            </div>
        </>
    );
};

export default CreateBEQuestions;
