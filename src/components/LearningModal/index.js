import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const LearningModal = () => {
  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
    >
      <div class="grid-container">
        <div class="academic"></div>
        <div class="Courses"></div>
        <div class="x"></div>
      </div>
    </Modal>
  );
};

export default LearningModal;
