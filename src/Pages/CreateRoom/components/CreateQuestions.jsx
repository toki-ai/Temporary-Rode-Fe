import React, { useState } from 'react';

import { Formik } from 'formik';
import * as yup from 'yup';

import localFilesAPI from '../../../utils/api/localFilesAPI';
import * as St from '../styles';
import Testcase from './Testcase';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

/** Rule to add new input:
 *  1. Add into 'schema' object
 *  2. Add into FORM_LIST
 *  3. Add into 'initialValues' attribute of <Formik  /> tag
 *  */

const schema = yup.object().shape({
    questionImage: yup.array().required(),
    maxSubmitTimes: yup.number().required(),
});

const CreateQuestions = ({ setQuestions: setOuterQuestions }) => {
    const [questions, setQuestions] = useState([
        {
            maxSubmitTimes: 0,
            questionImage: '',
            testcases: [{ input: '', output: '' }],
        },
    ]);

    console.log(questions);

    const FORM_LIST = [
        {
            label: 'Maximum Submit Time:',
            name: 'maxSubmitTimes',
            type: Form.Control,
            inputType: 'number',
        },
        {
            label: 'Image',
            name: 'questionImage',
            type: Form.Control,
            inputType: 'file',
            multiple: true,
            handleChange: true,
        },
    ];

    const createQuestion = () => {
        setQuestions((prev) => [
            ...prev,
            {
                maxSubmitTimes: 0,
                questionImage: '',
                testcases: [],
            },
        ]);
    };

    const createTestcase = (questionIdx) => {
        setQuestions((prev) => {
            const { testcases, ...rest } = prev[questionIdx]; // destructure testcases array and the rest of the question object
            const newTestcases = [...testcases, { input: '', output: '' }]; // add a new testcase to the testcases array
            const updatedQuestion = { ...rest, testcases: newTestcases }; // create a new object with updated testcases array
            const updatedQuestions = [
                ...prev.slice(0, questionIdx),
                updatedQuestion,
                ...prev.slice(questionIdx + 1),
            ]; // replace the old question object with the updated one
            return updatedQuestions;
        });
    };

    const editInputTestcase = (value, questionIdx, testcaseIdx) => {
        setQuestions((prev) => {
            let copy = [...prev];
            copy[questionIdx].testcases[testcaseIdx].input = value;
            return copy;
        });
    };

    const editOutputTestcase = (value, questionIdx, testcaseIdx) => {
        setQuestions((prev) => {
            let copy = [...prev];
            copy[questionIdx].testcases[testcaseIdx].output = value;
            return copy;
        });
    };

    const handleSubmit = (values) => {
        // values.setFieldValue('questionImage', Array.from(event.target.files));
        // setTestcases([]);
        localFilesAPI.uploadQuestionFile(values.questionImage).then((res) => {
            let newQuestions = values;
            delete newQuestions.input;
            delete newQuestions.output;
            newQuestions = { ...newQuestions, testcases: [] };
            setQuestions((prev) => [...prev, newQuestions]);
        });
    };

    const handleDone = () => {
        setOuterQuestions(questions);
    };

    return (
        <>
            {questions.map((question, questionIdx) => (
                <St.Questions>
                    <St.QuestionTitle>Question {questionIdx + 1}</St.QuestionTitle>

                    <div className="row">
                        <div className="col-md-6">
                            <Formik
                                validationSchema={schema}
                                onSubmit={handleSubmit}
                                initialValues={{
                                    questionImage: [],
                                    maxSubmitTimes: '',
                                }}
                            >
                                {({
                                    handleSubmit,
                                    handleChange,
                                    handleBlur,
                                    values,
                                    touched,
                                    isValid,
                                    errors,
                                    setFieldValue,
                                }) => (
                                    <Form noValidate onSubmit={handleSubmit}>
                                        <Row className="mb-3">
                                            {FORM_LIST.map((item) => (
                                                <Form.Group
                                                    controlId="validationFormik101"
                                                    className="position-relative"
                                                    key={item.name}
                                                >
                                                    <Form.Label>{item.label}</Form.Label>
                                                    <item.type
                                                        type={item.inputType || 'text'}
                                                        name={item.name}
                                                        value={
                                                            item.name === 'questionImage'
                                                                ? undefined
                                                                : values[item.name]
                                                        }
                                                        onChange={
                                                            item.handleChange
                                                                ? (e) => {
                                                                      setFieldValue(
                                                                          'questionImage',
                                                                          Array.from(e.target.files)
                                                                      );
                                                                  }
                                                                : handleChange
                                                        }
                                                        isValid={
                                                            touched[item.name] && !errors[item.name]
                                                        }
                                                        as={item.as}
                                                        multiple={item.multiple}
                                                    >
                                                        {item.children}
                                                    </item.type>
                                                    {/* <Form.Control.Feedback tooltip>Looks good</Form.Control.Feedback> */}
                                                </Form.Group>
                                            ))}
                                        </Row>
                                        {/* <Button
                                            variant="outline-primary"
                                            onClick={() => createTestcase(setFieldValue, values)}
                                        >
                                            Create next testcase
                                        </Button> */}
                                    </Form>
                                )}
                            </Formik>
                        </div>

                        <div className="col-md-6">
                            {question.testcases.map((testcase, testcaseIdx) => (
                                <Testcase
                                    item={testcase}
                                    index={testcaseIdx}
                                    handleInput={editInputTestcase}
                                    handleOutput={editOutputTestcase}
                                />
                            ))}
                            <div className="d-grid gap-2 my-4">
                                <Button
                                    variant="outline-primary"
                                    onClick={() => createTestcase(questionIdx)}
                                >
                                    Add testcase
                                </Button>
                            </div>
                        </div>
                    </div>
                </St.Questions>
            ))}

            <div className="d-grid gap-2 my-4">
                <Button variant="outline-primary" onClick={createQuestion}>
                    Add questions
                </Button>
            </div>
            <div>
                <Button variant="secondary">Cancel</Button>{' '}
                <Button onClick={handleDone}>Create</Button>
            </div>
        </>
    );
};

export default CreateQuestions;
