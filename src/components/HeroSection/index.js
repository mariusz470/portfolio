import React, { useState } from "react";
import {
  HeroBg,
  HeroContainer,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";
import { Link } from "react-scroll";
import { DataEng, DataPL } from "./Data";
import { useLanguage } from "../../context";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const { english } = useLanguage();

  const Data = english ? DataEng : DataPL;

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay muted loop src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Frontend Developer</HeroH1>
        <HeroP>{Data.p}</HeroP>
        <HeroBtnWrapper onMouseEnter={onHover} onMouseLeave={onHover}>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            {" "}
            <Button primary={true} dark={true} big={true} fontBig={true}>
              {Data.button} {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </Link>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
