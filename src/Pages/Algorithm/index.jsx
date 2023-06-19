import { useState } from 'react';

import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

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

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function Algorithm() {
    const [activeKey, setActiveKey] = useState('first');

    const handleTabSelect = (key) => {
        setActiveKey(key);
    };

    return (
        <>
            <AlgorithmWrapper fluid={'lg'}>
                <Row className="">
                    <Col style={{ marginTop: '85px' }}>
                        <AlgorithmContent>
                            <ArenaAlgorithm />
                        </AlgorithmContent>
                    </Col>
                </Row>
            </AlgorithmWrapper>
        </>
    );
}

export default Algorithm;
