import React, { useState } from "react";
import Modal from "react-modal";
import emailjs from "emailjs-com";
import {
  CloseModal,
  ContactClose,
  ContactEmail,
  ContactEmailText,
  ContactFormContainer,
  ContactMessage,
  ContactSend,
  ContactTitle,
  SendAnother,
  SuccessMessage,
  SuccessWrapper,
  ButtonsWrapper,
} from "./ContactFormElements";
import { DataEng, DataPL } from "./Data";
import { useLanguage } from "../../context";

Modal.setAppElement("#root");

const ContactForm = ({ onClose, show }) => {
  const [send, setSend] = useState(false);

  const { english } = useLanguage();

  const Data = english ? DataEng : DataPL;

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "portfolio",
        "portfoliocontact",
        e.target,
        "user_IPEsW4x44nUmcE1qnGQRp"
      )
      .then(
        (result) => {
          if (result.status === 200) setSend(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  if (send) {
    return (
      <Modal
        isOpen={show}
        onRequestClose={onClose}
        className="modal"
        overlayClassName="overlay"
      >
        <ContactTitle>{Data.title}</ContactTitle>
        <SuccessWrapper>
          <SuccessMessage>{Data.successMessage}</SuccessMessage>
          <ButtonsWrapper>
            <SendAnother onClick={() => setSend(false)}>
              {Data.sendAnother}
            </SendAnother>
            <CloseModal onClick={onClose}>{Data.close}</CloseModal>
          </ButtonsWrapper>
        </SuccessWrapper>
      </Modal>
    );
  } else {
    return (
      <Modal
        isOpen={show}
        onRequestClose={onClose}
        className="modal"
        overlayClassName="overlay"
      >
        <ContactTitle>{Data.title}</ContactTitle>
        <ContactFormContainer onSubmit={sendEmail}>
          <ContactEmailText>{Data.name}</ContactEmailText>
          <ContactEmail
            type="text"
            placeholder={Data.namePlaceholder}
            name="name"
          />
          <ContactEmailText>{Data.email}</ContactEmailText>
          <ContactEmail
            required
            type="text"
            placeholder={Data.emailPlaceholder}
            name="email"
          />
          <ContactEmailText>{Data.tel}</ContactEmailText>
          <ContactEmail
            type="text"
            placeholder={Data.telPlaceholder}
            name="tel"
          />
          <ContactEmailText>{Data.subject}</ContactEmailText>
          <ContactEmail placeholder={Data.subjectPlaceholder} name="subject" />
          <ContactEmailText>{Data.message}</ContactEmailText>
          <ContactMessage
            required
            placeholder={Data.messagePlaceholder}
            name="message"
          />
          <ContactSend type="submit" value={Data.submit} />
        </ContactFormContainer>

        <ContactClose onClick={onClose} />
      </Modal>
    );
  }
};

export default ContactForm;
