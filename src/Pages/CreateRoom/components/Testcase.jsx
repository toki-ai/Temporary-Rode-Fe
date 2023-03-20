import React from 'react';

import * as St from '../styles';

const Testcase = ({ index, handleInput, handleOutput }) => {
    return (
        <St.Testcase className="row">
            <h1 className="fw-semibold fs-5">Testcase {index + 1}:</h1>
            <div className="col-6">
                <label htmlFor="input">Input</label>
                <textarea
                    name="input"
                    id="input"
                    cols="10"
                    rows="5"
                    onChange={(e) => handleInput(e.target.value, questionIdx, testcaseIdx)}
                ></textarea>
            </div>
            <div className="col-6">
                <label htmlFor="output">Output</label>
                <textarea
                    name="output"
                    id="output"
                    cols="10"
                    rows="5"
                    onChange={(e) => handleOutput(e.target.value, questionIdx, testcaseIdx)}
                ></textarea>
            </div>
        </St.Testcase>
    );
};

export default Testcase;
