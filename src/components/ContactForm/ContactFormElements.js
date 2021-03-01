import { AiOutlineCloseCircle } from "react-icons/ai";
import styled from "styled-components";
import { Button } from "../ButtonElement";

export const ContactFormContainer = styled.form`
  margin-top: 2rem;
  padding-left: 2rem;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1.5fr 1fr;
  gap: 0px 10px;
  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactTitle = styled.h1`
  text-align: center;
  padding-top: 1rem;
`;

export const ContactEmailText = styled.label`
  height: 1rem;
`;

export const ContactEmail = styled.input`
  height: 1.5rem;
  padding-left: 0.5rem;
`;

export const ContactMessage = styled.textarea`
  padding: 0.5rem;
`;

export const ContactSend = styled.input`
  border-radius: 20px;
  background: #010606;
  white-space: nowrap;
  padding: 8px 15px;
  color: #fff;
  font-size: 1.1rem;
  outline: none;
  border: 2px solid #01bf71;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #01bf71;
  }
`;

export const ContactClose = styled(AiOutlineCloseCircle)`
  position: absolute;
  right: 0;
  top: 80px;
  color: #00ffb9;
  font-size: 2rem;
`;

export const SuccessWrapper = styled.div`
  margin-top: 10vh;
  display: grid;
  justify-content: center;
`;

export const SuccessMessage = styled.p`
  padding-bottom: 2rem;
  font-size: 2rem;
`;

export const ButtonsWrapper = styled.div`
  display: grid;
  grid-column: 1fr 1fr;
  gap: 1rem;
`;

export const SendAnother = styled(Button)``;

export const CloseModal = styled(Button)``;
