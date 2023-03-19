import { useEffect, useState } from 'react';

import roomAPI from '../../utils/api/roomAPI';
import CreateQuestions from './components/CreateQuestions';
import CreateRoomInfo from './components/CreateRoomInfo';

const CreateRoom = () => {
    const [roomInfo, setRoomInfo] = useState({});
    const [questions, setQuestions] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (Object.keys(roomInfo).length) handleShow();
    }, [roomInfo]);

    useEffect(() => {
        roomAPI
            .createOne({ ...roomInfo, isPrivate: true, questions })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    }, [questions]);

    return (
        <>
            <h1>Create Room</h1>
            <CreateRoomInfo setRoomInfo={setRoomInfo} />
            <CreateQuestions show={show} handleClose={handleClose} setQuestions={setQuestions} />
        </>
    );
};

export default CreateRoom;
