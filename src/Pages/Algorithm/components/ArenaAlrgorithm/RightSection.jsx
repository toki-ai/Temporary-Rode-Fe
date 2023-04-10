import { useState } from 'react';

import { Col, Container, Nav, Row, Stack, Tab, TabPane } from 'react-bootstrap';
import { Check } from 'react-bootstrap-icons';

import { BoxEditor } from '../../styled';
import {
    ControllerArena,
    ControllerNav,
    ControllerNavLink,
    SelectLanguage,
    WrapperResult,
    IconCheck,
} from '../LeaderBoard/styled';

import { htmlLanguage } from '@codemirror/lang-html';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import CodeMirror from '@uiw/react-codemirror';

const RightSection = () => {
    const [showResult, setShowResult] = useState(false);
    return (
        <Container className="p-2">
            <BoxEditor>
                <CodeMirror
                    className="editor"
                    // value={code ? code : CodeTemplateTmp}
                    // width="100%"
                    theme={tokyoNight}
                    height="calc(100vh - 65vh);"
                    extensions={[htmlLanguage]}
                    options={{ lineWrapping: 'true', lineNumbers: 'true', autoCloseBrackets: true }}
                    // onChange={(e) => {
                    //     setCode(e);
                    //     setCount(e.length);
                    // }}
                />
            </BoxEditor>

            <ControllerArena>
                <Stack direction="horizontal" className="justify-content-between">
                    <div className="text-white btn border-blue">Submit: 3/5 Times</div>
                    <SelectLanguage aria-label="Default select example" className="center">
                        <option value="">Select Language</option>
                        <option value="c">C / C++</option>
                        <option value="Javascript">Javascript</option>
                        <option value="java">Java</option>
                    </SelectLanguage>
                </Stack>
                <Stack direction="horizontal" className="flex-end">
                    <div className="flex-end">
                        <div
                            className="text-white btn submit-btn"
                            onClick={() => setShowResult(true)}
                        >
                            Submit
                        </div>
                        <div className="text-white btn finish-btn">Finish</div>
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
                                        <Nav.Link eventKey="third" className="text-green center">
                                            <IconCheck></IconCheck>TestCase
                                        </Nav.Link>
                                    </ControllerNavLink>
                                </ControllerNav>
                            </Col>
                            <Col sm={9} className="p-0">
                                <WrapperResult>
                                    <Tab.Content className="h-100 tabContain text-white no-cursor">
                                        <TabPane eventKey="first" className="h-100 tabPane bg-dark">
                                            <Row style={{ height: '33%', margin: 0 }}>
                                                <Col sm={6} className="center">
                                                    <p className="yellow-styled">Compiler Status</p>
                                                </Col>
                                                <Col sm={6} className="center">
                                                    <div className="btn text-green w-230">
                                                        Success
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row style={{ height: '33%', margin: 0 }}>
                                                <Col sm={6} className="center">
                                                    <p className="yellow-styled">Your Score</p>
                                                </Col>
                                                <Col sm={6} className="center">
                                                    <div className="btn text-white w-230 border-blue">
                                                        20/50 Test Cases
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row style={{ height: '33%', margin: 0 }}>
                                                <Col sm={6} className="center">
                                                    <p className="yellow-styled"> Total Time</p>
                                                </Col>
                                                <Col sm={6} className="center">
                                                    <div className="btn text-white w-230 border-blue">
                                                        2ms
                                                    </div>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane
                                            eventKey="second"
                                            className="h-100 tabPane p-20 err-wrapper bg-dark"
                                        >
                                            <p className="yellow-styled">Compiler Message</p>
                                            <div className="err-message"></div>
                                        </TabPane>
                                        <TabPane eventKey="third" className="h-100 tabPane bg-dark">
                                            <p className="yellow-styled p-20">
                                                Ngươi quá non nhóc ạ !
                                            </p>
                                        </TabPane>
                                    </Tab.Content>
                                </WrapperResult>
                            </Col>
                        </Row>
                    </Tab.Container>
                )}
            </ControllerArena>
        </Container>
    );
};

export default RightSection;
