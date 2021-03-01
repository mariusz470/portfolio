import React, { useState } from "react";
import { Button } from "../ButtonElement";
import {
  LearningContainer,
  LearningWrapper,
  LearningRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
} from "./LearningElements";
import img from "../../images/tabs.svg";
import LearningModal from "./LearningModal";
import { DataEng, DataPL } from "./Data";
import { useLanguage } from "../../context";

const Learning = () => {
  const [show, setShow] = useState(false);

  const onOpen = () => setShow(true);

  const onClose = () => setShow(false);

  const { english } = useLanguage();

  const Data = english ? DataEng : DataPL;

  return (
    <React.Fragment>
      <LearningContainer id="learning">
        <LearningWrapper>
          <LearningRow>
            <Column1>
              <TextWrapper>
                <TopLine>{Data.topLine}</TopLine>
                <Heading>{Data.heading}</Heading>
                <Subtitle>{Data.subTitle}</Subtitle>
                <BtnWrap>
                  <Button onClick={onOpen}>{Data.button}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt="contact" />
              </ImgWrap>
            </Column2>
          </LearningRow>
        </LearningWrapper>
        <LearningModal onClose={onClose} show={show} />
      </LearningContainer>
    </React.Fragment>
  );
};

export default Learning;
