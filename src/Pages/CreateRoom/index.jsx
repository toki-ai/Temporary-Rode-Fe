import { useEffect, useState } from 'react';

import { Button } from 'react-bootstrap';

import roomAPI from '../../utils/api/roomAPI';
import CreateQuestions from './components/CreateQuestions';
import CreateRoomInfo from './components/CreateRoomInfo';
import * as St from './styles';

const CreateRoom = () => {
    const [roomInfo, setRoomInfo] = useState({});
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        roomAPI.createOne({ ...roomInfo, questions });
    }, [questions]);

    return (
        <St.Wrapper>
            <St.Title>Create Room</St.Title>
            <CreateRoomInfo setRoomInfo={setRoomInfo} />
            <CreateQuestions setQuestions={setQuestions} />
        </St.Wrapper>
    );
};

export default CreateRoom;
