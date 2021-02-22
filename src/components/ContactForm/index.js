import React from "react";
import Modal from "react-modal";
import {
  ContactClose,
  ContactEmail,
  ContactEmailText,
  ContactEmailTitle,
  ContactEmailTitleText,
  ContactFormContainer,
  ContactMessage,
  ContactMessageText,
  ContactSend,
  ContactTitle,
} from "./ContactFormElements";

Modal.setAppElement("#root");

const ContactForm = ({ onClose, show }) => {
  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
    >
      <ContactFormContainer>
        <ContactTitle>Contact Form</ContactTitle>
        <ContactEmailText>Your email:</ContactEmailText>
        <ContactEmail />
        <ContactEmailTitleText>Subject:</ContactEmailTitleText>
        <ContactEmailTitle />
        <ContactMessageText>Write your message</ContactMessageText>
        <ContactMessage />
        <ContactSend />
        <ContactClose onClick={onClose} />
      </ContactFormContainer>
    </Modal>
  );
};

export default ContactForm;
