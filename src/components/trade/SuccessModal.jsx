import React from "react";
import { Modal, Button } from "react-bootstrap";

const SuccessModal = ({ show, handleClose, message }) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>출고 요청 성공</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          메인 화면으로
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SuccessModal;
