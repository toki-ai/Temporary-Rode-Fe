import * as React from 'react';

import { Button, Col, OverlayTrigger, Popover, Row } from 'react-bootstrap';

const popoverRight = (
    <Popover>
        <Col>
            <Row>
                <Button className="rounded-0 border-0" variant="item-style">
                    View
                </Button>
            </Row>
            <Row>
                <Button className="rounded-0  border-0" variant="outline">
                    Edit
                </Button>
            </Row>
            <Row>
                <Button className="rounded-0 px-4  border-0" variant="outline">
                    Delete
                </Button>
            </Row>
        </Col>
    </Popover>
);
const More = () => {
    return (
        <OverlayTrigger trigger="focus" placement="right" overlay={popoverRight}>
            <Button variant="outline border-0">
                <i className="bi bi-three-dots-vertical bg-secondary-1 btn-hover"></i>
            </Button>
        </OverlayTrigger>
    );
};
export default More;
