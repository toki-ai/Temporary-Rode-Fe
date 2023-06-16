import { useState, Suspense } from 'react';

import { useLoaderData } from 'react-router-dom';

import ModalComponent from '../../components/Modal/Modal';
import { CodeTemplateTmp } from '../../utils/Constant/Dummy';
import userRoomApi from '../../utils/api/userRoomApi';
import ArenaCSSCode from './components/ArenaCSSCode';
import Output from './components/Output';
import RoomInfo from './components/RoomInfo';
import { PaddingRow } from './styled';

import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';

const ArenaCSS = () => {
    const roomInfo = useLoaderData();

    const currCode = localStorage.getItem('code');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const codeTemplate = roomInfo?.questions[currentQuestion]?.codeTemplate
        ? roomInfo?.questions[currentQuestion].codeTemplate
        : CodeTemplateTmp;
    const [code, setCode] = useState(currCode ? currCode : codeTemplate);
    const currQuestion = JSON.parse(localStorage.getItem('question'));
    const [questionId, setQuestionId] = useState();
    const [question, setQuestion] = useState({
        current: currQuestion ? currQuestion.current : 'Choose question',
        questionImg: currQuestion
            ? currQuestion.questionImg
            : roomInfo?.questions[currentQuestion]?.questionImage,
    });
    const handleQuestionChange = (eventKey, e) => {
        setQuestion({
            current: e.target.name,
            questionImg: eventKey,
        });

        localStorage.setItem(
            'question',
            JSON.stringify({
                current: e.target.name,
                questionImg: eventKey,
            })
        );
    };

    console.log(questionId);
    const [count, setCount] = useState(0);
    const [submit, setSubmit] = useState();
    const [show, setShow] = useState(false);
    return (
        <PaddingRow>
            {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
            <ModalComponent show={show} setShow={setShow} title={'ERROR'} body={'hello'} />

            <Col xs={12} md={3} className="px-4">
                <RoomInfo
                    data={roomInfo}
                    submit={submit}
                    question={question}
                    currentQuestion={currentQuestion}
                    setCurrentQuestion={setCurrentQuestion}
                    action={setQuestionId}
                    QuestionChange={handleQuestionChange}
                />
            </Col>
            <Col xs={12} md={6} className="px-4">
                <ArenaCSSCode
                    submitService={{ submit, setSubmit }}
                    setCode={setCode}
                    setCount={setCount}
                    count={count}
                    code={code}
                    data={roomInfo}
                />
            </Col>
            <Col xs={12} md={3} className="px-4">
                <Output code={code} data={roomInfo} currentQuestion={currentQuestion} />
            </Col>
        </PaddingRow>
    );
};

export default ArenaCSS;
