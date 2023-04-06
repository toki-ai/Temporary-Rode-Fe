import React from 'react';
import { useState, useEffect } from 'react';

import { Formik } from 'formik';
import { Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';

import Loading from '../../../components/Loading';
import roomApi from '../../../utils/api/roomApi.js';
import DateFormat from '../AdminRoom/components/FilterRoom/DateFormat';
import ButtonCustom from './components/Button';
import CreateQuestion from './components/CreateQuestion';
import DateTimePickerValue from './components/DateTimePicker';
import { RoomEditStyle } from './style';

const schema = yup.object().shape({
    openTime: yup.string().required('Please enter open time'),
    duration: yup.string().required('Please enter duration'),
});

const AdminRoomEdit = () => {
    const { id } = useParams();
    const roomId = id;
    const [room, setRoom] = useState({});
    const [roomTypes, setRoomTypes] = useState([]);
    const [load, setLoad] = useState([]);
    const [questions, setQuestions] = useState([]);

    console.log(id);
    useEffect(() => {
        roomApi.getRoomById(roomId).then((res) => {
            setRoom(res.data.data);
            console.log(res.data.data);
            setQuestions(res.data.data.questions);
            console.log(res.data.data.questions);
            setLoad(false);
        });

        roomApi
            .getAllRomType()
            .then((res) => {
                console.log(res.data.data);
                setRoomTypes(res.data.data);
                setLoad(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const checkPrivate = room.isPrivate ? 'Private' : 'Public';
    const checkPrivate2 = room.isPrivate ? 'Public' : 'Private';

    const [questionsResults, setQuestionsResults] = useState([...questions]);
    const [numOfQues, setNumOfQues] = useState(questions.length);
    const defaultQuestion = {
        questionImage: '',
        maxSubmitTimes: 1,
        colors: '',
        codeTemplate: '',
        id: '',
        testCases: [
            {
                input: '',
                output: '',
            },
        ],
    };
    console.log(questions.length);
    const handleAddQuestion = (e) => {
        questions.push(defaultQuestion);
        setNumOfQues(questions.length + 1);
        console.log(questions.length);
    };
    return load ? (
        <Loading />
    ) : (
        <RoomEditStyle>
            <div className="box-style p-4">
                <Formik
                    validationSchema={schema}
                    initialValues={{
                        code: room.code,
                        type: room.type,
                        duration: room.isPrivate ? room.duration : '',
                        openTime: room.openTime,
                        closeTime: room.isPrivate ? room.closeTime : '',
                        visibility: checkPrivate,
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
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="code">
                                    <Form.Label className="fw-bold">Room Code</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="code"
                                        value={values.code}
                                        onChange={handleChange}
                                        isInvalid={!!errors.code}
                                        disabled
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.code}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="type">
                                    <Form.Label className="fw-bold">Room Type</Form.Label>
                                    <Form.Select
                                        type="text"
                                        name="type"
                                        onChange={handleChange}
                                        isInvalid={!!errors.type}
                                        disabled
                                    >
                                        {roomTypes.map((item, i) => {
                                            return <option key={i}>{item}</option>;
                                        })}
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.type}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="openTime">
                                    <Form.Label className="fw-bold">Open Time</Form.Label>
                                    <DateTimePickerValue dayApi={room.openTime} />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.openTime}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="closeTime">
                                    <Form.Label className="fw-bold">Close Time</Form.Label>
                                    {values.visibility == 'Public' ? (
                                        <Form.Control
                                            type="text"
                                            name="closeTime"
                                            value=""
                                            onChange={handleChange}
                                            isValid={touched.closeTime && !errors.closeTime}
                                            isInvalid={!!errors.closeTime}
                                            style={{ marginTop: '10px' }}
                                            disabled
                                        />
                                    ) : (
                                        <DateTimePickerValue dayApi={room.closeTime} />
                                    )}
                                    <Form.Control.Feedback type="invalid">
                                        {errors.closeTime}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-4">
                                <Form.Group as={Col} controlId="duration">
                                    <Form.Label className="fw-bold">Duration</Form.Label>
                                    <Form.Control
                                        type=""
                                        name="duration"
                                        value={values.duration}
                                        onChange={handleChange}
                                        isValid={touched.duration && !errors.duration}
                                        isInvalid={!!errors.duration}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.duration}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="visibility">
                                    <Form.Label className="fw-bold">Visibility</Form.Label>
                                    <Form.Select
                                        type="text"
                                        name="visibility"
                                        onChange={handleChange}
                                        isValid={touched.visibility && !errors.visibility}
                                        isInvalid={!!errors.visibility}
                                    >
                                        <option>{checkPrivate}</option>
                                        <option>{checkPrivate2}</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.visibility}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row>
                                {[...Array(questions.length)].map((_, i) => (
                                    <>
                                        <CreateQuestion
                                            key={i}
                                            i={i}
                                            questionNum={questions?.length ? i + 1 : 1}
                                            maxSubmitTime={
                                                questions?.length ? questions[i].maxSubmitTimes : 1
                                            }
                                            questionImages={
                                                questions?.length ? questions[i].questionImage : ''
                                            }
                                            question={questions}
                                        />
                                    </>
                                ))}
                            </Row>

                            <ButtonCustom
                                variant="light border-dashed w-100"
                                name="Add question"
                                className="bi bi-plus d-flex align-items-center fs-4"
                                onClick={handleAddQuestion}
                            />
                            <div className="d-flex justify-content-end mt-4">
                                <ButtonCustom
                                    variant="grey mx-4 width"
                                    name="Cancel"
                                    className="d-flex align-items-center fs-4"
                                    href="/admin/room"
                                />
                                <ButtonCustom
                                    variant="green width"
                                    name="Save"
                                    className="d-flex align-items-center fs-4"
                                />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </RoomEditStyle>
    );
};

export default AdminRoomEdit;
