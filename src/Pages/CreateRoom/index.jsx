import { useEffect, useState } from 'react';

import { Stack, Toast } from 'react-bootstrap';

import ButtonStyled from '../../components/Button/';
import { toastDefault, toastError, toastSuccess } from '../../components/Toast';
import roomAPI from '../../utils/api/roomAPI';
import CreateBEQuestions from './components/CreateBEQuestions';
import CreateFEQuestions from './components/CreateFEQuestions';
import CreateRoomInfo from './components/CreateRoomInfo';
import { FEInitQuestion, BEInitQuestion } from './initialQuestion';
import * as St from './styles';

const CreateRoom = () => {
    // Create question
    const [roomInfo, setRoomInfo] = useState({
        code: '',
        openTime: '',
        type: '',
        isPrivate: '',
    });
    const [questions, setQuestions] = useState(BEInitQuestion);

    // Submit
    const handleSubmit = () => {
        console.log('Payload', { ...roomInfo, questions });
        roomAPI
            .createOne({ ...roomInfo, questions })
            .then((res) => {
                console.warn(res.data);
                if (res.data.status === 200) {
                    toastSuccess(res.data.message);
                } else {
                    toastError(`${res.data.message}. Open tab Console for more details`);
                }
            })
            .catch((err) => {
                console.error(err);
                toastError(err);
            });
    };

    // Re-render when room type change
    useEffect(() => {
        if (roomInfo.type === 'FE') {
            console.log('FE');
            setQuestions(FEInitQuestion);
        } else if (roomInfo.type === 'BE') {
            console.log('BE');
            setQuestions(BEInitQuestion);
        }
    }, [roomInfo.type]);

    return (
        <St.Wrapper>
            <St.Title>Create Room</St.Title>
            <CreateRoomInfo roomInfo={roomInfo} setRoomInfo={setRoomInfo} />
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
