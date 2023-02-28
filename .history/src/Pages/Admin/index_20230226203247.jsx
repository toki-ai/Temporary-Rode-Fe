import { Field, Formik } from 'formik';
import * as yup from 'yup';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const schema = yup.object().shape({
    code: yup.string().required(),
    question: yup.string().required(),
    openTime: yup.string().required(),
    closeTime: yup.string().required(),
    duration: yup.string().required(),
    colors: yup.string().required(),
    type: yup.mixed().required(),
    maxSubmitTimes: yup.bool().required().oneOf([true], 'terms must be accepted'),
});

const Admin = () => {
    const FORM_LIST = [
        {
            label: 'Code',
            name: 'code',
        },
        {
            label: 'Question',
            name: 'question',
        },
        {
            label: 'Open Time',
            name: 'openTime',
        },
        {
            label: 'Close time',
            name: 'closeTime',
        },
        {
            label: 'Duration',
            name: 'duration',
        },
        {
            label: 'Colors',
            name: 'colors',
        },
        {
            label: 'Type',
            name: 'type',
        },
        {
            label: 'Max Submit Times',
            name: 'maxSubmitTimes',
        },
    ];
    return (
        <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
                code: 'Mark',
                question: 'Otto',
                username: '',
                city: '',
                state: '',
                zip: '',
                file: null,
                terms: false,
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
                            >
                                <Form.Label>{item.label}</Form.Label>
                                <Form.Control
                                    type="text"
                                    name={item.name}
                                    value={values[item.name]}
                                    onChange={handleChange}
                                    isValid={touched[item.name] && !errors[item.name]}
                                />
                                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        ))}
                        <Field label="Job Type" name="jobType" component="select" as={Col} md="4">
                            <option value="">Select a job type</option>
                            <option value="designer">Designer</option>
                            <option value="development">Developer</option>
                            <option value="product">Product Manager</option>
                            <option value="other">Other</option>
                        </Field>
                    </Row>
                    <Button type="submit">Submit form</Button>
                </Form>
            )}
        </Formik>
    );
};

export default Admin;
