import { useContext, useState } from 'react';

import { Formik } from 'formik';

import { UserContext } from '../../Context/User.context';
import FormControl from '../../components/Formik/FormControl';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Register() {
    const { credential } = useContext(UserContext);
    const [validated, setValidated] = useState(false);
    return (
        <Formik
            // validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
                fname: 'Mark',
                lname: 'Otto',
                studentId: '',
                phone: '',
                dob: '',
                terms: false,
            }}
        >
            {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    {/* First Name */}
                    <FormControl
                        control="input"
                        type="text"
                        placeholder="Please enter your first name..."
                        label="First Name"
                        controlId="fname"
                    />
                    {/* Last Name */}
                    <FormControl
                        control="input"
                        type="text"
                        placeholder="Please enter your last name..."
                        label="Last Name"
                        controlId="lname"
                    />
                    {/* Student ID */}
                    <FormControl
                        control="input"
                        type="text"
                        placeholder="Please enter your Student ID..."
                        label="Student ID"
                        controlId="StudentID"
                    />
                    {/* Phone */}
                    <FormControl
                        control="input"
                        type="number"
                        placeholder="Your phone number"
                        label="Phone Number"
                        controlId="phone"
                    />
                    {/* Dob */}
                    <FormControl
                        control="input"
                        type="date"
                        placeholder="Your phone number"
                        label="Date of Birth"
                        controlId="phone"
                    />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    );
}

export default Register;
