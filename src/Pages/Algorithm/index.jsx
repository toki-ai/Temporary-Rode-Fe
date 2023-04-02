import SubmitEx from './components/SubmitExample';
import { NavStyled, NavItemStyled, TextStyled } from './styled';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function Algorithm() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={2}>
                    <NavStyled variant="pills" className="flex-column">
                        <NavItemStyled>
                            <Nav.Link eventKey="first">
                                <TextStyled>Tab 1</TextStyled>
                            </Nav.Link>
                        </NavItemStyled>
                        <Nav.Item>
                            <Nav.Link eventKey="second">
                                {' '}
                                <TextStyled>Tab 2</TextStyled>
                            </Nav.Link>
                        </Nav.Item>
                    </NavStyled>
                </Col>
                <Col sm={10}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <h1> MInh first</h1>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <h1> MInh second</h1>
                            <h1> MInh second</h1>
                            <h1> MInh second</h1>
                            <h1> MInh second</h1>
                            <h1> MInh second</h1>
                            <h1> MInh second</h1>
                            <h1> MInh second</h1>
                            <h1> MInh second</h1>
                            <h1> MInh second</h1>
                            <h1> MInh second</h1>
                            <h1> MInh second</h1>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default Algorithm;
