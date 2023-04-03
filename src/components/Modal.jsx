import { Button, Modal } from 'react-bootstrap';

import { BtnStyle } from './styled';

export default function ModalComponent(props) {
    return (
        <>
            <Modal
                className="modal-dialog-centered"
                centered
                show={props.show}
                onHide={props.close}
            >
                <Modal.Header closeButton>
                    <Modal.Title className={props.className}>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.body}</Modal.Body>
                <Modal.Footer>
                    <BtnStyle>
                        <Button variant={props.variant1} size="xxl" onClick={props.close}>
                            {props.value}
                        </Button>
                        <Button variant={props.variant2} size="xxl" onClick={props.close}>
                            {props.value2}
                        </Button>
                    </BtnStyle>
                </Modal.Footer>
            </Modal>
        </>
    );
}
