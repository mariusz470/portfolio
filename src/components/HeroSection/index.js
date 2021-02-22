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

const HeroSection = () => {
  const [hover, setHover] = useState(false);

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
        <HeroP>
          I am a beginner frontend developer who loves to code react apps.
        </HeroP>
        <HeroBtnWrapper onMouseEnter={onHover} onMouseLeave={onHover}>
          <Button
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            See my featured projects {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
