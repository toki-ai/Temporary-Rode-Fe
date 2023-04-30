import { useState } from 'react';
import { useEffect } from 'react';

import { Col, Container, Nav, Row, Stack, Tab, TabPane } from 'react-bootstrap';
import { Check } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

import { toastSuccess, toastError, toastInfo } from '../../../../components/Toast';
import authApi from '../../../../utils/api/authApi';
import submitApi from '../../../../utils/api/submitApi';
import submitHistoryApi from '../../../../utils/api/submitHistoryApi';
import userRoomApi from '../../../../utils/api/userRoomApi';
import { BoxEditor, ChooseQWrapper, WrapRightSection } from '../../styled';
import {
    ControllerArena,
    ControllerNav,
    ControllerNavLink,
    SelectLanguage,
    WrapperResult,
    IconCheck,
} from '../LeaderBoard/styled';

import { cppLanguage } from '@codemirror/lang-cpp';
import { htmlLanguage } from '@codemirror/lang-html';
import { javaLanguage } from '@codemirror/lang-java';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import CodeMirror from '@uiw/react-codemirror';
import Dropdown from 'react-bootstrap/Dropdown';

const RightSection = ({
    questionId,
    currentQuestion,
    code,
    setCode,
    showResult,
    setShowResult,
    resInfo,
    setResInfo,
}) => {
    const location = useLocation();
    const roomInfo = useLoaderData();
    console.log('🚀 ~ file: RightSection.jsx:43 ~ roomInfo:', roomInfo);
    const [idUser, setIdUser] = useState('');
    const [totalTime, setTotalTime] = useState(0);
    const [isLanguage, setIsLanguage] = useState(false);
    const [select, setSelect] = useState('Choose language');
    const [score, setScore] = useState(0);
    const langs = [
        { name: 'C_CPP', id: 1 },
        { name: 'Java', id: 2 },
    ];
    const handleSelectChange = (eventKey) => {
        setSelect(eventKey);
        setIsLanguage(true);
    };
    const submitCode = async () => {
        if (!isLanguage) {
            toastError('Language is not defined');
            return;
        } else if (code == null) {
            toastError("Can't submit Empty Code");
            return;
        }
        const res = await submitApi.submit({
            roomId: roomInfo?.id,
            questionId: questionId,
            code: code,
            language: select,
        });
        console.log('res.data', res.data);
        setResInfo(res.data);

        if (res.data.status === 200) {
            setResInfo(res.data);
            toastSuccess(res.data.message);
        } else {
            toastError('Submit fail');
        }

        setShowResult(true);

        submitHistoryApi.getSubmitHistoryByQuestion(questionId).then((res) => {
            res.data.data.items.map((item) => {
                if (item.account.id == idUser) {
                    setScore(item.score);
                    setTotalTime(item.time);
                }
            });
        });
    };
    console.log('resInfo', resInfo);
    const finish = async () => {
        let res = await userRoomApi.postFinish(location.state.userRoomId);
        console.log(res);
        if (res.data.status === 200) {
            navigate('/', { state: { success: true } });
            toastSuccess(res.data.message);
        } else if (res.data.status === 400) {
            toastError(res.data.err);
        }
    };

    useEffect(() => {
        authApi.getUser().then((res) => {
            setIdUser(res.data.id);
            console.log('accountID: ', res.data.id);
        });
    }, []);

    return (
        <Container className="p-2 h-100">
            <WrapRightSection>
                <BoxEditor maxHeight={showResult}>
                    <CodeMirror
                        className="editor"
                        value={code}
                        // width="100%"
                        style={{ transition: `all 0.4s ease-in;` }}
                        theme={tokyoNight}
                        height="calc(100vh - 30vh);"
                        maxHeight={showResult ? '40vh' : 'calc(100vh - 30vh)'}
                        extensions={[cppLanguage, javaLanguage]}
                        options={{
                            lineWrapping: 'true',
                            lineNumbers: 'true',
                            autoCloseBrackets: true,
                        }}
                        onChange={(event) => {
                            setCode(event);
                        }}
                    />
                </BoxEditor>

                <ControllerArena>
                    <Stack direction="horizontal" className="justify-content-between">
                        <div className="text-white btn border-blue">
                            Submit: {resInfo ? resInfo?.data?.times?.current : '_ '}/
                            {roomInfo.questions[currentQuestion].maxSubmitTimes} Times
                        </div>
                        <ChooseQWrapper>
                            <Dropdown className="d-inline mx-2" onSelect={handleSelectChange}>
                                <Dropdown.Toggle
                                    id="dropdown-autoclose-true"
                                    className="bg border button head"
                                >
                                    {select}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="bg border transform menu">
                                    {langs.map((type) => {
                                        return (
                                            <Dropdown.Item eventKey={type.name} key={type.id}>
                                                {type.name}
                                            </Dropdown.Item>
                                        );
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>
                        </ChooseQWrapper>
                    </Stack>
                    <Stack direction="horizontal" className="flex-end">
                        <div className="flex-end">
                            <div className="text-white btn submit-btn" onClick={submitCode}>
                                Submit
                            </div>
                            <div className="text-white btn finish-btn" onClick={finish}>
                                Finish
                            </div>
                        </div>
                    </Stack>
                    {showResult && (
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row style={{ padding: '0 10px', height: '220px' }}>
                                <Col sm={3} className="p-0 m-y-20">
                                    <ControllerNav>
                                        <ControllerNavLink eventKey="first">
                                            <Nav.Link eventKey="first">Result</Nav.Link>
                                        </ControllerNavLink>
                                        <ControllerNavLink eventKey="second">
                                            <Nav.Link eventKey="second">Message</Nav.Link>
                                        </ControllerNavLink>
                                        <ControllerNavLink eventKey="third">
                                            <Nav.Link
                                                eventKey="third"
                                                className="text-green center"
                                            >
                                                <IconCheck></IconCheck>TestCase
                                            </Nav.Link>
                                        </ControllerNavLink>
                                    </ControllerNav>
                                </Col>
                                <Col sm={9} className="p-0">
                                    <WrapperResult>
                                        <Tab.Content className="h-100 tabContain text-white no-cursor">
                                            <TabPane
                                                eventKey="first"
                                                className="h-100 tabPane bg-dark"
                                            >
                                                <Row style={{ height: '33%', margin: 0 }}>
                                                    <Col sm={6} className="center">
                                                        <p className="yellow-styled">
                                                            Compiler Status
                                                        </p>
                                                    </Col>
                                                    <Col sm={6} className="center">
                                                        {resInfo?.status == 200 ? (
                                                            <div className="btn text-green w-230">
                                                                SUCCESS
                                                            </div>
                                                        ) : (
                                                            <div className="btn text-red w-230">
                                                                FAILED
                                                            </div>
                                                        )}
                                                    </Col>
                                                </Row>
                                                <Row style={{ height: '33%', margin: 0 }}>
                                                    <Col sm={6} className="center">
                                                        <p className="yellow-styled">Your Score</p>
                                                    </Col>
                                                    <Col sm={6} className="center">
                                                        <div className="btn text-white w-230 border-blue">
                                                            {score} - Test Cases
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row style={{ height: '33%', margin: 0 }}>
                                                    <Col sm={6} className="center">
                                                        <p className="yellow-styled"> Total Time</p>
                                                    </Col>
                                                    <Col sm={6} className="center">
                                                        <div className="btn text-white w-230 border-blue">
                                                            {resInfo
                                                                ? resInfo?.data?.result?.execTime
                                                                : '_ '}
                                                            ms
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                            <TabPane
                                                eventKey="second"
                                                className="h-100 tabPane p-20 err-wrapper bg-dark"
                                            >
                                                <p className="yellow-styled">Compiler Message</p>

                                                {resInfo.err ? (
                                                    <div className="err-message">{resInfo.err}</div>
                                                ) : (
                                                    <div className="success-message">
                                                        Submit successfully !
                                                    </div>
                                                )}
                                            </TabPane>
                                            <TabPane
                                                eventKey="third"
                                                className="h-100 tabPane bg-dark"
                                            >
                                                <p className="yellow-styled p-20"></p>
                                            </TabPane>
                                        </Tab.Content>
                                    </WrapperResult>
                                </Col>
                            </Row>
                        </Tab.Container>
                    )}
                </ControllerArena>
            </WrapRightSection>
        </Container>
    );
};

export default RightSection;
