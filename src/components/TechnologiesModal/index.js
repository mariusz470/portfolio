import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const TechnologiesModal = ({ show, onClose }) => {
  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
    >
      <div class="grid-container">
        <div class="Title"></div>
        <div class="x"></div>
        <div class="Courses"></div>
        <div class="Projects"></div>
      </div>
    </Modal>
  );
};

export default TechnologiesModal;
