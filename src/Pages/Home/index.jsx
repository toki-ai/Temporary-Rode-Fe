import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import ParticleAnimation from '../../components/ParticleAnimation/ParticleAnimation';
import { toastWarning } from '../../components/Toast';
import UserHomeLayout from '../../components/UserHomeLayout/UserHomeLayout.component';
import { USER_ROOM_ID } from '../../config';
import Localstorage from '../../utils/Localstorage';
import roomApi from '../../utils/api/roomApi';
import userRoomApi from '../../utils/api/userRoomApi';
import Content from './components/Content';
import ModalJoinRoom from './components/Modal';
import { Container, Hero, Icon, Input, Name, Title } from './styled';

import useCookies from 'react-cookie/cjs/useCookies';

const Home = () => {
    const [inputCode, setInputCode] = useState('');
    // const location = useLocation();
    // const [show, setShow] = useState(false);
    const [cookies, setCookie] = useCookies([USER_ROOM_ID]);
    function storeUserRoomId(userRoomId) {
        setCookie(USER_ROOM_ID, userRoomId, { path: '/' });
    }
    const navigate = useNavigate();
    // chê cái function này  :<
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
                                    Localstorage.deleteAllLocal();
                                    if (res.data.data.type == 'FE') {
                                        navigate(`/arena_css/${inputCode}`, {
                                            state: { userRoomId: response?.data.data },
                                        });
                                        storeUserRoomId(response?.data.data);
                                    } else {
                                        navigate(`/algorithm/${inputCode}`, {
                                            state: { userRoomId: response?.data.data },
                                        });
                                        storeUserRoomId(response?.data.data);
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
            <ParticleAnimation />
            <UserHomeLayout>
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
                    <Content
                        handlePostRoom={handlePostRoom}
                        setInputCode={setInputCode}
                        inputCode={inputCode}
                    />
                    <ModalJoinRoom></ModalJoinRoom>
                </Container>
            </UserHomeLayout>
        </>
    );
};

export default Home;

// <Icon>
//     <Row className="position-absolute w-3em right-50 bottom-100 effect-1">
//         <img src={x_blue} alt="X blue SVG" />
//     </Row>
//     <Row className="position-absolute w-3em right-2 bottom-105 effect-2">
//         <img src={x_blue} alt="X blue SVG" />
//     </Row>
//     <Row className="position-absolute w-3em right-102 bottom-100 ">
//         <img src={x_green} alt="X green SVG" />
//     </Row>
//     <Row className="position-absolute w-3em object18 ">
//         <img src={x_green} alt="X green SVG" />
//     </Row>
//     <Row className="position-absolute w-3em object14 ">
//         <img src={x_green} alt="X green SVG" />
//     </Row>
//     <Row className="position-absolute w-3em object6 ">
//         <img src={x_green} alt="X green SVG" />
//     </Row>
//     <Row className="position-absolute w-3em object4">
//         <img src={x_green} alt="X green SVG" />
//     </Row>
//     <Row className="position-absolute w-3em object1">
//         <img src={x_green} alt="X green SVG" />
//     </Row>
//     <Row className="position-absolute w-3em right-9 bottom-124 effect-4">
//         <img src={circle} alt="circle blue SVG" />
//     </Row>
//     <Row className="position-absolute w-4em right-0 bottom-142 effect-5">
//         <img src={hexagonal} alt="hexagonal SVG" />
//     </Row>
//     <Row className="position-absolute w-4em object8 effect-5">
//         <img src={hexagonal} alt="hexagonal SVG" />
//     </Row>
//     <Row className="position-absolute w-4em object16 effect-5">
//         <img src={hexagonal} alt="hexagonal SVG" />
//     </Row>
//     <Row className="position-absolute w-4em object5 effect-5">
//         <img src={hexagonal} alt="hexagonal SVG" />
//     </Row>
//     <Row className="position-absolute w-3em right-50 bottom-134 effect-6">
//         <img src={triangle} alt="triangle SVG" />
//     </Row>
//     <Row className="position-absolute w-3em object2 effect-6">
//         <img src={triangle} alt="triangle SVG" />
//     </Row>
//     <Row className="position-absolute w-3em object20 effect-6">
//         <img src={triangle} alt="triangle SVG" />
//     </Row>
//     <Row className="position-absolute w-9em right-90 bottom-100 effect-7">
//         <img src={wave} alt="wave SVG" />
//     </Row>
//     <Row className="position-absolute w-9em object5 effect-7">
//         <img src={wave} alt="wave SVG" />
//     </Row>
//     <Row className="position-absolute w-9em object8 effect-7">
//         <img src={wave} alt="wave SVG" />
//     </Row>
//     <Row className="position-absolute rotate-1 w-9em right-14 bottom-120 effect-8">
//         <img src={wave} alt="wave SVG" />
//     </Row>
//     <Row className="position-absolute rotate-1 w-9em object19 effect-8">
//         <img src={wave} alt="wave SVG" />
//     </Row>
//     <Row className="position-absolute w-3em right-102 bottom-134 effect-9">
//         <img src={point_blue} alt="point blue SVG" />
//     </Row>
//     <Row className="position-absolute w-22em right-78 bottom-100 effect-10">
//         <img src={point_blue} alt="point blue SVG" />
//     </Row>
//     <Row className="position-absolute w-22em right-2 bottom-80 effect-11">
//         <img src={point_blue} alt="point blue SVG" />
//     </Row>
//     <Row className="position-absolute w-22em object5 effect-11">
//         <img src={point_blue} alt="point blue SVG" />
//     </Row>
//     <Row className="position-absolute w-22em object17 effect-11">
//         <img src={point_blue} alt="point blue SVG" />
//     </Row>
//     <Row className="position-absolute w-22em right-102 bottom-80 effect-12">
//         <img src={point_green} alt="point green SVG" />
//     </Row>
//     <Row className="position-absolute w-22em object12 effect-12">
//         <img src={point_green} alt="point green SVG" />
//     </Row>
//     <Row className="position-absolute w-22em right-60 bottom-128 effect-13">
//         <img src={point_green} alt="point green SVG" />
//     </Row>
//     <Row className="position-absolute w-22em right-32 bottom-134 effect-14">
//         <img src={point_green} alt="point green SVG" />
//     </Row>
//     <Row className="position-absolute w-22em right-18 bottom-100 effect-15">
//         <img src={point_green} alt="point green SVG" />
//     </Row>
//     <Row className="position-absolute w-22em object9 effect-15">
//         <img src={point_green} alt="point green SVG" />
//     </Row>
//     <Row className="position-absolute w-4em right-65 bottom-134 effect-16">
//         <img src={circle_green} alt="circle green SVG" />
//     </Row>
//     <Row className="position-absolute w-4em object11 effect-16">
//         <img src={circle_green} alt="circle green SVG" />
//     </Row>
//     <Row className="position-absolute w-4em object15 effect-16">
//         <img src={circle_green} alt="circle green SVG" />
//     </Row>
//     <Row className="position-absolute w-4em object10 effect-16">
//         <img src={circle_green} alt="circle green SVG" />
//     </Row>
// </Icon>
