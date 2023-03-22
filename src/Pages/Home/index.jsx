import { useState } from 'react';

import { Button, Col, Container, InputGroup, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import roomApi from '../../utils/api/roomApi';
import userRoomApi from '../../utils/api/userRoomApi';
import { HomeStyle } from './style';

import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

const Home = () => {
    const [inputCode, setInputCode] = useState('');

    const navigate = useNavigate();

    const handlePostRoom = async () => {
        await roomApi
            .getRoomByCode(inputCode)
            .then((res) => {
                console.log(res);
                userRoomApi
                    .postJoinUserRoom({
                        roomId: res?.data.data.id,
                        code: inputCode,
                    })
                    .then((res) => {
                        if (res.data.status == 200) {
                            navigate('/arena_css');
                        } else if (res.data.status == 400) {
                            console.log('Fail ');
                        }
                    })
                    .catch((e) => console.log(e));
            })
            .catch((err) => console.log(err));
    };
    return (
        <>
            <div>
                <HomeStyle>
                    <Container className="d-flex justify-content-center">
                        <Row
                            sm={12}
                            md={12}
                            lg={12}
                            className="w-100 bg-dark-secondary rounded-3 box-shadow-primary border border-2 border-dark "
                        >
                            <Col
                                lg={4}
                                sm={8}
                                md={12}
                                className="text-light d-flex flex-column justify-content-start align-items-center rounded-3 bc-primary "
                            >
                                DashBoard
                            </Col>

                            <Col
                                lg={8}
                                className="d-flex flex-column justify-content-center align-items-center position-relative d-none d-lg-flex "
                            >
                                <Row className="d-flex align-items-center justify-content-between ">
                                    <Col
                                        xs={8}
                                        lg={12}
                                        className="d-flex flex-column justify-content-center align-items-center"
                                    >
                                        <Row
                                            className="vh-30 position-relative"
                                            style={{ top: '0', right: '400px' }}
                                        >
                                            <div
                                                className="fw-bold fs-0 color-primary ls-1  position-absolute top-1 right-3"
                                                style={{ top: '18%' }}
                                            >
                                                R.ODE
                                            </div>
                                            <div
                                                className="ls-2 fw-bolder fs-0 text-stroke-1 position-absolute top-1 right-2"
                                                style={{ top: '100px', left: '40px' }}
                                            >
                                                BATTLE
                                            </div>
                                            <div
                                                className="ls-2 fw-bolder fs-0 text-stroke-2 position-absolute top-1 left-1"
                                                style={{ top: '50px', left: '400px' }}
                                            >
                                                Room
                                            </div>

                                            <div
                                                className="position-absolute top-18 left-3"
                                                style={{ top: '30px', left: '700px' }}
                                            >
                                                <svg className="si-1">
                                                    <circle
                                                        cx="1em"
                                                        cy="1em"
                                                        r="0.9em"
                                                        fill="#00e7aa"
                                                    ></circle>
                                                </svg>
                                            </div>
                                            <div
                                                className="position-absolute top-25 left-1"
                                                style={{ top: '30px', left: '70px' }}
                                            >
                                                <svg className="si-1">
                                                    <circle
                                                        cx="1em"
                                                        cy="1em"
                                                        r="0.3em"
                                                        fill="#00e7aa"
                                                    ></circle>
                                                </svg>
                                            </div>
                                            <div className="position-absolute top-0 end-4">
                                                <svg className="si-1">
                                                    <circle
                                                        cx="1em"
                                                        cy="1em"
                                                        r="0.45em"
                                                        fill="#2e7dff"
                                                    ></circle>
                                                </svg>
                                            </div>
                                            <div className="position-absolute top-30 end-3">
                                                <svg className="si-1">
                                                    <circle
                                                        cx="1em"
                                                        cy="1em"
                                                        r="0.45em"
                                                        fill="#2e7dff"
                                                    ></circle>
                                                </svg>
                                            </div>
                                        </Row>
                                        <Row xs={8} lg={12} className="w-100">
                                            <form action="" onSubmit={handlePostRoom}>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Room Code"
                                                    onChange={(e) => setInputCode(e.target.value)}
                                                    autoComplete="off"
                                                    className="bg-dark-secondary text-white bc-primary rounded-pill inputRoomCode"
                                                />
                                            </form>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row sm={12} md={12} lg={12} className="rounded-3 bc-primary px-3">
                                    <div className="color-primary p-2 px-4">
                                        <h3 className="w-100 color-primary">Practice Room</h3>
                                    </div>
                                    <Row className="d-flex justify-content-between px-4">
                                        <InputGroup className="bc-primary rounded-pill w-40">
                                            <Button
                                                className="rounded-pill dishover text-white"
                                                variant="none"
                                                type="submit"
                                            >
                                                <i className="bi bi-search color-primary"></i>
                                            </Button>
                                            <input
                                                className="border-0 rounded-pill dishover form-control rfs bg-dark-secondary text-white"
                                                placeholder="Search room..."
                                                type="text"
                                            />
                                        </InputGroup>
                                        <div className="accounts-status w-40 color-primary">
                                            <label htmlFor="">Room type</label>
                                            <Form.Select
                                                aria-label="Default select example "
                                                className="bg-dark-secondary color-primary bc-primary"
                                            >
                                                <option value="1">Select</option>
                                                <option value="2">Algorithm</option>
                                                <option value="3">CSS Battle</option>
                                            </Form.Select>
                                        </div>
                                    </Row>
                                    <Table striped hover className="text-white">
                                        <thead className="text-white">
                                            <tr>
                                                <th>Room Code</th>
                                                <th>Room Type</th>
                                                <th>Open Time</th>
                                                <th>Close Time</th>
                                                <th>Duration</th>
                                                <th>Visibility</th>
                                            </tr>
                                        </thead>
                                        {[1, 2, 3, 4, 5, 6].map((item, index) => (
                                            <tbody className="text-white" key={index}>
                                                <tr className="text-white">
                                                    <td className="text-white">A001_SE1000</td>
                                                    <td className="text-white">Algorithm</td>
                                                    <td className="text-white">vc</td>
                                                    <td className="text-white">vc</td>
                                                    <td className="text-white">vc</td>
                                                    <td className="text-white">Public</td>
                                                </tr>
                                            </tbody>
                                        ))}
                                    </Table>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </HomeStyle>
            </div>
        </>
    );
};

export default Home;
