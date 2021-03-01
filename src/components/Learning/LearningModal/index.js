import React, { useState } from "react";
import Modal from "react-modal";
import { IconContext } from "react-icons";
import { FiMinus, FiPlus } from "react-icons/fi";
import { uni, courses } from "./Data";
import {
  CoursesContainer,
  LearningContainer,
  Wrap,
  Dropdown,
  LearningClose,
} from "./LearningModalElements";

Modal.setAppElement("#root");

const LearningModal = ({ show, onClose }) => {
  const [clicked, setClicked] = useState(false);

  const toggle = (id) => {
    if (clicked === id) {
      return setClicked(null);
    }

    setClicked(id);
  };

  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      className="modal-courses"
      overlayClassName="overlay"
    >
      <IconContext.Provider value={{ color: "#00ffb9", size: "2rem" }}>
        <LearningContainer>
          <CoursesContainer>
            <h1>Courses I have finished:</h1>
            <Wrap onClick={() => toggle("uni")}>
              <h1>{uni.name}</h1>
              <span>{clicked === "uni" ? <FiMinus /> : <FiPlus />}</span>
            </Wrap>
            {clicked === "uni" ? (
              <Dropdown>
                {uni.courses.map((item, index) => {
                  return <p key={index}>{item}</p>;
                })}
              </Dropdown>
            ) : null}

            <Wrap onClick={() => toggle("courses")}>
              <h1>{courses.name}</h1>
              <span>{clicked === "courses" ? <FiMinus /> : <FiPlus />}</span>
            </Wrap>
            {clicked === "courses" ? (
              <Dropdown>
                {courses.courses.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </Dropdown>
            ) : null}
          </CoursesContainer>
          <LearningClose onClick={onClose} />
        </LearningContainer>
      </IconContext.Provider>
    </Modal>
  );
};

export default LearningModal;
