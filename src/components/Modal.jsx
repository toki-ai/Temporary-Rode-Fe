import { useState } from 'react';

import { Button, Modal, CloseButton } from 'react-bootstrap';

import { BtnStyle, Container } from './styled';

export default function ModalComponent(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container>
            <BtnStyle>
                <Button className="btn-flat-1" size="xxl" onClick={handleShow}>
                    Example
                </Button>
            </BtnStyle>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.body}</Modal.Body>
                <Modal.Footer>
                    <BtnStyle>
                        <Button variant="closes" size="xxl" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="save" size="xxl" onClick={handleClose}>
                            Save
                        </Button>
                    </BtnStyle>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}
