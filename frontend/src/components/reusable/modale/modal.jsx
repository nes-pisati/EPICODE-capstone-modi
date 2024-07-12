import React from 'react'
import Modal from 'react-bootstrap/Modal';
import BackofficeBtn from '../backoffice button/backoffice-button'

export default function BackofficeModal({ body, closeModal, doAction, isNotToShow, secondButtonText}) {
    return (
        <>
            <Modal show onHide={closeModal}>
                <Modal.Body>{body}</Modal.Body>
                <Modal.Footer>
                    <BackofficeBtn onClick={closeModal} text={"chiudi"}/>
                    {!isNotToShow && <BackofficeBtn onClick={doAction} text={secondButtonText} />}
                </Modal.Footer>
            </Modal>
        </>
    )
}
