import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const LearningContainer = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  gap: 10px 0px;
  grid-template-areas:
    ". x"
    "Courses .";
`;

export const CoursesContainer = styled.div`
  grid-area: Courses;
  padding: 2rem;
  color: #fff;
`;

export const LearningClose = styled(AiOutlineCloseCircle)`
  position: absolute;
  right: 0;
  top: 80px;
  color: #00ffb9;
  font-size: 2rem;
`;
export const Wrap = styled.div`
  background: #272727;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 2rem;
    font-size: 2rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

export const Dropdown = styled.div`
  background: #1c1c1c;
  color: #f2f2f2;
  width: 100%;
  /* height: 100px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  border-bottom: 1px solid #00ffb9;
  border-top: 1px solid #00ffb9;
  p {
    font-size: 2rem;
    margin-bottom: 1rem;
    padding-left: 1rem;
  }
`;
