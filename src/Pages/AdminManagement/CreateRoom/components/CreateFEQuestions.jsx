import { useState } from 'react';

import ButtonStyled from '../../../../components/Button';
import * as St from '../styles';
import AddColor from './AddColor';
import CodeTemplate from './CodeTemplate';
import MaxSumbitTimes from './MaxSumbitTimes';
import UploadImage from './UploadImage';
import { addFEQuestion } from './utils';

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
                            <AddColor
                                questionIdx={questionIdx}
                                setQuestions={setQuestions}
                                question={question}
                            />
                        </div>

                        <div className="col-md-6">
                            <CodeTemplate questionIdx={questionIdx} setQuestions={setQuestions} />
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
