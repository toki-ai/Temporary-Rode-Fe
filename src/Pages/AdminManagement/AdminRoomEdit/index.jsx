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
import ButtonUpDown from './components/ButtonUpDown';
import DateTimePickerValue from './components/DateTimePicker';
import { RoomEditStyle } from './style';

const schema = yup.object().shape({
    code: yup.string().required('Please enter room code'),
    type: yup.string().required('Please enter room type'),
    openTime: yup.string().required('Please enter open time'),
});

const AdminRoomEdit = () => {
    const { id } = useParams();
    const room_code = id;
    const [room, setRoom] = useState({});
    const [roomTypes, setRoomTypes] = useState([]);
    const [load, setLoad] = useState(false);
    const [load2, setLoad2] = useState(false);
    const [numOfTestCase, setNumOfTestCase] = useState(1);

    useEffect(() => {
        roomApi
            .getRoomByCode(room_code)
            .then((res) => {
                console.log(res.data.data);
                setRoom(res.data.data);
                setLoad(true);
            })
            .catch((err) => {
                console.log(err);
            });
        roomApi
            .getAllRomType()
            .then((res) => {
                console.log(res.data.data);
                setRoomTypes(res.data.data);
                setLoad2(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const checkPrivate = room.isPrivate ? 'Private' : 'Public';
    const checkPrivate2 = room.isPrivate ? 'Public' : 'Private';

    function increaseTestCase() {
        setNumOfTestCase(numOfTestCase + 1);
    }
    function decreaseTestCase() {
        setNumOfTestCase(numOfTestCase - 1);
    }
    console.log(numOfTestCase);
    return !load && !load2 ? (
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
                        openTime: DateFormat(room.openTime),
                        closeTime: room.isPrivate ? DateFormat(room.closeTime) : '',
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
                                    >
                                        <option>FE</option>;<option>BE</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.type}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="openTime">
                                    {/* <Form.Label className="fw-bold">Open Time</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="openTime"
                                        value={values.openTime}
                                        onChange={handleChange}
                                        isValid={touched.openTime && !errors.openTime}
                                        isInvalid={!!errors.openTime}
                                    />  */}
                                    <Form.Label className="fw-bold">Open Time</Form.Label>
                                    <DateTimePickerValue dayApi={values.closeTime} />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.openTime}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="closeTime">
                                    <Form.Label className="fw-bold">Close Time</Form.Label>
                                    {/* <Form.Control
                                        type="text"
                                        name="closeTime"
                                        value={values.closeTime}
                                        onChange={handleChange}
                                        isValid={touched.closeTime && !errors.closeTime}
                                        isInvalid={!!errors.closeTime}
                                    /> */}
                                    <DateTimePickerValue dayApi={values.closeTime} />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.closeTime}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
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
                            <h3>Question 1:</h3>
                            <Row>
                                <Col>
                                    <Row className="d-flex align-items-center mb-4">
                                        <Col className="col-4">
                                            <div className="text-secondary fw-bold">
                                                Max Submit Time:
                                            </div>
                                        </Col>
                                        <Col className="col-3">
                                            <ButtonUpDown variant="green" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        {/* <Form.Group controlId="formFile" className="">
                                            <Form.Label>Upload question</Form.Label>
                                            <Form.Control type="file" />
                                        </Form.Group> */}
                                    </Row>
                                </Col>
                                <Col>
                                    <span className="text-secondary fw-bold">Test Case 1:</span>
                                    <Row>
                                        <Col className="col-6">
                                            <label htmlFor="input">Input</label>
                                            <textarea
                                                name="input"
                                                id="input"
                                                rows="7"
                                                cols="22"
                                            ></textarea>
                                        </Col>
                                        <Col className="col-6">
                                            {/* <Form.Group>
                                                <Form.Label className="color-primary">
                                                    Output
                                                </Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    row="10"
                                                    style={{ height: '150px' }}
                                                    label="Input"
                                                    className=" border-green"
                                                ></Form.Control>
                                            </Form.Group> */}

                                            <label htmlFor="output">Output</label>
                                            <textarea
                                                name="output"
                                                id="output"
                                                rows="7"
                                                cols="22"
                                            ></textarea>
                                        </Col>
                                    </Row>
                                    <hr></hr>
                                    <ButtonCustom
                                        variant="light border-dashed w-100"
                                        name="Add test case"
                                        className="bi bi-plus d-flex align-items-center fs-4"
                                        onClick={increaseTestCase}
                                    />
                                </Col>
                            </Row>
                            <hr></hr>
                            <ButtonCustom
                                variant="light border-dashed w-100"
                                name="Add test case"
                                className="bi bi-plus d-flex align-items-center fs-4"
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
