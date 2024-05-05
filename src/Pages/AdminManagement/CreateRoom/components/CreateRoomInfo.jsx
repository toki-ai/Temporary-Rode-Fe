import { useState } from 'react';

import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { FORM_LIST_PUBLIC_ROOM, FORM_LIST_PRIVATE_ROOM } from './utils';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

/** Rules to add new input:
 *  1. Add into 'schema' object
 *  2. Add into FORM_LIST
 *  3. Add into 'initialValues' attribute of <Formik  /> tag
 *  */

const schema = yup.object().shape({
    code: yup.string().required(),
    openTime: yup.date().required(),
    closeTime: yup.date().required(),
    duration: yup.number().required(),
    type: yup.string().required(),
    isPrivate: yup.boolean().required(),
});

const CreateRoomInfo = ({ roomInfo, setRoomInfo, errs }) => {
    const [formList, setFormList] = useState(FORM_LIST_PUBLIC_ROOM);

    return (
        <Formik validationSchema={schema} initialValues={roomInfo}>
            {({ values, handleChange, touched, errors }) => (
                <Form noValidate>
                    <Row className="mb-3">
                        {formList.map((item) => {
                            return (
                                <Form.Group
                                    as={Col}
                                    md="6"
                                    controlId="validationFormik101"
                                    className="position-relative"
                                    key={item.name}
                                >
                                    <Form.Label>{item.label}</Form.Label>
                                    <item.type
                                        type={item.inputType || 'text'}
                                        name={item.name}
                                        value={values[item.name]}
                                        onChange={(e) => {
                                            handleChange(e);
                                            const isPrivate =
                                                item.name === 'isPrivate'
                                                    ? e.target.value === 'true'
                                                    : values.isPrivate === 'true';
                                            setFormList(
                                                isPrivate
                                                    ? FORM_LIST_PRIVATE_ROOM
                                                    : FORM_LIST_PUBLIC_ROOM
                                            );
                                            const duration = Number.parseInt(
                                                item.name === 'duration'
                                                    ? e.target.value
                                                    : values.duration
                                            );
                                            const closeTime =
                                                item.name === 'closeTime'
                                                    ? e.target.value
                                                    : values.closeTime;
                                            let newRoomInfo = {
                                                ...values,
                                                [item.name]: e.target.value,
                                                isPrivate,
                                                duration: isPrivate ? duration : 0,
                                                closeTime: isPrivate ? closeTime : '',
                                            };
                                            if (!isPrivate) {
                                                delete newRoomInfo['duration'];
                                                delete newRoomInfo['closeTime'];
                                            }
                                            setRoomInfo(newRoomInfo);
                                        }}
                                        isValid={touched[item.name] && !errors[item.name]}
                                    >
                                        {item.children}
                                    </item.type>

                                    {errs.map((err) => {
                                        if (err.at === item.name)
                                            return <h6 className="text-danger">{err.message}</h6>;
                                    })}
                                </Form.Group>
                            );
                        })}
                    </Row>
                </Form>
            )}
        </Formik>
    );
};

export default CreateRoomInfo;
