import { useEffect, useState } from 'react';

import CreateQuestions from './components/CreateQuestions';
import CreateRoomInfo from './components/CreateRoomInfo';

const CreateRoom = () => {
    const [roomInfo, setRoomInfo] = useState({});
    const [questions, setQuestions] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (Object.keys(roomInfo).length) setShow(true);
    }, [roomInfo]);

    return (
        <>
            <CreateRoomInfo setRoomInfo={setRoomInfo} />
            <CreateQuestions show={show} handleClose={handleClose} />
        </>
    );
};

export default CreateRoom;
