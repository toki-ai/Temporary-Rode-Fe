import * as Yup from 'yup';

export const SchemaRegister = Yup.object().shape({
    email: Yup.string().required('Email Cannot be empty'),
    fname: Yup.string().required('First name cannot be empty'),
    lname: Yup.string().required('Last name cannot be empty'),
    studentId: Yup.string().required('Student Id cannot be empty'),
    phone: Yup.string().required('Phone Number cannot be empty'),
    dob: Yup.string().required('Date of Birth cannot be empty'),
    // terms: Yup.bool().required().oneOf([true], 'Terms must be accepted'),
});
