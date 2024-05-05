import React from 'react';

import { Accordion } from 'react-bootstrap';

import * as St from '../styles';
import {
    editInputTestcase as handleInput,
    editOutputTestcase as handleOutput,
    deleteTestcase,
} from './utils';

const Testcase = ({ testcaseIdx, questionIdx, setQuestions, error }) => {
    const handleDelete = () => {
        deleteTestcase(questionIdx, testcaseIdx, setQuestions);
    };

    return (
        <Accordion.Item eventKey={testcaseIdx}>
            <Accordion.Header>Testcase {testcaseIdx + 1}</Accordion.Header>
            <Accordion.Body>
                <St.Testcase className="row">
                    {/* <button onClick={handleDelete}>Delete</button> */}
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
            <h6 className="text-danger">{error}</h6>
        </Accordion.Item>
    );
};

export default Testcase;
