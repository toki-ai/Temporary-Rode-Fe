import { useState } from 'react';

import { useLoaderData } from 'react-router-dom';

import ModalComponent from '../../components/Modal/Modal';
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
    const codeTemplate = roomInfo?.questions[0].codeTemplate;

    const [code, setCode] = useState(codeTemplate);
    const [count, setCount] = useState(0);
    const [submit, setSubmit] = useState();
    const [show, setShow] = useState(false);
    return (
        <Row className="p-3">
            {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
            <ModalComponent show={show} setShow={setShow} title={'ERROR'} body={'hello'} />
            <Col xs={12} md={3} className="px-4">
                <RoomInfo data={roomInfo} submit={submit} />
            </Col>
            <Col xs={12} md={5} className="px-4">
                <ArenaCSSCode
                    submitService={{ submit, setSubmit }}
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
