import React from 'react';

import { Accordion } from 'react-bootstrap';

import * as St from '../styles';

const Testcase = ({ testcaseIdx, questionIdx, handleInput, handleOutput, setQuestions }) => {
    return (
        <Accordion.Item eventKey={testcaseIdx}>
            <Accordion.Header>Testcase {testcaseIdx + 1}</Accordion.Header>
            <Accordion.Body>
                <St.Testcase className="row">
                    <h3 className="fw-semibold fs-6"></h3>
                    <div className="col-6">
                        <label htmlFor="input">Input</label>
                        <textarea
                            name="input"
                            id="input"
                            cols="20"
                            rows="7"
                            onChange={(e) =>
                                handleInput(e.target.value, questionIdx, testcaseIdx, setQuestions)
                            }
                        ></textarea>
                    </div>
                    <div className="col-6">
                        <label htmlFor="output">Output</label>
                        <textarea
                            name="output"
                            id="output"
                            cols="20"
                            rows="7"
                            onChange={(e) =>
                                handleOutput(e.target.value, questionIdx, testcaseIdx, setQuestions)
                            }
                        ></textarea>
                    </div>
                </St.Testcase>
            </Accordion.Body>
        </Accordion.Item>
    );
};

export default Testcase;
