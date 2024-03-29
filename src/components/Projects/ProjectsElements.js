import styled from "styled-components";

export const ProjectsContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 1000px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ProjectsWrapper = styled.div`
  max-width: 100%;
  margin: 20px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    max-width: 100%;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ProjectsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ProjectsIcon = styled.img`
  height: 160px;
  margin-bottom: 10px;
`;

export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProjectsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ProjectsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
