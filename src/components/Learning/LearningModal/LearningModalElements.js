import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const LearningContainer = styled.div`
  display: grid;
  max-height: 100%;
  max-width: 100%;
  gap: 10px 0px;
`;

export const CoursesContainer = styled.div`
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
  max-width: 100%;
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
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  border-bottom: 1px solid #00ffb9;
  border-top: 1px solid #00ffb9;
  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    padding-left: 1rem;
  }
`;
