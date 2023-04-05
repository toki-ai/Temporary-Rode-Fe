import { useEffect, useState } from 'react';

import { Formik } from 'formik';
import * as yup from 'yup';

import roomAPI from '../../../utils/api/roomAPI';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

/** Rule to add new input:
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

const CreateRoomInfo = ({ setRoomInfo }) => {
    const [roomType, setRoomType] = useState(['FE', 'BE']);

    useEffect(() => {
        roomAPI.getAllRoomType().then((res) => setRoomType(res.data.data));
    }, []);

    const FORM_LIST_PUBLIC_ROOM = [
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

    const FORM_LIST_PRIVATE_ROOM = [
        ...FORM_LIST_PUBLIC_ROOM,
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
    ];

    const [formList, setFormList] = useState(FORM_LIST_PUBLIC_ROOM);

    return (
        <Formik
            validationSchema={schema}
            initialValues={{
                code: '',
                openTime: '',
                closeTime: '',
                duration: '',
                type: '',
                isPrivate: '',
            }}
        >
            {({ values, handleChange, touched, errors }) => (
                <Form noValidate>
                    <Row className="mb-3">
                        {formList.map((item) => (
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
                                        if (e.target.value === 'true') {
                                            setFormList(FORM_LIST_PRIVATE_ROOM);
                                            setRoomInfo({
                                                ...values,
                                                isPrivate: e.target.value === 'true',
                                            });
                                        } else if (e.target.value === 'false') {
                                            setFormList(FORM_LIST_PUBLIC_ROOM);
                                            setRoomInfo({
                                                ...values,
                                                isPrivate: e.target.value === 'false',
                                            });
                                        }
                                        setRoomInfo({
                                            ...values,
                                            [item.name]: e.target.value,
                                        });
                                    }}
                                    isValid={touched[item.name] && !errors[item.name]}
                                >
                                    {item.children}
                                </item.type>
                                {/* <Form.Control.Feedback tooltip>Looks good</Form.Control.Feedback> */}
                            </Form.Group>
                        ))}
                    </Row>
                </Form>
            )}
        </Formik>
    );
};

export default CreateRoomInfo;
