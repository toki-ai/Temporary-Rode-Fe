import { Col, Container, Row } from 'react-bootstrap';

import ButtonCustom from './components/Button';
import DropDownCustom from './components/DropDown';
import SearchRoom from './components/SearchRoom';
import TableRoom from './components/Tablle';
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
                                <SearchRoom
                                    props={{
                                        placeholder: 'Search room...',
                                    }}
                                />
                            </Col>
                            <Col className="col-4">
                                <DropDownCustom
                                    props={{
                                        name: 'Visibility:',
                                        title: 'Select',
                                    }}
                                />
                            </Col>
                            <Col className="col-3 d-flex align-items-center">
                                <ButtonCustom
                                    props={{
                                        text: 'Create room',
                                        className: 'bg-primary-1 text-light',
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
