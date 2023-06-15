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
