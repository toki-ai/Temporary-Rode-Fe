import { useEffect, useState } from 'react';

import { Stack } from 'react-bootstrap';

import ButtonStyled from '../../components/Button/';
import roomAPI from '../../utils/api/roomAPI';
import CreateBEQuestions from './components/CreateBEQuestions';
import CreateFEQuestions from './components/CreateFEQuestions';
import CreateRoomInfo from './components/CreateRoomInfo';
import { FEInitQuestion, BEInitQuestion } from './initialQuestion';
import * as St from './styles';

const CreateRoom = () => {
    const [roomInfo, setRoomInfo] = useState({
        code: '',
        openTime: '',
        type: '',
        isPrivate: '',
    });
    const [questions, setQuestions] = useState(BEInitQuestion);

    const handleSubmit = () => {
        console.log({ ...roomInfo, questions });
        roomAPI.createOne({ ...roomInfo, questions });
    };

    useEffect(() => {
        if (roomInfo.type === 'FE') {
            setQuestions(FEInitQuestion);
        } else if (roomInfo.type === 'FE') {
            setQuestions(BEInitQuestion);
        }
    }, [roomInfo.type]);

    return (
        <St.Wrapper>
            <St.Title>Create Room</St.Title>
            <CreateRoomInfo setRoomInfo={setRoomInfo} />
            {roomInfo.type === 'FE' ? (
                <CreateFEQuestions questions={questions} setQuestions={setQuestions} />
            ) : (
                <CreateBEQuestions questions={questions} setQuestions={setQuestions} />
            )}

            <Stack direction="horizontal" gap={3} className="justify-content-end mb-4">
                <ButtonStyled buttonType="secondary">Cancel</ButtonStyled>
                <ButtonStyled buttonType="solid" onClick={handleSubmit}>
                    Create
                </ButtonStyled>
            </Stack>
        </St.Wrapper>
    );
};

export default CreateRoom;
