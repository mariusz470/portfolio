import styled from "styled-components";

export const ContactFormContainer = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1.5fr 0.1fr;
  grid-template-rows: 0.3fr 0.4fr 0.4fr 3fr 0.9fr;
  gap: 0px 0px;
  grid-template-areas:
    ". Title x"
    "emailText email ."
    "emailTitleText emailTitle ."
    "messageText message ."
    ". callToAction .";
`;

export const ContactTitle = styled.h1`
  grid-area: Title;
`;

export const ContactEmailText = styled.p`
  grid-area: emailText;
`;

export const ContactEmail = styled.input`
  grid-area: email;
`;

export const ContactEmailTitleText = styled.p`
  grid-area: emailTitleText;
`;

export const ContactEmailTitle = styled.input`
  grid-area: emailTitle;
`;

export const ContactMessageText = styled.p`
  grid-area: messageText;
`;

export const ContactMessage = styled.textarea`
  grid-area: message;
`;

export const ContactSend = styled.button`
  grid-area: callToAction;
`;

export const ContactClose = styled.button`
  grid-area: x;
`;
