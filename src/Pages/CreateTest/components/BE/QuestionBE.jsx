import React from 'react';
import { Col, Row } from 'react-bootstrap';

const QuestionBE = ({ question, index, onSubmitTimeChange, onTestcaseChange, onImageChange, onAddTestcase}) => {
    
    const handleTestcaseChange = (testcaseIndex, field, value) => {
        onTestcaseChange(index, testcaseIndex, field, value);
    };

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
                    <Col>
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
                    <Col>
                        {question.testcases.map((testcase, testcaseIndex) => (
                            <div key={testcaseIndex}>
                                <input
                                    type="text"
                                    value={testcase.input}
                                    onChange={(e) => handleTestcaseChange(testcaseIndex, 'input', e.target.value)}
                                    placeholder="Enter input"
                                />
                                <input
                                    type="text"
                                    value={testcase.output}
                                    onChange={(e) => handleTestcaseChange(testcaseIndex, 'output', e.target.value)}
                                    placeholder="Enter output"
                                />
                                <label>
                                    Hidden:
                                    <input
                                    type="checkbox"
                                    checked={testcase.isHidden}
                                    onChange={(e) => handleTestcaseChange(testcaseIndex, 'isHidden', e.target.checked)}
                                    />
                                </label>
                            </div>
                        ))}
                        <button onClick={() => onAddTestcase(index)}>Add New Testcase</button>
                    </Col>
                </Row>
            </Col>
        </>
    );
};

export default QuestionBE;
