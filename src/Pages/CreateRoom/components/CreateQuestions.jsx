import React, { useState } from 'react';

import { Formik } from 'formik';
import * as yup from 'yup';

import localFilesAPI from '../../../utils/api/localFilesAPI';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

const schema = yup.object().shape({
    questionImage: yup.array().required(),
    maxSubmitTimes: yup.number().required(),
    input: yup.string().required(),
    output: yup.string().required(),
});

const CreateQuestions = ({ show, handleClose, setQuestions: setOuterQuestions }) => {
    const [questions, setQuestions] = useState([]);
    const [testcases, setTestcases] = useState([]);
    console.log('questions', questions);

    const FORM_LIST = [
        {
            label: 'questionImage',
            name: 'questionImage',
            type: Form.Control,
            inputType: 'file',
            multiple: true,
            handleChange: true,
        },
        {
            label: 'maxSubmitTimes',
            name: 'maxSubmitTimes',
            type: Form.Control,
            inputType: 'number',
        },
        {
            label: 'input',
            name: 'input',
            type: Form.Control,
            as: 'textarea',
        },
        {
            label: 'output',
            name: 'output',
            type: Form.Control,
            as: 'textarea',
        },
    ];

    const createTestcase = (setFieldValue, values) => {
        setTestcases((prev) => [...prev, { input: values.input, output: values.output }]);
        setFieldValue('input', '');
        setFieldValue('output', '');
    };

    const handleSubmit = (values) => {
        // values.setFieldValue('questionImage', Array.from(event.target.files));
        setTestcases([]);
        localFilesAPI.uploadQuestionFile(values.questionImage).then((res) => {
            let newQuestions = values;
            delete newQuestions.input;
            delete newQuestions.output;
            newQuestions = { ...newQuestions, testcases };
            setQuestions((prev) => [...prev, newQuestions]);
        });
    };

    const handleClosePopup = () => {
        handleClose();
        setOuterQuestions(questions);
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create questions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    validationSchema={schema}
                    onSubmit={handleSubmit}
                    initialValues={{
                        questionImage: [],
                        maxSubmitTimes: '',
                        input: '',
                        output: '',
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
                                            isValid={touched[item.name] && !errors[item.name]}
                                            as={item.as}
                                            multiple={item.multiple}
                                        >
                                            {item.children}
                                        </item.type>
                                        {/* <Form.Control.Feedback tooltip>Looks good</Form.Control.Feedback> */}
                                    </Form.Group>
                                ))}
                            </Row>
                            <Button
                                variant="outline-primary"
                                onClick={() => createTestcase(setFieldValue, values)}
                            >
                                {' '}
                                Create next testcase
                            </Button>{' '}
                            <Button type="submit">Create next question</Button>
                            {questions.map((question, i) => (
                                <p key={i}>
                                    Question {i + 1}: {question.testcases.length} testcases
                                </p>
                            ))}
                            <p>
                                Question {questions.length + 1}: {testcases.length} testcases
                            </p>
                        </Form>
                    )}
                </Formik>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClosePopup}>
                    Finish create
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateQuestions;
