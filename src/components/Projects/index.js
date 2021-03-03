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
import Icon1 from "../../images/portfolio.png";
import Icon2 from "../../images/pizza.png";
import Icon3 from "../../images/kanban.png";
import { Button } from "../ButtonElement";
import ProjectsModal from "./FeaturedProjects/ProjectsModal";
import AllProjects from "./AllProjects";
import { DataEng, DataPL, TextEng, TextPL } from "./Data";
import { useLanguage } from "../../context";

const Projects = () => {
  const [show, setShow] = useState(false);

  const [showAll, setShowAll] = useState(false);

  const [item, setItem] = useState(DataEng[0]);

  const { english } = useLanguage();

  const Data = english ? DataEng : DataPL;

  const Text = english ? TextEng : TextPL;

  const onOpen = (obj) => {
    setItem(obj);
    setShow(true);
  };

  const onClose = () => setShow(false);

  const onOpenAll = () => setShowAll(true);

  const onCloseAll = () => setShowAll(false);

  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>{Text.h1}</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard onClick={() => onOpen(Data[0])}>
          <ProjectsIcon src={Icon1} />
          <ProjectsH2>Portfolio website</ProjectsH2>
          <ProjectsP>{Text.click}</ProjectsP>
        </ProjectsCard>
        <ProjectsCard onClick={() => onOpen(Data[1])}>
          <ProjectsIcon src={Icon2} />
          <ProjectsH2>Pizza ordering app</ProjectsH2>
          <ProjectsP>{Text.click}</ProjectsP>
        </ProjectsCard>
        <ProjectsCard onClick={() => onOpen(Data[2])}>
          <ProjectsIcon src={Icon3} />
          <ProjectsH2>Kanban Board</ProjectsH2>
          <ProjectsP>{Text.click}</ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>
      <Button primary={true} dark={true} onClick={onOpenAll}>
        {Text.button}
      </Button>
      <ProjectsModal item={item} onClose={onClose} show={show} />
      <AllProjects onClose={onCloseAll} show={showAll} />
    </ProjectsContainer>
  );
};

export default Projects;
