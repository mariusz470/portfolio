import React, { useState } from "react";
import { Button } from "../ButtonElement";
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
import img from "../../images/contact.svg";
import ContactForm from "../ContactForm";
import { DataEng, DataPL } from "./Data";
import { useLanguage } from "../../context";

const ContactMe = () => {
  const [show, setShow] = useState(false);

  const onOpen = () => setShow(true);

  const onClose = () => setShow(false);

  const { english } = useLanguage();

  const Data = english ? DataEng : DataPL;

  return (
    <React.Fragment>
      <ContactMeContainer id="contact">
        <ContactMeWrapper>
          <ContactMeRow>
            <Column1>
              <TextWrapper>
                <TopLine>{Data.topLine}</TopLine>
                <Heading>{Data.heading}</Heading>
                <Subtitle>
                  <p>{Data.tel} </p>{" "}
                  <a
                    style={{
                      textDecoration: "none",
                      color: "#01BF71",
                      fontWeight: "bold",
                    }}
                    href="tel:+48600946054"
                  >
                    +48 600 946 054
                  </a>
                </Subtitle>
                <Subtitle>
                  <p>email: </p>{" "}
                  <a
                    style={{
                      textDecoration: "none",
                      color: "#01BF71",
                      fontWeight: "bold",
                    }}
                    href="mailto:mariusz.kicinski@gmail.com"
                  >
                    mariusz.kicinski@gmail.com
                  </a>
                </Subtitle>
                <BtnWrap>
                  <Button onClick={onOpen}>{Data.button}</Button>
                  <a
                    href="https://github.com/mariusz470"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Button>{Data.github}</Button>
                  </a>
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
