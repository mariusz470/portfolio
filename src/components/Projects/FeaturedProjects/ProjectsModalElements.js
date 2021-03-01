import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const ProjectContainer = styled.div`
  display: grid;
  max-height: 100%;
  max-width: 100%;
  grid-template-rows: 0.7fr 1.3fr 1.7fr 0.8fr 0.5fr;
  gap: 10px 20px;
  justify-content: center;
  margin: 20px 20px 0 20px;
`;
export const ProjectTitle = styled.h1`
  text-align: center;
`;
export const ProjectImg1 = styled.img`
  max-width: 100%;
  max-height: 300px;
  margin-bottom: 10px;
  justify-self: center;
`;

export const ProjectDesc = styled.div``;
export const ProjectLinks = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  margin-left: 20px;
`;

export const ProjectClose = styled(AiOutlineCloseCircle)`
  position: absolute;
  right: 0;
  top: 80px;
  color: #00ffb9;
  font-size: 2rem;
`;
