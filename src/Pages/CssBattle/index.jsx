import { useState } from 'react';

import ArenaCSSCode from './components/ArenaCSSCode';
import Output from './components/Output';
import RoomInfo from './components/RoomInfo';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ArenaCSS = () => {
    const [code, setCode] = useState();
    const [count, setCount] = useState(0);
    return (
        <Row className="p-3">
            {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}

            <Col xs={12} md={3} className="px-4">
                <RoomInfo />
            </Col>
            <Col xs={12} md={5} className="px-4">
                <ArenaCSSCode setCode={setCode} setCount={setCount} count={count} code={code} />
            </Col>
            <Col xs={12} md={4} className="px-4">
                <Output code={code} />
            </Col>
        </Row>
    );
};

export default ArenaCSS;
