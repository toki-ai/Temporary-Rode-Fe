import { useState } from 'react';

import { Button, Col, Container, InputGroup, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import Bg from '../../assets/Home/bg.png';
import { toastWarning } from '../../components/Toast';
import UserSidebar from '../../components/UserSidebar/UserSidebar.component';
import roomApi from '../../utils/api/roomApi';
import userRoomApi from '../../utils/api/userRoomApi';
import { HomeStyle } from './style';
import { Background, Box } from './styled';

import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

const Home = () => {
    const [inputCode, setInputCode] = useState('');

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
                                        navigate(`/arena_css/${inputCode}`);
                                    } else {
                                        navigate(`/algorithm/${inputCode}`);
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
            {/* <Container> */}
            <div>
                {/** GIỮ lại phần input code này  */}
                <form action="" onSubmit={(e) => handlePostRoom(e)}>
                    <input
                        type="text"
                        placeholder="Enter Room Code"
                        value={inputCode}
                        onChange={(e) => setInputCode(e.target.value)}
                        autoComplete="off"
                        className="bg-dark-secondary text-white bc-primary rounded-pill inputRoomCode"
                    />
                </form>
                {/** GIỮ lại phần input code này  */}
            </div>
            {/* <Box>
                <Background src={Bg}></Background>
            </Box> */}
            {/* </Container> */}
        </>
    );
};

export default Home;
