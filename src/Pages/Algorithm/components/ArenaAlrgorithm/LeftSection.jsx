import { useState } from 'react';

import { Container, Stack } from 'react-bootstrap';

import localFileApi from '../../../../utils/api/localFileApi';
import CountdownTimer from '../../../CssBattle/components/CountDown';
import { TimeText, ChooseQWrapper } from '../../styled';
import { Title } from '../LeaderBoard/styled';
import { FormSelectStyled } from '../LeaderBoard/styled';
import { Timer } from '../LeaderBoard/styled';

import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

const LeftSection = ({
    action,
    roomInfo,
    currQuestion,
    setCurrentQuestion,
    setShowRightSection,
    setCode,
    setShowResult,
    setResInfo,
}) => {
    console.log(currQuestion);
    const [question, setQuestion] = useState({
        current: currQuestion ? currQuestion.current : 'Choose question',
        questionImg: currQuestion
            ? currQuestion.questionImg
            : roomInfo?.questions[0]?.questionImage,
    });
    const TestImg = localFileApi.getImg(question.questionImg);
    const [imageError, setImageError] = useState(false);
    const [showRemind, setShowRemind] = useState(currQuestion ? false : true);
    const handleImageError = () => {
        setImageError(true);
    };

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

    const [showImg, setShowImg] = useState(currQuestion ? true : false);
    return (
        <Container className="p-4 h-100 overflow-y-auto">
            <Stack direction="horizontal" className="justify-content-between">
                <ChooseQWrapper>
                    <Dropdown className="d-inline mx-2" onSelect={handleQuestionChange}>
                        <Dropdown.Toggle
                            id="dropdown-autoclose-true"
                            className="bg border button head"
                        >
                            {question.current}
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="bg border transform menu">
                            {roomInfo.questions.length !== 0 ? (
                                roomInfo.questions.map((question, id) => {
                                    return (
                                        <Dropdown.Item
                                            eventKey={question.questionImage}
                                            key={id}
                                            name={`Question ${id + 1}`}
                                            onClick={() => {
                                                action(question.id);
                                                setCurrentQuestion(id);
                                                setShowImg(true);
                                                setShowRightSection(true);
                                                // setCode();
                                                setShowResult(false);
                                                setResInfo(0);
                                                setShowRemind(false);
                                            }}
                                        >
                                            Question {id + 1}
                                        </Dropdown.Item>
                                    );
                                })
                            ) : (
                                <div> ERROR</div>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </ChooseQWrapper>
                <Timer>
                    <Title>Times:</Title>
                    <TimeText>
                        <CountdownTimer targetDate={roomInfo.duration} />
                    </TimeText>
                </Timer>
            </Stack>

            <Stack>
                {showRemind && (
                    <div className="remind">Please select question before doing the tests !</div>
                )}
            </Stack>
            <Stack className="justify-content-center align-items-center h-75 mt-3">
                {imageError ? (
                    <div className="text-light"> Image ERROR!!!!!</div>
                ) : (
                    <>
                        {showImg && (
                            <img src={TestImg} alt="target_img" onError={handleImageError} />
                        )}
                    </>
                )}
            </Stack>
        </Container>
    );
};

export default LeftSection;
