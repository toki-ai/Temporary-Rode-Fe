import * as Yup from 'yup';

export const SchemaRegister = Yup.object().shape({
    email: Yup.string()
        .required('Email cannot be empty')
        .matches(/^[\w-]+@fpt.edu.vn$/, 'Your email must be FPT mail'),
    fname: Yup.string().required('First name can`t be empty'),
    lname: Yup.string().required('Last name can`t be empty'),
    studentId: Yup.string()
        .required('StudentId can`t be empty')
        .matches(/^(S|s)[E|A|S|s|e|a]+([0-9]{6})$/, 'Wrong student id'),
    phone: Yup.string()
        .required('Phone number can`t be empty')
        .matches(/^(01|03|05|07|08|09)+([0-9]{8})\b/, 'Incorrect format for phone number'),
    dob: Yup.date().required('Date is required').max(new Date(), 'Date cannot be in the future'),
    // terms: Yup.bool().required().oneOf([true], 'Terms must be accepted'),
});
