import React from "react";
import { AiFillGithub } from "react-icons/ai";
import Modal from "react-modal";
import { Button } from "../../ButtonElement";

import {
  ProjectClose,
  ProjectContainer,
  ProjectDesc,
  ProjectLinks,
  ProjectImg1,
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
        <ProjectImg1 src={item.img} />
        <ProjectDesc> {item.desc} </ProjectDesc>
        <ProjectLinks>
          {item.live ? (
            <a href={item.live} target="_blank" rel="noopener noreferrer">
              <Button style={{ fontSize: "1rem", fontWeight: "bold" }}>
                Live
              </Button>
            </a>
          ) : null}
          <a href={item.github} target="_blank" rel="noopener noreferrer">
            <Button style={{ fontSize: "1 rem", fontWeight: "bold" }}>
              <AiFillGithub /> GitHub
            </Button>
          </a>
        </ProjectLinks>
        <ProjectClose onClick={onClose} />
      </ProjectContainer>
    </Modal>
  );
};

export default ProjectsModal;
