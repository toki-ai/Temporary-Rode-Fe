import ArenaAlgorithm from './components/ArenaAlrgorithm';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import PaginationLeaderboard from './components/LeaderBoard/PaginationLeaderboard';
import Submission from './components/Submission/Submission';
import SubmitEx from './components/SubmitExample';
import {
    TabPane,
    AlgorithmWrapper,
    AlgorithmNav,
    AlgorithmNavItem,
    AlgorithmContent,
} from './styled';

// import { NavStyled, NavItemStyled, TextStyled } from './styled';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function Algorithm() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <AlgorithmWrapper>
                <Row className="p-4 m-y-20">
                    <Col sm={1} className="p-0 m-y-20">
                        <AlgorithmNav>
                            <AlgorithmNavItem eventKey="first">
                                <Nav.Link eventKey="first" className="algorithm-nav-title">
                                    Problem
                                </Nav.Link>
                            </AlgorithmNavItem>
                            <AlgorithmNavItem eventKey="second" className="border-tran">
                                <Nav.Link eventKey="second" className="algorithm-nav-title">
                                    Submission
                                </Nav.Link>
                            </AlgorithmNavItem>
                            <AlgorithmNavItem eventKey="third" className=" ">
                                <Nav.Link eventKey="third" className="algorithm-nav-title">
                                    LeaderBoard
                                </Nav.Link>
                            </AlgorithmNavItem>
                        </AlgorithmNav>
                    </Col>
                    <Col sm={11} className="p-0">
                        <AlgorithmContent>
                            <Tab.Content className="h-100">
                                <TabPane eventKey="first" className="h-100">
                                    <ArenaAlgorithm />
                                </TabPane>
                                <TabPane eventKey="second" className="h-100">
                                    <Submission />
                                </TabPane>
                                <TabPane eventKey="third" className="h-100">
                                    <LeaderBoard />
                                </TabPane>
                            </Tab.Content>
                        </AlgorithmContent>
                    </Col>
                </Row>
            </AlgorithmWrapper>
        </Tab.Container>
    );
}

export default Algorithm;
