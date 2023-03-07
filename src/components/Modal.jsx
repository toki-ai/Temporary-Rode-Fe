import { useState } from 'react';

import { Button, Modal } from 'react-bootstrap';

import { BtnStyle } from './styled';

export default function ModalComponent(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <BtnStyle className="text-break">
                <Button className="btn-flat-1" size="xxl" onClick={handleShow}>
                    Example
                </Button>
            </BtnStyle>
            <Modal className="modal-dialog-centered" show={show} onHide={handleClose}>
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
        </>
    );
}
