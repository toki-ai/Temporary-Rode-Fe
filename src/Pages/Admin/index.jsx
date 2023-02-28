import { useState } from 'react';

import { Formik } from 'formik';
import * as yup from 'yup';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const schema = yup.object().shape({
    code: yup.string().required(),
    question: yup.string().required(),
    openTime: yup.date().required(),
    closeTime: yup.date().required(),
    duration: yup.number().required(),
    colors: yup.array().required(),
    roomType: yup.string().required(),
    maxSubmitTimes: yup.number().max(100).required(),
});

const Admin = () => {
    const ROOM_TYPE_ENUM = ['Easy', 'Normar', 'Hard'];
    const [roomType, setRoomType] = useState(ROOM_TYPE_ENUM);

    const FORM_LIST = [
        {
            label: 'Code',
            name: 'code',
            type: Form.Control,
        },
        {
            label: 'Question',
            name: 'question',
            type: Form.Control,
        },
        {
            label: 'Open Time',
            name: 'openTime',
            type: Form.Control,
        },
        {
            label: 'Close time',
            name: 'closeTime',
            type: Form.Control,
        },
        {
            label: 'Duration',
            name: 'duration',
            type: Form.Control,
        },
        {
            label: 'Colors',
            name: 'colors',
            type: Form.Control,
        },
        {
            label: 'Room Type',
            name: 'roomType',
            type: Form.Select,
            children: roomType.map((item) => (
                <option value={item} key={item}>
                    {item}
                </option>
            )),
        },
        {
            label: 'Max Submit Times',
            name: 'maxSubmitTimes',
            type: Form.Control,
        },
    ];
    return (
        <Formik
            validationSchema={schema}
            onSubmit={(e) => console.log(e)}
            initialValues={{
                code: 'Mark',
                question: 'Otto',
                openTime: '',
                closeTime: '',
                duration: '',
                colors: '',
                roomType: '',
                maxSubmitTimes: '',
            }}
        >
            {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        {FORM_LIST.map((item) => (
                            <Form.Group
                                as={Col}
                                md="4"
                                controlId="validationFormik101"
                                className="position-relative"
                                key={item.name}
                            >
                                <Form.Label>{item.label}</Form.Label>
                                <item.type
                                    type="text"
                                    name={item.name}
                                    value={values[item.name]}
                                    onChange={handleChange}
                                    isValid={touched[item.name] && !errors[item.name]}
                                >
                                    {item.children}
                                </item.type>
                                <Form.Control.Feedback tooltip>Looks good</Form.Control.Feedback>
                            </Form.Group>
                        ))}
                    </Row>
                    <Button type="submit">Submit form</Button>
                </Form>
            )}
        </Formik>
    );
};

export default Admin;
