import React, { useRef } from 'react';
import { useState, useEffect } from 'react';

import { Formik } from 'formik';
import { Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';

import Loading from '../../../../components/Loading';
import localFileApi from '../../../../utils/api/localFileApi';
import roomApi from '../../../../utils/api/roomApi.js';
import DateFormat from '../../AdminRoom/components/FilterRoom/DateFormat';
import { RoomEditStyle } from '../style';
import ButtonCustom from './Button';
import CreateQuestion from './CreateQuestion';
import DateTimePickerValue from './DateTimePicker';

const schema = yup.object().shape({
    openTime: yup.string().required('Please enter open time'),
    duration: yup
        .number('Please enter number')
        .required('Please enter duration')
        .positive('Duration must be greater than 1'),
    formFile: yup.string().required('Please choose file'),
    input: yup.string().required('Please enter input'),
    output: yup.string().required('Please enter output'),
    codeTemplate: yup.string().required('Please enter code template'),
    colorPicker: yup.string().required('Please enter color'),
});

const FormEdit = ({ setRoom: setRoomInfo }) => {
    const { id } = useParams();
    const roomId = id;
    const [room, setRoom] = useState({});
    const [roomTypes, setRoomTypes] = useState([]);
    const [load, setLoad] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [newQuestions, setNewQuestions] = useState([]);
    const [openTime, setOpenTime] = useState('');
    const [closeTime, setCloseTime] = useState('');
    const [duration, setDuration] = useState(1);
    const formRef = useRef();
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
    function handleRemoveQuestion() {
        questions.pop(defaultQuestion);
        setNumOfQues(questions.length - 1);
        console.log(questions.length);
        console.log(questions);
    }
    useEffect(() => {
        let newRoom = room;
        newRoom.openTime = openTime != '' ? openTime : room.openTime;
        newRoom.closeTime = closeTime != '' ? closeTime : room.closeTime;
        let newDuration = formRef;
        newDuration = formRef.current
            ? parseInt(formRef.current.values.duration)
            : parseInt(room.duration);
        console.log(newDuration);
        room.isPrivate ? (newRoom.duration = parseInt(newDuration)) : (newRoom.duration = null);
        console.log(duration);
        newRoom.questions = newQuestions.slice();
        console.log(newQuestions);
        console.log(newRoom);

        setRoomInfo(newRoom);
    }, [formRef, openTime, closeTime, duration, newQuestions]);
    console.log(questions);
    return load ? (
        <Loading />
    ) : (
        <RoomEditStyle>
            <Formik
                validationSchema={schema}
                initialValues={{
                    code: room.code,
                    type: room.type,
                    duration: room.duration == null ? '' : room.duration,
                    openTime: room.openTime,
                    closeTime: room.isPrivate ? room.closeTime : '',
                    visibility: checkPrivate,
                    formFile: '',
                    input: '',
                    output: '',
                    codeTemplate: '',
                    colorPicker: '',
                }}
                innerRef={formRef}
            >
                {({ handleChange, values, touched, isValid, errors }) => (
                    <Form noValidate>
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
                                    {/* {roomTypes.map((item, i) => {
                                        return <option key={i}>{item}</option>;
                                    })} */}
                                    <option>{room.type}</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {errors.type}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="openTime">
                                <Form.Label className="fw-bold">Open Time</Form.Label>
                                <DateTimePickerValue
                                    dayApi={room.openTime}
                                    setTimeISO={setOpenTime}
                                />

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
                                    <>
                                        <DateTimePickerValue
                                            dayApi={room.closeTime}
                                            setTimeISO={setCloseTime}
                                            openTime={openTime}
                                        />
                                    </>
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
                                    disabled
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
                                        key={questions[i].id}
                                        i={i}
                                        questionNum={questions?.length ? i + 1 : 1}
                                        maxSubmitTime={
                                            questions?.length ? questions[i].maxSubmitTimes : 1
                                        }
                                        questionImages={
                                            questions?.length ? questions[i].questionImage : ''
                                        }
                                        questionColors={
                                            questions?.length ? questions[i].colors : ''
                                        }
                                        codeTemp={
                                            questions?.length ? questions[i].codeTemplate : ''
                                        }
                                        roomType={room.type}
                                        question={questions}
                                        setNewQuestions={setNewQuestions}
                                        isValid={touched.formFile && !errors.formFile}
                                        isInvalid={!!errors.formFile}
                                        errorFile={errors.formFile}
                                        handleRemoveQuestion={handleRemoveQuestion}
                                        inputValid={touched.input && !errors.input}
                                        inputInvalid={!!errors.input}
                                        outputValid={touched.output && !errors.output}
                                        outputInvalid={!!errors.output}
                                        inputError={errors.input}
                                        outputError={errors.output}
                                        handleChange={handleChange}
                                        codeTValid={touched.codeTemplate && !errors.codeTemplate}
                                        codeTInvalid={!!errors.codeTemplate}
                                        codeTError={errors.codeTemplate}
                                        colorPValid={touched.colorPicker && !errors.colorPicker}
                                        colorPInvalid={!!errors.colorPicker}
                                        colorPError={errors.colorPicker}
                                    />
                                </>
                            ))}
                        </Row>

                        <ButtonCustom
                            variant="light border-dashed w-100"
                            name="Add question"
                            className="bi bi-plus d-flex align-items-center fs-4"
                            onClick={handleAddQuestion}
                            type="button"
                        />
                    </Form>
                )}
            </Formik>
        </RoomEditStyle>
    );
};

export default FormEdit;
