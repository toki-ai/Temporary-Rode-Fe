import React from 'react';

import * as St from '../styles';

const Testcase = ({ testcaseIdx, questionIdx, handleInput, handleOutput, setQuestions }) => {
    return (
        <St.Testcase className="row">
            <h3 className="fw-semibold fs-6">Testcase {testcaseIdx + 1}:</h3>
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
            <hr className="my-3" />
        </St.Testcase>
    );
};

export default Testcase;
