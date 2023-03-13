import { Col, Row } from 'react-bootstrap';

import ButtonCustom from './components/Button';
import SearchBar from './components/SearchRoom/SearchBar';
import SelectCustom from './components/Select';
import TableRoom from './components/Table';
import { RoomStyle } from './style';

const AdminRoom = () => {
    return (
        <div>
            <RoomStyle>
                <div className="box-style">
                    <Col className="p-4">
                        <Row className="color-primary mb-3">
                            <h3 className="fw-bold">Room Management</h3>
                        </Row>
                        <Row className="d-flex justify-content-around align-items-center mb-3">
                            <Col className="col-5">
                                <SearchBar />
                            </Col>
                            <Col className="col-4 col-md-3 d-flex justify-content-center">
                                <SelectCustom
                                    props={{
                                        name: 'Visibility:',
                                    }}
                                />
                            </Col>
                            <Col className="col-3 col-md-4 d-flex align-items-center justify-content-end">
                                <ButtonCustom
                                    props={{
                                        text: 'Create room',
                                        className:
                                            'bg-primary-1 text-light d-flex align-items-center text-nowrap',
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="border-top">
                            <TableRoom />
                        </Row>
                    </Col>
                </div>
            </RoomStyle>
        </div>
    );
};
export default AdminRoom;
