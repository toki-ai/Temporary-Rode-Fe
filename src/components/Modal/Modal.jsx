import { useState } from 'react';

import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import ButtonStyled from '../Button';
import { BtnStyle } from './styled';

export default function ModalComponent(props) {
    const navigate = useNavigate();
    const handleClose = () => {
        // if (props.success) {
        //     navigate('/');
        // }
        props.setShow(!props.show);
    };

    return (
        <>
            <Modal
                className="modal-dialog-centered"
                show={props.show}
                onHide={handleClose}
                centered
            >
                <Modal.Header>
                    <Modal.Title className={props.success ? 'text-success' : 'text-danger'}>
                        {props.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.body}</Modal.Body>
                <Modal.Footer>
                    <BtnStyle>
                        <ButtonStyled buttonType="base" size="xxl" onClick={handleClose}>
                            OK
                        </ButtonStyled>
                    </BtnStyle>
                </Modal.Footer>
            </Modal>
        </>
    );
}
