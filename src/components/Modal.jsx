import { Button, Modal, CloseButton } from "react-bootstrap";
import { useState } from "react";
export default function ModalComponent(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <style type='text/css'>
                {`
            .btn-flat {
                background-color: #FFFFE8;
                color: #AACB73;
            }
            .btn-flat:hover {
                background-color: #CDE990;
            }
            .btn-closes {
                background-color: #CDE990;
                color: #FFFFFF;
            }
            .btn-closes:hover {
                background-color: rgba(205, 233, 144, 0.7);
                color: #FFFFFF;
                transform: scale(1.025);
            }
            .btn-save {
                background-color: #AACB73;
                color: #FFFFFF;
            }
            
            .btn-save:hover {
                background-color: rgba(170, 203, 115, 0.7);
                color: #FFFFFF;
                transform: scale(1.025);
            }
            .btn-xxl {
                margin: 0.2em;
                padding: 0.2em;
                font-size: 2em;
            }
            `}
            </style>
            <Button variants="flat" size="xxl" onClick={handleShow}>Ex</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.body}</Modal.Body>
                <Modal.Footer>
                    <Button variant="closes" onClick={handleClose}>Close</Button>
                    <Button variant="save" onClick={handleClose}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
