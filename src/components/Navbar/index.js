import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavLang,
  Eng,
  Pl,
} from "./NavbarElements";
import Polish from "../../images/poland.svg";
import English from "../../images/united-kingdom.svg";
import { useLanguage } from "../../context";
import { DataEng, DataPL } from "./Data";

function Navbar({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);

  const { english, setEnglish } = useLanguage();
  useEffect(() => {
    const polish = localStorage.getItem("english") === "false";
    if (polish) {
      setEnglish(false);
    }
  }, [setEnglish]);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const toggleLanguage = () => {
    setEnglish(!english);
    localStorage.setItem("english", !english);
  };

  const Data = english ? DataEng : DataPL;

  return (
    <React.Fragment>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              Mariusz Kiciński
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {Data.about}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="skills"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {Data.skills}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="learning"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {Data.courses}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="projects"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {Data.projects}
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {Data.contact}
              </NavBtnLink>
            </NavBtn>
            <NavLang>
              <Eng src={English} english={english} onClick={toggleLanguage} />
              <Pl src={Polish} english={english} onClick={toggleLanguage} />
            </NavLang>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </React.Fragment>
  );
}

export default Navbar;
