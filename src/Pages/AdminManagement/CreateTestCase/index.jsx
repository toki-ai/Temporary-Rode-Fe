import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Stack } from 'react-bootstrap';
import ButtonStyled from '../../../components/Button';
import { FEInitQuestion, BEInitQuestion } from './initialData';
import { toastError, toastSuccess } from '../../../components/Toast';
// import roomApi from '../../../utils/api/roomApi';
import CreateBEQuestions from './components/CreateBEQuestions';
import CreateFEQuestions from './components/CreateFEQuestions';
// import CreateRoomInfo from './components/CreateRoomInfo';
import Dropdown from 'react-bootstrap/Dropdown';
import './style.scss';

const CreateTest = () => { 
    // Create question
    const [roomInfo, setRoomInfo] = useState('FE');
    const [questions, setQuestions] = useState(BEInitQuestion);
    const [errors, setErrors] = useState([]);
    
        // Submit
    // const handleSubmit = async () => {
    //     const payload = { ...roomInfo, questions };
    //     console.log('Payload: ', payload);
    //     await roomApi
    //         .createOne(payload)
    //         .then((res) => {
    //             console.error('Response: ', res.data);
    //             if (res.data.status === 200) {
    //                 toastSuccess(res.data.message);
    //                 // setRoomInfo(initialRoomInfo);
    //                 // setQuestions(roomInfo.type === 'FE' ? FEInitQuestion : BEInitQuestion);

    //                 // setTimeout(() => {
    //                 //     window.location.reload();
    //                 // }, 2000);
    //             } else {
    //                 toastError(`${res.data.message}. Open tab Console for more details`);
    //                 setErrors(res.data.err);
    //             }
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //             toastError(err);
    //         });
    // };

    //re-render when type change 
    useEffect(() => {
        setQuestions(roomInfo.type === 'FE' ? FEInitQuestion : BEInitQuestion);
    }, [roomInfo]);

    const handleSubmit = () => {}

    // thêm nút hidden cho mí câu hỏi 
    //check lại phần import ảnh 
    //đọc hiểu cái phần add color 

    return (
        <div className="container bg-white h-100 rounded shadow mb-4">
            <Row>
                <Col><h2>Create TestCase</h2></Col>
                <Col>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
            <Row>
                {roomInfo === 'FE' 
                ? (
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
            </Row>
            <Stack direction="horizontal" gap={3} className="justify-content-end mb-4">
                <ButtonStyled buttonType="secondary">Cancel</ButtonStyled>
                <ButtonStyled buttonType="solid" onClick={handleSubmit}>
                    Create
                </ButtonStyled>
            </Stack>
        </div>
    )
}

export default CreateTest;