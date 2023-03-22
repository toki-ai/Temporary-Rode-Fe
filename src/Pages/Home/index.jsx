import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import roomApi from '../../utils/api/roomApi';
import userRoomApi from '../../utils/api/userRoomApi';

const Home = () => {
    const [inputCode, setInputCode] = useState('');

    const navigate = useNavigate();
    // Viết lại function join room - Hân
    const handlePostRoom = async () => {
        await roomApi
            .getRoomByCode(inputCode)
            .then((res) => {
                const RoutingRoom = async () => {
                    console.log(res?.data.data.id);
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
                            } else if (res.data.status == 400) {
                                // alert Modal popup error
                                console.log('Fail');
                            }
                        })
                        .catch((e) => console.log(e));
                };
                RoutingRoom();
            })
            .catch((err) => console.log(err));
    };
    return (
        <>
            <h1 className="text-white"> this is home page</h1>
            <h1 className="text-white"> this is home page</h1>
            <div className="home">
                <div>
                    <input
                        type="text"
                        placeholder="Code: 1234"
                        onChange={(e) => setInputCode(e.target.value)}
                    />
                </div>
                <button onClick={handlePostRoom}>JOIN</button>
            </div>
        </>
    );
};

export default Home;
