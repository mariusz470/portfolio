import React from "react";
import Modal from "react-modal";

import {
  ProjectClose,
  ProjectContainer,
  ProjectDesc,
  ProjectGithub,
  ProjectImg1,
  ProjectImg2,
  ProjectImg3,
  ProjectLive,
  ProjectTech,
  ProjectTitle,
} from "./ProjectsModalElements";

Modal.setAppElement("#root");

const ProjectsModal = ({ item, onClose, show }) => {
  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
    >
      <ProjectContainer>
        <ProjectTitle>{item.title}</ProjectTitle>
        <ProjectImg1 src={item.img1} />
        <ProjectImg2 src={item.img2} />
        <ProjectImg3 src={item.img3} />
        <ProjectDesc> {item.desc} </ProjectDesc>
        <ProjectTech>
          <p>Some text</p>
        </ProjectTech>
        <ProjectLive />
        <ProjectGithub />
        <ProjectClose onClick={onClose} />
      </ProjectContainer>
    </Modal>
  );
};

export default ProjectsModal;
