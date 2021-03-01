import React, { useState } from "react";
import Modal from "react-modal";
import { IconContext } from "react-icons";
import { FiMinus, FiPlus } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { DataEng, DataPL } from "../Data";
import { useLanguage } from "../../../context";
import {
  ProjectContainer,
  ProjectsContainer,
  Wrap,
  Dropdown,
  ProjectsClose,
  ProjectImg,
  ProjectDesc,
  ProjectLinks,
} from "./AllProjectsElements";
import { Button } from "../../ButtonElement";

Modal.setAppElement("#root");

const ProjectsModal = ({ show, onClose }) => {
  const [clicked, setClicked] = useState(3);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  const { english } = useLanguage();

  const Data = english ? DataEng : DataPL;

  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      className="modal-courses"
      overlayClassName="overlay"
    >
      <IconContext.Provider value={{ color: "#00ffb9", size: "2rem" }}>
        <ProjectsContainer>
          <h1>Click on the project name to get more details:</h1>
          {Data.map((item, index) => {
            return (
              <ProjectContainer key={index}>
                <Wrap key={index} onClick={() => toggle(index)}>
                  <h1>{item.title}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <ProjectImg src={item.img} />
                    <ProjectDesc>{item.desc}</ProjectDesc>
                    <ProjectLinks>
                      {item.live ? (
                        <a
                          href={item.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: "none" }}
                        >
                          <Button
                            style={{
                              fontSize: "1.6rem",
                            }}
                          >
                            Live
                          </Button>
                        </a>
                      ) : null}
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button style={{ fontSize: "1rem" }}>
                          <AiFillGithub />
                        </Button>
                      </a>
                    </ProjectLinks>
                  </Dropdown>
                ) : null}
              </ProjectContainer>
            );
          })}
          <ProjectsClose onClick={onClose} />
        </ProjectsContainer>
      </IconContext.Provider>
    </Modal>
  );
};

export default ProjectsModal;
