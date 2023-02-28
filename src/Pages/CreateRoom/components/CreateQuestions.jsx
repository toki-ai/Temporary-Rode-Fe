import React, { useEffect, useState } from 'react';

import { Formik } from 'formik';
import * as yup from 'yup';

import roomAPI from '../../../utils/api/roomAPI';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

const schema = yup.object().shape({
    questionImage: yup.string().required(),
    maxSubmitTimes: yup.date().required(),
    input: yup.date().required(),
    output: yup.number().required(),
});

const CreateQuestions = ({ show, handleClose }) => {
    const [roomType, setRoomType] = useState([]);

    useEffect(() => {
        roomAPI.getAllRoomType().then((res) => setRoomType(res.data.data));
    }, []);

    const FORM_LIST = [
        {
            label: 'questionImage',
            name: 'questionImage',
            type: Form.Control,
            inputType: 'file',
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

            // children: roomType.map((item) => (
            //     <option value={item} key={item}>
            //         {item}
            //     </option>
            // )),
        },
    ];

    const handleSubmit = async (values) => {
        setRoomInfo(values);
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
                        questionImage: '',
                        maxSubmitTimes: '',
                        input: '',
                        output: '',
                        type: '',
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
                                            value={values[item.name]}
                                            onChange={handleChange}
                                            isValid={touched[item.name] && !errors[item.name]}
                                            as={item.as}
                                        >
                                            {item.children}
                                        </item.type>
                                        {/* <Form.Control.Feedback tooltip>Looks good</Form.Control.Feedback> */}
                                    </Form.Group>
                                ))}
                            </Row>
                            <Button type="submit">Submit form</Button>
                        </Form>
                    )}
                </Formik>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateQuestions;
