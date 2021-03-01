import React from "react";
import { useLanguage } from "../../context";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SidebarLang,
  Eng,
  Pl,
} from "./SidebarElements";
import Polish from "../../images/poland.svg";
import English from "../../images/united-kingdom.svg";
import { DataEng, DataPL } from "./Data";

const Sidebar = ({ isOpen, toggle }) => {
  const { english, setEnglish } = useLanguage();

  const toggleLanguage = () => {
    setEnglish(!english);
  };

  const Data = english ? DataEng : DataPL;

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            {Data.about}
          </SidebarLink>
          <SidebarLink to="skills" onClick={toggle}>
            {Data.skills}
          </SidebarLink>
          <SidebarLink to="learning" onClick={toggle}>
            {Data.courses}
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>
            {Data.projects}
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="contact" onClick={toggle}>
            {Data.contact}
          </SidebarRoute>
        </SideBtnWrap>
        <SidebarLang>
          <Eng src={English} english={english} onClick={toggleLanguage} />
          <Pl src={Polish} english={english} onClick={toggleLanguage} />
        </SidebarLang>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
