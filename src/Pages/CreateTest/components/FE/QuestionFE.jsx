import React from 'react';
import { Col, Row } from 'react-bootstrap';

const QuestionFE = ({ question, index, onSubmitTimeChange, onImageChange}) => {

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        onImageChange(index, file);
    };

    const handleSubmitTimeChange = (e) => {
        onSubmitTimeChange(index, e.target.value);
    };

    return (
        <>
            <Col>
                <Row>
                    <h4>Question {index + 1}</h4>
                </Row>
                <Row>
                    <input type="number" onChange={handleSubmitTimeChange} value={question.submitTime || '1'} />
                </Row>
                <Row>
                    <input type="file" onChange={handleImageChange} />
                    {question.img && (
                    <div>
                        <img src={URL.createObjectURL(question.img)} 
                            alt="Uploaded" 
                            style={{ maxWidth: '200px', maxHeight: '200px' }} />

                        <button onClick={() => onImageChange(index, null)}>Remove Image</button>
                    </div>
                    )}       
                </Row>
            </Col>
        </>
    );
};

export default QuestionFE;
