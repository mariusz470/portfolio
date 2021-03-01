import React from "react";
import { Link } from "react-scroll";
import { Button } from "../ButtonElement";
import {
  Column2,
  Img,
  ImgWrap,
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
} from "./InfoElements";
import { DataEng, DataPL } from "./Data";
import { useLanguage } from "../../context";

const InfoSection = () => {
  const { english } = useLanguage();

  const Data = english ? DataEng : DataPL;

  return (
    <React.Fragment>
      <InfoContainer lightBg={Data.lightBg} id={Data.id}>
        <InfoWrapper>
          <InfoRow imgStart={Data.imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{Data.topLine}</TopLine>
                <Heading lightText={Data.lightText}>{Data.headline}</Heading>
                <Subtitle darkText={Data.darkText}>{Data.description}</Subtitle>
                <BtnWrap>
                  <Link
                    to={Data.buttonTo}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    <Button
                      primary={Data.primary ? 1 : 0}
                      dark={Data.dark ? 1 : 0}
                      dark2={Data.dark2 ? 1 : 0}
                    >
                      {Data.buttonLabel}
                    </Button>
                  </Link>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={Data.img} alt={Data.alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </React.Fragment>
  );
};

export default InfoSection;
