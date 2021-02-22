import React, { useState } from "react";
import {
  ProjectsContainer,
  ProjectsCard,
  ProjectsH1,
  ProjectsH2,
  ProjectsIcon,
  ProjectsP,
  ProjectsWrapper,
} from "./ProjectsElements";
import Icon1 from "../../images/svg1.svg";
import Icon2 from "../../images/svg2.svg";
import Icon3 from "../../images/svg3.svg";
import { Button } from "../ButtonElement";
import ProjectsModal from "./ProjectsModal";
import { portfolio } from "./Data";

const Projects = () => {
  const [show, setShow] = useState(false);
  const [item, setItem] = useState(portfolio);

  const onOpen = () => setShow(true);

  const onClose = () => setShow(false);

  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>My featured projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard onClick={onOpen}>
          <ProjectsIcon src={Icon1} />
          <ProjectsH2>Portfolio website</ProjectsH2>
          <ProjectsP>
            Click on the card to learn more about the project.
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon2} />
          <ProjectsH2>Pizza ordering app</ProjectsH2>
          <ProjectsP>
            Click on the card to learn more about the project.
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon3} />
          <ProjectsH2>Kanban Board</ProjectsH2>
          <ProjectsP>
            Click on the card to learn more about the project.
          </ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>
      <Button>See more</Button>
      <ProjectsModal item={item} onClose={onClose} show={show} />
    </ProjectsContainer>
  );
};

export default Projects;
