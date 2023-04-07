import { useState } from 'react';

import { useLoaderData } from 'react-router-dom';

import { CodeTemplateTmp } from '../../utils/Constant/Dummy';
import roomApi from '../../utils/api/roomApi';
import ArenaCSSCode from './components/ArenaCSSCode';
import Output from './components/Output';
import RoomInfo from './components/RoomInfo';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ArenaCSS = () => {
    const roomInfo = useLoaderData();
    const codeTemplate = roomInfo?.questions[0]?.codeTemplate
        ? roomInfo?.questions[0].codeTemplate
        : CodeTemplateTmp;
    const [code, setCode] = useState(codeTemplate);
    const [count, setCount] = useState(0);
    console.log(roomInfo);
    return (
        <Row className="p-3">
            {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}

            <Col xs={12} md={3} className="px-4">
                <RoomInfo data={roomInfo} />
            </Col>
            <Col xs={12} md={5} className="px-4">
                <ArenaCSSCode
                    setCode={setCode}
                    setCount={setCount}
                    count={count}
                    code={code}
                    data={roomInfo}
                />
            </Col>
            <Col xs={12} md={4} className="px-4">
                <Output code={code} data={roomInfo} />
            </Col>
        </Row>
    );
};

export default ArenaCSS;
