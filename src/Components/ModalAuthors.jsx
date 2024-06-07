// ModalAuthors.jsx

// React
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Bootstrap React
import { Modal, Button } from 'react-bootstrap';

// Return
const ModalAuthors = ( { buttonLabel, modalData } ) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="link" onClick={handleShow}>
                {buttonLabel}
            </Button>
            <Modal show={show} onHide={handleClose} centered size="md">
                <Modal.Header closeButton />
                <Modal.Body>
                    <h2 className='mb-4'>{modalData.name}</h2>
                    <p dangerouslySetInnerHTML={{ __html: modalData.ref }} />
                    <p className='mb-0'>
                        <a className='fst-italic text-decoration-none' href={`mailto:${modalData.email}`} title={`Enviar correo electronico a: ${modalData.email}`}>
                            {modalData.email}
                        </a>
                    </p>
                </Modal.Body>
                <Modal.Footer />
            </Modal>
        </>
    );
}

// PropTypes
ModalAuthors.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
    modalData: PropTypes.object.isRequired,
};

// Export
export default ModalAuthors;