import React, { useState } from 'react';

import { Button, Modal } from 'react-bootstrap';

import { MyButton, MyModal } from '../styled';

function ModalJoinRoom({ handleClose, show, inputRoom, handlePostRoom }) {
    const info = { title: 'Join Room', body: `Are you want to join  room ${inputRoom} ?` };
    const handleJoinConfirm = (e) => {
        handlePostRoom(e);
        handleClose();
    };
    return (
        <>
            <MyModal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>{info.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{info.body}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <MyButton variant="primary" onClick={handleJoinConfirm}>
                        Join
                    </MyButton>
                </Modal.Footer>
            </MyModal>
        </>
    );
}

export default ModalJoinRoom;
