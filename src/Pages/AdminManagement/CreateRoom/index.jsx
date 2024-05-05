import { useEffect, useState } from 'react';

import { Stack } from 'react-bootstrap';

import ButtonStyled from '../../../components/Button';
import { toastError, toastSuccess } from '../../../components/Toast';
import roomApi from '../../../utils/api/roomApi';
import CreateBEQuestions from './components/CreateBEQuestions';
import CreateFEQuestions from './components/CreateFEQuestions';
import CreateRoomInfo from './components/CreateRoomInfo';
import { initialRoomInfo, FEInitQuestion, BEInitQuestion } from './initialData';
import * as St from './styles';

const CreateRoom = () => {
    // Create question
    const [roomInfo, setRoomInfo] = useState(initialRoomInfo);
    const [questions, setQuestions] = useState(BEInitQuestion);
    const [errors, setErrors] = useState([]);

    // Submit
    const handleSubmit = async () => {
        const payload = { ...roomInfo, questions };
        console.log('Payload: ', payload);
        await roomApi
            .createOne(payload)
            .then((res) => {
                console.error('Response: ', res.data);
                if (res.data.status === 200) {
                    toastSuccess(res.data.message);
                    // setRoomInfo(initialRoomInfo);
                    // setQuestions(roomInfo.type === 'FE' ? FEInitQuestion : BEInitQuestion);

                    // setTimeout(() => {
                    //     window.location.reload();
                    // }, 2000);
                } else {
                    toastError(`${res.data.message}. Open tab Console for more details`);
                    setErrors(res.data.err);
                }
            })
            .catch((err) => {
                console.error(err);
                toastError(err);
            });
    };

    // Re-render when room type change
    useEffect(() => {
        setQuestions(roomInfo.type === 'FE' ? FEInitQuestion : BEInitQuestion);
    }, [roomInfo.type]);

    return (
        <St.Wrapper>
            <St.Title>Create Room</St.Title>
            <CreateRoomInfo roomInfo={roomInfo} setRoomInfo={setRoomInfo} errs={errors} />
            {roomInfo.type === 'FE' ? (
                <CreateFEQuestions
                    questions={questions}
                    setQuestions={setQuestions}
                    error={errors.find((err) => err.at === 'questions')?.chidren}
                />
            ) : (
                <CreateBEQuestions
                    questions={questions}
                    setQuestions={setQuestions}
                    error={errors.find((err) => err.at === 'questions')?.chidren}
                />
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
