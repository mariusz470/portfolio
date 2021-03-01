import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const ProjectsContainer = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  h1 {
    color: #fff;
    text-align: center;
  }
`;

export const ProjectContainer = styled.div`
  display: grid;
  padding: 0.5rem;
  color: #fff;
`;
export const ProjectImg = styled.img`
  max-width: 100%;
  max-height: 300px;
  align-self: center;
  margin: 20px 0 20px;
`;

export const ProjectDesc = styled.p`
  font-size: 0.5rem;
`;

export const ProjectsClose = styled(AiOutlineCloseCircle)`
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
    padding: 1rem;
    font-size: 1.5rem;
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
    font-size: 1rem;
    margin-bottom: 1rem;
    padding-left: 1rem;
  }
`;
export const ProjectLinks = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-left: 20px;
  margin-bottom: 10px;
`;
