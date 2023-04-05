import { AlgorithmWrapper } from './styled';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function Algorithm() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <AlgorithmWrapper>
                <Row className="h-100">
                    <Col sm={2} className="p-0 algorithm-nav">
                        <NavStyled variant="pills" className="flex-column">
                            <NavItemStyled>
                                <Nav.Link eventKey="first">
                                    <TextStyled>Problem</TextStyled>
                                </Nav.Link>
                            </NavItemStyled>
                            <NavItemStyled>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        <TextStyled>Submission</TextStyled>
                                    </Nav.Link>
                                </Nav.Item>
                            </NavItemStyled>
                            <NavItemStyled>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        <TextStyled>Leaderboard</TextStyled>
                                    </Nav.Link>
                                </Nav.Item>
                            </NavItemStyled>
                        </NavStyled>
                    </Col>
                    {/* <Col sm={10} className="p-0 algorithm-nav">
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <h1>Problem</h1>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <h1>Submission</h1>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <LeaderBoard />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col> */}
                </Row>
            </AlgorithmWrapper>
        </Tab.Container>
    );
}

export default Algorithm;
