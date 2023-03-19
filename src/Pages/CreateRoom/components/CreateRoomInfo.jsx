import { useEffect, useState } from 'react';

import { Formik } from 'formik';
import * as yup from 'yup';

import roomAPI from '../../../utils/api/roomAPI';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const schema = yup.object().shape({
    code: yup.string().required(),
    openTime: yup.date().required(),
    closeTime: yup.date().required(),
    duration: yup.number().required(),
    type: yup.string().required(),
    isPrivate: yup.boolean(),
});

const CreateRoomInfo = ({ setRoomInfo }) => {
    const [roomType, setRoomType] = useState([]);

    useEffect(() => {
        roomAPI.getAllRoomType().then((res) => setRoomType(res.data.data));
    }, []);

    const FORM_LIST = [
        {
            label: 'Room Code',
            name: 'code',
            type: Form.Control,
        },
        {
            label: 'Room Type',
            name: 'type',
            type: Form.Select,
            children: (
                <>
                    <option value="" disabled>
                        Select room type
                    </option>
                    {roomType.map((item) => (
                        <option value={item} key={item}>
                            {item}
                        </option>
                    ))}
                </>
            ),
        },
        {
            label: 'Open Time',
            name: 'openTime',
            type: Form.Control,
            inputType: 'datetime-local',
        },
        {
            label: 'Close Time',
            name: 'closeTime',
            type: Form.Control,
            inputType: 'datetime-local',
        },
        {
            label: 'Duration',
            name: 'duration',
            type: Form.Control,
            inputType: 'number',
        },
        {
            label: 'Visibility',
            name: 'isPrivate',
            type: Form.Select,
            children: (
                <>
                    <option value="" disabled>
                        Select visibility
                    </option>
                    <option value="true">Private</option>
                    <option value="false">Public</option>
                </>
            ),
        },
    ];

    const handleSubmit = async (values) => {
        setRoomInfo(values);
    };

    return (
        <Formik
            validationSchema={schema}
            onSubmit={handleSubmit}
            initialValues={{
                code: '',
                openTime: '',
                closeTime: '',
                duration: '',
                type: '',
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
                                    type={item.inputType || 'text'}
                                    name={item.name}
                                    value={values[item.name]}
                                    onChange={handleChange}
                                    isValid={touched[item.name] && !errors[item.name]}
                                >
                                    {item.children}
                                </item.type>
                                {/* <Form.Control.Feedback tooltip>Looks good</Form.Control.Feedback> */}
                            </Form.Group>
                        ))}
                    </Row>
                    <Button type="submit">Create question</Button>
                </Form>
            )}
        </Formik>
    );
};

export default CreateRoomInfo;
