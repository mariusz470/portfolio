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

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsH1>Technologies I use</SkillsH1>
      <SkillsWrapper>
        <SkillsCard>
          <SkillsIcon src={htmlIcon} />
          <SkillsH2>HTML</SkillsH2>
          <SkillsP>
            Now I use mostly JSX but I have strong fundamentals of HTML.
          </SkillsP>
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon src={cssIcon} />
          <SkillsH2>CSS</SkillsH2>
          <SkillsP>
            I know CSS pretty good but there is a lot to improve.
          </SkillsP>
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon src={jsIcon} />
          <SkillsH2>Java Script</SkillsH2>
          <SkillsP>
            I know javascript enough to use it in React smoothly.
          </SkillsP>
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon src={reactIcon} />
          <SkillsH2>React</SkillsH2>
          <SkillsP>
            I use React with hooks and useContext api. I tried React Native too.
          </SkillsP>
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon src={nodejsIcon} />
          <SkillsH2>NodeJS</SkillsH2>
          <SkillsP>
            I used nodeJS to create backend for some of my apps.
          </SkillsP>
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon src={mongodbIcon} />
          <SkillsH2>MongoDB</SkillsH2>
          <SkillsP>
            I used MongoDB as a database for some of my projects.
          </SkillsP>
        </SkillsCard>
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default Skills;
