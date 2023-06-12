import { useState, useEffect } from 'react';

import { Row } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

import circle_green from '../../assets/HomeChild/circle-green.svg';
import circle from '../../assets/HomeChild/circle.svg';
import hexagonal from '../../assets/HomeChild/hexagonal.svg';
import point_blue from '../../assets/HomeChild/point-blue.svg';
import point_green from '../../assets/HomeChild/point-green.svg';
import triangle from '../../assets/HomeChild/triangle.svg';
import wave from '../../assets/HomeChild/wave.svg';
import x_blue from '../../assets/HomeChild/x-blue.svg';
import x_green from '../../assets/HomeChild/x-green.svg';
import { toastWarning } from '../../components/Toast';
import roomApi from '../../utils/api/roomApi';
import userRoomApi from '../../utils/api/userRoomApi';
import Content from './components/Content';
import ModalJoinRoom from './components/Modal';
import { Container, Hero, Icon, Input, Name, Title } from './styled';

const Home = () => {
    const [inputCode, setInputCode] = useState('');
    // const location = useLocation();
    // const [show, setShow] = useState(false);

    const navigate = useNavigate();
    // Viết lại function join room - Hân
    const handlePostRoom = async (e) => {
        e.preventDefault();
        await roomApi
            .getRoomByCode(inputCode)
            .then((res) => {
                if (res.data.status == 400) {
                    setInputCode('');
                    toastWarning(res.data.err);
                } else {
                    const RoutingRoom = async () => {
                        await userRoomApi
                            .postJoinUserRoom({
                                roomId: res?.data.data.id,
                                code: inputCode,
                            })
                            .then((response) => {
                                if (response.data.status == 200) {
                                    //routing area test
                                    if (res.data.data.type == 'FE') {
                                        navigate(`/arena_css/${inputCode}`, {
                                            state: { userRoomId: response?.data.data },
                                        });
                                    } else {
                                        navigate(`/algorithm/${inputCode}`, {
                                            state: { userRoomId: response?.data.data },
                                        });
                                    }
                                } else if (response.data.status == 400) {
                                    // alert Modal popup error
                                    toastWarning(response.data.err);
                                    setInputCode('');
                                }
                            })
                            .catch((err) => {
                                toastWarning(err.data.err);
                                setInputCode('');
                            });
                    };
                    RoutingRoom();
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <Container>
                <Input>
                    {/** GIỮ lại phần input code này  */}
                    <form action="" onSubmit={(e) => handlePostRoom(e)} className="form">
                        <label htmlFor="exampleInputEmail1" className=" text-yellow label">
                            ROOM
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Room Code"
                            value={inputCode}
                            onChange={(e) => setInputCode(e.target.value)}
                            autoComplete="off"
                            className="bg-dark-secondary text-white bc-primary radius-15 inputRoomCode box-shadow-primary"
                        />
                    </form>
                    {/** GIỮ lại phần input code này  */}
                </Input>
                <Name>
                    <Hero className="textEffect">R.ODE</Hero>
                    <Title className="textEffect">BATTLE</Title>
                </Name>
                <Icon>
                    <Row className="position-absolute w-3em right-50 bottom-100 effect-1">
                        <img src={x_blue} alt="X blue SVG" />
                    </Row>
                    <Row className="position-absolute w-3em right-2 bottom-105 effect-2">
                        <img src={x_blue} alt="X blue SVG" />
                    </Row>
                    <Row className="position-absolute w-3em right-102 bottom-100 ">
                        <img src={x_green} alt="X green SVG" />
                    </Row>
                    <Row className="position-absolute w-3em object18 ">
                        <img src={x_green} alt="X green SVG" />
                    </Row>
                    <Row className="position-absolute w-3em object14 ">
                        <img src={x_green} alt="X green SVG" />
                    </Row>
                    <Row className="position-absolute w-3em object6 ">
                        <img src={x_green} alt="X green SVG" />
                    </Row>
                    <Row className="position-absolute w-3em object4">
                        <img src={x_green} alt="X green SVG" />
                    </Row>
                    <Row className="position-absolute w-3em object1">
                        <img src={x_green} alt="X green SVG" />
                    </Row>
                    <Row className="position-absolute w-3em right-9 bottom-124 effect-4">
                        <img src={circle} alt="circle blue SVG" />
                    </Row>
                    <Row className="position-absolute w-4em right-0 bottom-142 effect-5">
                        <img src={hexagonal} alt="hexagonal SVG" />
                    </Row>
                    <Row className="position-absolute w-4em object8 effect-5">
                        <img src={hexagonal} alt="hexagonal SVG" />
                    </Row>
                    <Row className="position-absolute w-4em object16 effect-5">
                        <img src={hexagonal} alt="hexagonal SVG" />
                    </Row>
                    <Row className="position-absolute w-4em object5 effect-5">
                        <img src={hexagonal} alt="hexagonal SVG" />
                    </Row>
                    <Row className="position-absolute w-3em right-50 bottom-134 effect-6">
                        <img src={triangle} alt="triangle SVG" />
                    </Row>
                    <Row className="position-absolute w-3em object2 effect-6">
                        <img src={triangle} alt="triangle SVG" />
                    </Row>
                    <Row className="position-absolute w-3em object20 effect-6">
                        <img src={triangle} alt="triangle SVG" />
                    </Row>
                    <Row className="position-absolute w-9em right-90 bottom-100 effect-7">
                        <img src={wave} alt="wave SVG" />
                    </Row>
                    <Row className="position-absolute w-9em object5 effect-7">
                        <img src={wave} alt="wave SVG" />
                    </Row>
                    <Row className="position-absolute w-9em object8 effect-7">
                        <img src={wave} alt="wave SVG" />
                    </Row>
                    <Row className="position-absolute rotate-1 w-9em right-14 bottom-120 effect-8">
                        <img src={wave} alt="wave SVG" />
                    </Row>
                    <Row className="position-absolute rotate-1 w-9em object19 effect-8">
                        <img src={wave} alt="wave SVG" />
                    </Row>
                    <Row className="position-absolute w-3em right-102 bottom-134 effect-9">
                        <img src={point_blue} alt="point blue SVG" />
                    </Row>
                    <Row className="position-absolute w-22em right-78 bottom-100 effect-10">
                        <img src={point_blue} alt="point blue SVG" />
                    </Row>
                    <Row className="position-absolute w-22em right-2 bottom-80 effect-11">
                        <img src={point_blue} alt="point blue SVG" />
                    </Row>
                    <Row className="position-absolute w-22em object5 effect-11">
                        <img src={point_blue} alt="point blue SVG" />
                    </Row>
                    <Row className="position-absolute w-22em object17 effect-11">
                        <img src={point_blue} alt="point blue SVG" />
                    </Row>
                    <Row className="position-absolute w-22em right-102 bottom-80 effect-12">
                        <img src={point_green} alt="point green SVG" />
                    </Row>
                    <Row className="position-absolute w-22em object12 effect-12">
                        <img src={point_green} alt="point green SVG" />
                    </Row>
                    <Row className="position-absolute w-22em right-60 bottom-128 effect-13">
                        <img src={point_green} alt="point green SVG" />
                    </Row>
                    <Row className="position-absolute w-22em right-32 bottom-134 effect-14">
                        <img src={point_green} alt="point green SVG" />
                    </Row>
                    <Row className="position-absolute w-22em right-18 bottom-100 effect-15">
                        <img src={point_green} alt="point green SVG" />
                    </Row>
                    <Row className="position-absolute w-22em object9 effect-15">
                        <img src={point_green} alt="point green SVG" />
                    </Row>
                    <Row className="position-absolute w-4em right-65 bottom-134 effect-16">
                        <img src={circle_green} alt="circle green SVG" />
                    </Row>
                    <Row className="position-absolute w-4em object11 effect-16">
                        <img src={circle_green} alt="circle green SVG" />
                    </Row>
                    <Row className="position-absolute w-4em object15 effect-16">
                        <img src={circle_green} alt="circle green SVG" />
                    </Row>
                    <Row className="position-absolute w-4em object10 effect-16">
                        <img src={circle_green} alt="circle green SVG" />
                    </Row>
                </Icon>
                <Content
                    handlePostRoom={handlePostRoom}
                    setInputCode={setInputCode}
                    inputCode={inputCode}
                />
                <ModalJoinRoom></ModalJoinRoom>
            </Container>
        </>
    );
};

export default Home;
