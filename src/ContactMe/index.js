import React, { useState } from "react";
import { Button } from "../components/ButtonElement";
import {
  ContactMeContainer,
  ContactMeWrapper,
  ContactMeRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
} from "./ContactMeElements";
import img from "../images/svg3.svg";
import ContactForm from "../components/ContactForm";

const ContactMe = () => {
  const [show, setShow] = useState(false);

  const onOpen = () => setShow(true);

  const onClose = () => setShow(false);

  return (
    <React.Fragment>
      <ContactMeContainer id="contact">
        <ContactMeWrapper>
          <ContactMeRow>
            <Column1>
              <TextWrapper>
                <TopLine>Contact</TopLine>
                <Heading>Please contact me</Heading>
                <Subtitle>
                  "Telephone number: +48 600 946 054 email:
                  mariusz.kicinski@gmail.com"
                </Subtitle>
                <BtnWrap>
                  <Button onClick={onOpen}>Contact Form</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt="contact" />
              </ImgWrap>
            </Column2>
          </ContactMeRow>
        </ContactMeWrapper>
        <ContactForm onClose={onClose} show={show} />
      </ContactMeContainer>
    </React.Fragment>
  );
};

export default ContactMe;
