import { useState } from 'react';

import ButtonStyled from '../../../../components/Button';
import * as St from '../styles';
import MaxSumbitTimes from './MaxSumbitTimes';
import Testcase from './Testcase';
import UploadImage from './UploadImage';
import { addBEQuestion, addTestcase } from './utils';

import Accordion from 'react-bootstrap/Accordion';

const CreateBEQuestions = ({ questions, setQuestions }) => {
    const [imageUrls, setImageUrls] = useState([]);

    return (
        <>
            {questions?.map((question, questionIdx) => (
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
                        </div>

                        <div className="col-md-6">
                            <Accordion
                                defaultActiveKey={question?.testcases?.length - 1 || 0}
                                flush
                            >
                                {question.testcases?.map((testcase, testcaseIdx) => (
                                    <Testcase
                                        key={testcaseIdx}
                                        item={testcase}
                                        testcaseIdx={testcaseIdx}
                                        questionIdx={questionIdx}
                                        setQuestions={setQuestions}
                                    />
                                ))}
                            </Accordion>
                            <div className="d-grid gap-2 ">
                                <ButtonStyled
                                    buttonType="outline"
                                    onClick={() => addTestcase(questionIdx, setQuestions)}
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
                <ButtonStyled buttonType="dashed" onClick={() => addBEQuestion(setQuestions)}>
                    + Add questions
                </ButtonStyled>
            </div>
        </>
    );
};

export default CreateBEQuestions;
