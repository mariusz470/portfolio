import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: grid;
  max-height: 100%;
  grid-template-columns: 1fr 1fr 0.8fr 0.2fr;
  grid-template-rows: 0.7fr 1.3fr 1.7fr 0.8fr 0.5fr;
  gap: 10px 20px;
  grid-template-areas:
    "Title Title Title x"
    "Img1 Img2 Img3 Img3"
    "Desc Desc Desc Desc"
    "Tech Tech Tech Tech"
    ". Live Github .";
`;
export const ProjectTitle = styled.h1`
  grid-area: Title;
  text-align: center;
`;
export const ProjectImg1 = styled.img`
  grid-area: Img1;
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
export const ProjectImg2 = styled.img`
  grid-area: Img2;
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
export const ProjectImg3 = styled.img`
  grid-area: Img3;
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ProjectDesc = styled.div`
  grid-area: Desc;
`;
export const ProjectTech = styled.div`
  grid-area: Tech;
`;
export const ProjectLive = styled.button`
  grid-area: Live;
`;

export const ProjectGithub = styled.button`
  grid-area: Github;
`;

export const ProjectClose = styled.button`
  grid-area: x;
  height: 40px;
  width: 40px;
  justify-self: end;
`;
