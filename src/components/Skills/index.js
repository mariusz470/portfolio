import React from "react";
import {
  SkillsContainer,
  SkillsCard,
  SkillsH1,
  SkillsH2,
  SkillsIcon,
  SkillsP,
  SkillsWrapper,
} from "./SkillsElements";
import htmlIcon from "../../images/html5.svg";
import cssIcon from "../../images/css3.svg";
import jsIcon from "../../images/javascript.svg";
import reactIcon from "../../images/react-2.svg";
import nodejsIcon from "../../images/node-js-logo.svg";
import mongodbIcon from "../../images/mongodb-icon-1.svg";
import { DataEng, DataPL } from "./Data";
import { useLanguage } from "../../context";

const Skills = () => {
  const { english } = useLanguage();

  const Data = english ? DataEng : DataPL;

  return (
    <SkillsContainer id="skills">
      <SkillsH1>{Data.h1}</SkillsH1>
      <SkillsWrapper>
        <SkillsCard>
          <SkillsIcon src={htmlIcon} />
          <SkillsH2>HTML</SkillsH2>
          <SkillsP>{Data.html}</SkillsP>
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon src={cssIcon} />
          <SkillsH2>CSS</SkillsH2>
          <SkillsP>{Data.css}</SkillsP>
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon src={jsIcon} />
          <SkillsH2>Java Script</SkillsH2>
          <SkillsP>{Data.js}</SkillsP>
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon src={reactIcon} />
          <SkillsH2>React</SkillsH2>
          <SkillsP>{Data.react}</SkillsP>
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon src={nodejsIcon} />
          <SkillsH2>Node.js</SkillsH2>
          <SkillsP>{Data.node}</SkillsP>
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon src={mongodbIcon} />
          <SkillsH2>MongoDB</SkillsH2>
          <SkillsP>{Data.mongo}</SkillsP>
        </SkillsCard>
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default Skills;
